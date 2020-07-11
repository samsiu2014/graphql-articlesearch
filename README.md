# GraphQL API endpoint - Article Search

## How to start
1. Git clone this repository.
2. Run `npm i`
3. Run `npm start`.
4. Run api server at `localhost:3001`, port is 3001 by default, it is able to be changed by environment variable `PORT` .

## API
### GET /search

| Argument  | Query string | Description                             | Example          |
|-----------|--------------|-----------------------------------------| ---------------- |
| Text      | `q`          | The text to search.                     | `china`          |
| Topics    | `t`          | The topics to search, delimited by `,`  | `Hong Kong,Asia` |

#### Sample query
#### Search text with `investor` and topics with `Hong Kong` and `Asia`

* `q` as `investor`
* `t` as `Hong Kong,Asia`

`http://localhost:3001/search?q=investor&t=Hong%20Kong,Asia`

#### Response
```
[
  {
    "id": 7,
    "text": "Hong Kong property investors ignore Singapore in favour of cheaper options elsewhere",
    "topics": [
      "Hong Kong",
      "Asia"
    ],
    "image": "http://localhost:3001/img/7.jpg",
    "timeStamp": '2019-09-08T00:00:00.000Z'
  }
]
```

### GET /topics

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
