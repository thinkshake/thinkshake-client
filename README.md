Thinkshake Client
==========

[Client for Thinkshake](https://?/)

## Description
This is the client for Thinkshake.

## Demo

## Requirement
### JavaScript

- [node v7.7.2+](https://nodejs.org/)

### Web Browser

- Chrome - Latest Version
- Safari - Latest Version

## Setup

### On local
#### Install libraries
```npm install```

#### Build for Production
```npm run build```

#### Start dev server to develop
```npm start```
[ローカル環境](http://localhost:5001)

#### Test
```npm test```

### Docker

#### Create docker image on local
```docker build -t thinkshake/client .```

#### Run container
```docker run --name thinkshake-client -d -itv $(pwd):/srv/thinkshake-client -p 5001:5001 thinkshake/client /bin/bash```

**Please make sure that your dev path is shared in Docker**

#### Login container
```docker exec -it thinkshake-client /bin/bash```

## Licence
