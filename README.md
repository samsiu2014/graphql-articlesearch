# GraphQL API endpoint - Article Search

## How to start
1. Git clone this repository.
2. Run `npm i`
3. Run `npm start`.
4. Run api server at `localhost:5000`, port is 5000 by default.

## GraphQL

#### Query articles with pagination
#### Search text with `investor` and topics with `Asia` with page 1 and pagesize is 3

```
{
  articles(q:"investor", t:"Asia", page: 1, pageSize: 3){
  	id
    text
    topics
    image
    timeStamp
  }
}
```

#### Response
```
"articles": [
      {
        "id": "7",
        "text": "Hong Kong property investors ignore Singapore in favour of cheaper options elsewhere",
        "topics": [
          "Asia"
        ],
        "image": "http:localhost:5000/img/7.jpg",
        "timeStamp": "2019-09-08T00:00:00.000Z"
      },
      {
        "id": "8",
        "text": "Indonesia picks area on Borneo for new capital, with relocation estimated to cost US$33 billion",
        "topics": [
          "Asia"
        ],
        "image": "http:localhost:5000/img/8.jpg",
        "timeStamp": "2019-09-07T00:00:00.000Z"
      },
      {
        "id": "10",
        "text": "North Korea launches fresh missiles into sea off Japan.",
        "topics": [
          "Asia"
        ],
        "image": "http:localhost:5000/img/10.jpg",
        "timeStamp": "2019-09-05T00:00:00.000Z"
      }
    ],
```

#### Query articles with cursor
#### Search text with `investor` and topics with `Asia` with article id 7 as cursor and pageSize is 2

```
{
  articlesCursor(q:"investor", t:"Asia", pageSize: 2, cursor: 7){
    id
    text
    topics
    image
    timeStamp
  }
}
```

#### Response
```
"articlesCursor": [
      {
        "id": "7",
        "text": "Hong Kong property investors ignore Singapore in favour of cheaper options elsewhere",
        "topics": [
          "Asia"
        ],
        "image": "http:localhost:5000/img/7.jpg",
        "timeStamp": "2019-09-08T00:00:00.000Z"
      },
      {
        "id": "8",
        "text": "Indonesia picks area on Borneo for new capital, with relocation estimated to cost US$33 billion",
        "topics": [
          "Asia"
        ],
        "image": "http:localhost:5000/img/8.jpg",
        "timeStamp": "2019-09-07T00:00:00.000Z"
      }
    ],
```

### Query topics
```
{
  topics
}
```
#### Response
```
[
  "Hong Kong",
  "Asia",
  "China",
  "Europe",
  "Fashion",
  "Music"
]
```
### GraphQL introspection
```
query {
  __type(name:"Article") {
    name
    fields {
      name
      type {
        name
      }
    }
  }
}
```
#### Response
```
{
  "data": {
    "__type": {
      "name": "Article",
      "fields": [
        {
          "name": "id",
          "type": {
            "name": null
          }
        },
        {
          "name": "text",
          "type": {
            "name": null
          }
        },
        {
          "name": "topics",
          "type": {
            "name": null
          }
        },
        {
          "name": "image",
          "type": {
            "name": "String"
          }
        },
        {
          "name": "timeStamp",
          "type": {
            "name": null
          }
        }
      ]
    }
  }
}
```