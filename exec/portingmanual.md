# 포팅매뉴얼

# 버전 정리 (사용한 JVM, 웹서버, WAS 제품 등의 종류와 설정 값, 버전 (IDE 버전 포함) 기재

- Frontend
    - Typescript 5.2.2
    - Next.js 13.4.19
    - React 18.2.0
    - Node.js 18.16.1
    - yarn 3.6.3(berry)
    - next-auth 4.23.1
    - styled-components 6.0.7
    - styled-reset : 4.5.1
    - axios : 1.5.0
    - react-kakao-maps-sdk : 1.1.15
    - swc : 1.3.82
    - swc/plugin-styled-components : 1.5.73

- Backend
    - Flask
        - pipenv 2023.8.28
        - Python 3.11
        - flask 2.3.3
        - langchain 0.0.39
        - GPT 3.5-turbo-16k-0613
        - pypdf2 3.0.1
        - PyMySQL 1.1.0
    - Data pipeline
        - Elasticsearch 7.8.1
        - jupyter notebook 6.5.4
        - logstash 7.8.1
    - springboot
        - Java 11
        - SpringBoot 2.7.15
        - Spring-boot-starter-tomcat-2.7.15
        - MySQL 8.0.33
        - jjwt-api:0.11.2
        - gradle 8.2.1
        - spring-boot-starter-data-jpa:2.7.15
        - spring-boot-starter-security:2.7.15
        - spring-boot-starter-data-elasticsearch:7.8.1
        - spring-boot-starter-validation:2.7.15
        - lombok:1.18.26
        - spring-boot-devtools:2.7.15
        - spring-boot-starter-web:2.7.15
        - spring-boot-starter-webflux:2.7.15
        - mysql-connector-j:8.0.33
- Infra
    - Jenkins 2.414.2
    - Docker 24.0.2
    - ubuntu 20.04
- IDE
    - Intellij IDEA Ultimate 2023.2
    - PyCharm 2023.2
    - VScode : 1.82.3

# 환경변수 정리

### Frontend - 배포 버전

```jsx
NAVER_ID="RmJYEr9vg1ZjQUZrYc2P"
NAVER_SECRET="49govNvOqT"
KAKAO_ID="4765b472873cc9716940578b8f5ed7f5"
KAKAO_SECRET="7bdqzxWe5szrZZ0eJMe6sjvu56KsyFxX"
GOOGLE_ID="467033647312-n87e1g3gd4t76t33j08p5bg8ur79gp63.apps.googleusercontent.com"
GOOGLE_SECRET="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"
SECRET="04e5e2a1de0b51880e4ce0bf0f0f3fc6"
NEXT_PUBLIC_API_BASE_URL="https://j9a405.p.ssafy.io/api/v1"
NEXTAUTH_URL="https://j9a405.p.ssafy.io"
NEXTAUTH_URL_INTERNAL="https://j9a405.p.ssafy.io"
NEXT_PUBLIC_KAKAOMAP_APPKEY="3fca56e014276fad5ab9edafc848f71e"
```

### Frontend - 개발 버전

```jsx
NAVER_ID="RmJYEr9vg1ZjQUZrYc2P"
NAVER_SECRET="49govNvOqT"
KAKAO_ID="4765b472873cc9716940578b8f5ed7f5"
KAKAO_SECRET="7bdqzxWe5szrZZ0eJMe6sjvu56KsyFxX"
GOOGLE_ID="467033647312-n87e1g3gd4t76t33j08p5bg8ur79gp63.apps.googleusercontent.com"
GOOGLE_SECRET="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"
SECRET="04e5e2a1de0b51880e4ce0bf0f0f3fc6"
NEXT_PUBLIC_API_BASE_URL="https://j9a405.p.ssafy.io/api/v1"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_URL_INTERNAL="http://localhost:3000"
NEXT_PUBLIC_KAKAOMAP_APPKEY="3fca56e014276fad5ab9edafc848f71e"
```

### spring backend - 배포 버전

```yaml
# JPA and DataSource Configuration
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.defer-datasource-initialization=true
spring.jpa.open-in-view=false
spring.datasource.url=jdbc:mysql://j9a405.p.ssafy.io:3306/loan?serverTimezone=Asia/Seoul&characterEncoding=UTF-8&useSSL=false
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=ssafy.yourbutler.pw

# elasticsearch
logging.level.org.springframework.data.elasticsearch.client.WIRE=TRACE

# JWT settings
jwt.issuer=FinancialInnovationCrew
jwt.secret_key= ca972315c2dd67fe07bc289e0280a9c103566f27409416e2249ab7bfd233398c0154cdac5e2b81661576b32ecfb5c2c17d7c5112776a940fb73498171b40e1cb
jwt.access_expiration_ms=10000000
jwt.refresh_expiration_ms=2592000000

# Server Configuration
server.port=5000
```

### spring backend - 개발 버전

```yaml
spring.profiles.active=test
# JPA and DataSource Configuration
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.defer-datasource-initialization=true
spring.jpa.open-in-view=false
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JWT settings
jwt.issuer=FinancialInnovationCrew
jwt.secret_key=ca972315c2dd67fe07bc289e0280a9c103566f27409416e2249ab7bfd233398c0154cdac5e2b81661576b32ecfb5c2c17d7c5112776a940fb73498171b40e1cb
jwt.access_expiration_ms=10000000
jwt.refresh_expiration_ms=2592000000

# Server Configuration
server.port=5000
```

### flask backend - 배포 버전

```yaml
LOAN_API_KEY=5d59280034d722dadbb33602af202e0b
OPENAI_API_KEY=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
MONGO_DB_PASSWORD=ssafy
MYSQL_PASSWORD=ssafy.yourbutler.pw
```

### flask backend - 개발 버전

```yaml
LOAN_API_KEY=5d59280034d722dadbb33602af202e0b
OPENAI_API_KEY=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
MONGO_DB_PASSWORD=ssafy
MYSQL_PASSWORD=ssafy
```

# 외부 서비스 정보 정리

### Front-End

- Naver Open API - 소셜 로그인
    - 서비스 URL : https://j9a405.p.ssafy.io
    - Callback URL : https://j9a405.p.ssafy.io/api/auth/callback/naver
- Kakao Open API - 소셜 로그인
    - Redirect URI :  https://j9a405.p.ssafy.io/api/auth/callback/kakao
- Google Cloud - 소셜 로그인
    - 승인된 JavaScript 원본 : https://j9a405.p.ssafy.io
    - 승인된 리디렉션 URI : https://j9a405.p.ssafy.io/api/auth/callback/google
- Kakao map API

### Back-End

- 금융감독원 금융상품통합비교공시 API
- OpenAI GPT-3.5 Model

# DB 접속 정보, ERD, ElasticSearch Document

**DB HostName**: [j9a405.p.ssafy.io](http://j9a405.p.ssafy.io/)

**DB UserName**: root

**DB Password**: [ssafy.yourbutler.pw](http://ssafy.yourbutler.pw)

![Untitled](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B5%E1%86%BC%E1%84%86%E1%85%A2%E1%84%82%E1%85%B2%E1%84%8B%E1%85%A5%E1%86%AF%20897430ca45884336806c5361204cb84b/Untitled.png)

```json
{
  "mappings": {
    "properties": {
      "articleNo": { "type": "long"},
      "complexNo": { "type": "long", "index": false },
      "hscpNo": { "type": "float", "index": false },
      "ptpNo": { "type": "float", "index": false },
      "tradeTypeCode": { "type": "keyword", "index": false },
      "complexName": {
        "type": "text",
        "analyzer": "custom_nori_analyzer"
      },
      "sidoName": { "type": "text" },
      "guName": { "type": "text" },
      "dongName": { "type": "text" },
      "address": {
        "type": "text",
        "analyzer": "custom_nori_analyzer"
      },
      "latitude": { "type": "float", "index": false },
      "longitude": { "type": "float", "index": false },
      "roomType": { "type": "keyword" },
      "realEstateTypeName": { "type": "keyword" },
      "floorInfo": { "type": "text", "index": false },
      "buildingName": { "type": "text" },
      "dealOrWarrantPrc": { "type": "text", "index": false },
      "rentPrc": { "type": "text", "index": false},
      "supplyArea": { "type": "float", "index": false },
      "exclusiveArea": { "type": "float" },
      "exclusiveRate": { "type": "integer", "index": false },
      "direction": { "type": "text", "index": false },
      "tagList": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      },
      "description": { "type": "text", "index": false },
      "realtorName": { "type": "text", "index": false },
      "realtorAddress": { "type": "text", "index": false },
      "realtorcellPhoneNo": { "type": "text", "index": false },
      "articleConfirmYmd": { "type": "date", "index": false },
      "roomCnt": { "type": "float", "index": false },
      "bathroomCnt": { "type": "text", "index": false },
      "maintenanceFee": { "type": "float" },
      "lawUsage": { "type": "keyword", "index": false },
      "approvalDate": { "type": "text", "index": false},
      "years_difference": {
        "type": "float"
      },
      "dealOrWarrantPrc_numeric": {
        "type": "float"
      },
      "rentPrc_numeric": {"type": "float"}
    }
  }
}
```

# DB 덤프 파일 최신본

[231005DBDBfile.sql](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B5%E1%86%BC%E1%84%86%E1%85%A2%E1%84%82%E1%85%B2%E1%84%8B%E1%85%A5%E1%86%AF%20897430ca45884336806c5361204cb84b/231005DBDBfile.sql)

# UCC