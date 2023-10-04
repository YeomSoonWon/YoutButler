package com.ficrew.yourbutler.realestates.infrastructure.config;

import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import com.ficrew.yourbutler.realestates.application.CheckBookmarkStatusProcessor;
import com.ficrew.yourbutler.realestates.application.CreateBookmarkProcessor;
import com.ficrew.yourbutler.realestates.application.DeleteBookmarkProcessor;
import com.ficrew.yourbutler.realestates.application.SearchAllRealestatesProcessor;
import com.ficrew.yourbutler.realestates.application.SearchBookmarkListProcessor;
import com.ficrew.yourbutler.realestates.application.SearchRealestateDetailsProcessor;
import com.ficrew.yourbutler.realestates.domain.repository.BookmarkRepository;
import com.ficrew.yourbutler.realestates.domain.repository.SearchRepository;
import com.ficrew.yourbutler.realestates.infrastructure.persistence.es.ElasticsearchRealestateRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RealestateConfig {

    @Bean
    public SearchRealestateDetailsProcessor searchRealestateDetailsProcessor(
        SearchRepository searchRepository
    ) {
        return new SearchRealestateDetailsProcessor(
            searchRepository
        );
    }

    @Bean
    public SearchAllRealestatesProcessor searchAllRealestatesProcessor() {
        return new SearchAllRealestatesProcessor();
    }

    @Bean
    public CheckBookmarkStatusProcessor bookmarkCheckProcessor(
        BookmarkRepository bookmarkRepository
    ) {
        return new CheckBookmarkStatusProcessor(
            bookmarkRepository
        );
    }

    @Bean
    public CreateBookmarkProcessor createBookmarkProcessor(
        BookmarkRepository bookmarkRepository,
        MemberRepository memberRepository
    ) {
        return new CreateBookmarkProcessor(
            bookmarkRepository,
            memberRepository
        );
    }

    @Bean
    public DeleteBookmarkProcessor deleteBookmarkProcessor(
        BookmarkRepository bookmarkRepository
    ) {
        return new DeleteBookmarkProcessor(
            bookmarkRepository
        );
    }

    @Bean
    public SearchBookmarkListProcessor searchBookmarkListProcessor(
        ElasticsearchRealestateRepository elasticsearchRealestateRepository,
        BookmarkRepository bookmarkRepository
    ) {
        return new SearchBookmarkListProcessor(
            elasticsearchRealestateRepository,
            bookmarkRepository
        );
    }
}
