package com.ficrew.yourbutler.realestates.application;

import com.ficrew.yourbutler.realestates.application.command.SearchCommand;
import com.ficrew.yourbutler.realestates.domain.entity.RealestateDocument;
import com.ficrew.yourbutler.realestates.infrastructure.persistence.es.ElasticsearchRealestateRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;

@RequiredArgsConstructor
public class SearchAllRealestatesProcessor {

    private final ElasticsearchRestTemplate elasticsearchRestTemplate;

//    public Page<RealestateDocument> execute(SearchCommand searchCommand) {
//        // 1. NativeSearchQueryBuilder를 사용하여 쿼리 생성
//        NativeSearchQueryBuilder searchQueryBuilder = new NativeSearchQueryBuilder();
//
//        // 2. 텍스트 검색 조건 설정
//        BoolQueryBuilder textQuery = QueryBuilders.boolQuery();
//        textQuery.filter(
//                QueryBuilders.rangeQuery("dealOrWarrantPrc_numeric").gte(searchCommand.getDwMin())
//                    .lte(searchCommand.getDwMax()))
//            .filter(QueryBuilders.rangeQuery("rentPrc_numeric").gte(searchCommand.getRpMin())
//                .lte(searchCommand.getRpMax()))
//            .filter(QueryBuilders.rangeQuery("maintenanceFee").gte(searchCommand.getMfMin())
//                .lte(searchCommand.getMfMax()))
//            .filter(QueryBuilders.rangeQuery("years_difference").lte(searchCommand.getUay()))
//            .filter(QueryBuilders.termsQuery("roomType", searchCommand.getRoomType()))
//            .filter(QueryBuilders.matchQuery("realEstateTypeName", searchCommand.getTradeType()));
//
//        // Split keywords and add them to the query
//        for (String keyword : searchCommand.getTextKeyword().split("\\s+")) {
//            BoolQueryBuilder keywordQuery = QueryBuilders.boolQuery()
//                .should(QueryBuilders.matchQuery("address", keyword))
//                .should(QueryBuilders.matchPhrasePrefixQuery("complexName", keyword));
//
//            textQuery.filter(keywordQuery);
//        }
//        Pageable pageable = PageRequest.of(searchCommand.getFrom(), searchCommand.getSize());
//
//        Page<RealestateDocument> results = elasticsearchRealestateRepository.searchAllRealestate(
//            searchCommand, pageable);
//
//        // 4. 페이지네이션 정보 설정
//        searchQueryBuilder.withPageable(pageable);
//
//        // 5. 쿼리 실행
//        NativeSearchQuery searchQuery = searchQueryBuilder.build();
//        SearchHits<RealestateDocument> searchHits = elasticsearchRestTemplate.search(searchQuery,
//            RealestateDocument.class);
//
//        // 6. 결과 반환
//        List<RealestateDocument> documents = searchHits.getSearchHits().stream()
//            .map(SearchHit::getContent)
//            .collect(Collectors.toList());
//
//        return new PageImpl<>(documents, pageable, searchHits.getTotalHits());
//
//    }


    public Page<RealestateDocument> execute(SearchCommand searchCommand) {
        // 1. NativeSearchQueryBuilder를 사용하여 쿼리 생성
        NativeSearchQueryBuilder searchQueryBuilder = new NativeSearchQueryBuilder();

        // 2. 텍스트 검색 조건 설정
        BoolQueryBuilder textQuery = QueryBuilders.boolQuery();

        // 파라미터 조건 설정
        textQuery.filter(
                QueryBuilders.rangeQuery("dealOrWarrantPrc_numeric").gte(searchCommand.getDwMin())
                    .lte(searchCommand.getDwMax()))
            .filter(QueryBuilders.rangeQuery("rentPrc_numeric").gte(searchCommand.getRpMin())
                .lte(searchCommand.getRpMax()))
            .filter(QueryBuilders.rangeQuery("maintenanceFee").gte(searchCommand.getMfMin())
                .lte(searchCommand.getMfMax()))
            .filter(QueryBuilders.rangeQuery("years_difference").lte(searchCommand.getUay()))
            .filter(QueryBuilders.termsQuery("roomType", searchCommand.getRoomType()))
            .filter(QueryBuilders.matchQuery("realEstateTypeName", searchCommand.getTradeType()));

        // Split keywords and add them to the query
        BoolQueryBuilder keywordQuery = QueryBuilders.boolQuery();
        for (String keyword : searchCommand.getTextKeyword().split("\\s+")) {
            keywordQuery.should(QueryBuilders.matchQuery("address", keyword));
            keywordQuery.should(QueryBuilders.matchPhrasePrefixQuery("complexName", keyword));
        }
        textQuery.must(keywordQuery);

        searchQueryBuilder.withQuery(textQuery);

        // 3. 페이지네이션 정보 설정
        Pageable pageable = PageRequest.of(searchCommand.getFrom(), searchCommand.getSize());
        searchQueryBuilder.withPageable(pageable);

        // 4. 쿼리 실행
        NativeSearchQuery searchQuery = searchQueryBuilder.build();
        SearchHits<RealestateDocument> searchHits = elasticsearchRestTemplate.search(searchQuery,
            RealestateDocument.class);

        // 5. 결과 반환
        List<RealestateDocument> documents = searchHits.getSearchHits().stream()
            .map(SearchHit::getContent)
            .collect(Collectors.toList());

        return new PageImpl<>(documents, pageable, searchHits.getTotalHits());
    }
}


