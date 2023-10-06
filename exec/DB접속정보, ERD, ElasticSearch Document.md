# DB접속정보, ERD, ElasticSearch Document

# 1. MySQL

**DB HostName**: [j9a405.p.ssafy.io](http://j9a405.p.ssafy.io/)

**DB UserName**: root

**DB Password**: [ssafy.yourbutler.pw](http://ssafy.yourbutler.pw)

![Untitled](DB%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%89%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9,%20ERD,%20ElasticSearch%20Document%20897430ca45884336806c5361204cb84b/Untitled.png)

# 2. Elasticsearch Document

- elasticsearch index(realestate) mapping

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

- elasticsearch settings

```bash
{
  "settings": {
    "analysis": {
      "tokenizer": {
        "nori_tokenizer": {
          "type": "nori_tokenizer"
        }
      },
      "analyzer": {
        "korean": {
          "type": "custom",
          "tokenizer": "nori_tokenizer"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "guName": {
        "type": "text",
        "analyzer": "korean"
      },
      "complexName": {
        "type": "text",
        "analyzer": "korean"
      }
    }
  }
}
```