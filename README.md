
# Blogger API with Node.js

Blogger API is to manage basic blogging fuctions with authentication. This service developed using Microservice Architecture with Node.js. To handle data, MongoDb used with Mongoose ORM.

## Modules

### User authentication
#### Features
- Register with Blogger
- Login with email

User authenticaton developed using JWT. Every success login, user will get the token for future opetation with blogger API.

### Posts Service
#### Features
- Create Posts
- Update Posts
- Delete Posts
- Get All Posts

### Comment Service
#### Features
- Create Comments
- Update Comments
- Delete Comments
- Get All Comments

## Setup Project

Clone the repo to desired location

` > git clone samithakuruwitaarachchi/bloggerAPI `

` > cd bloggerAPI`

`service_auth`, `service_posts` and `service_comments` modules are located inside the  `bloggerAPI` directory.

## Run `service_auth`

To run Authentication service, follw the below steps. This service run on `Port 3200`. Please make sure there is no any other service running on same port.

`> cd service_auth` - Move to Authentication module

`> npm install` - Install any missing packages required

`> npm start` - Run the service

## Run `service_Posts`

To run Posts service, follw the below steps. This service run on `Port 3212`. Please make sure there is no any other service running on same port.

`> cd service_posts` - Move to Posts module

`> npm install` - Install any missing packages required

`> npm start` - Run the service

## Run `service_Comments`

To run Comments service, follw the below steps. This service run on `Port 3211`. Please make sure there is no any other service running on same port.

`> cd service_comments` - Move to Comments module

`> npm install` - Install any missing packages required

`> npm start` - Run the service


## Unit Testing and Code Coverage

### Run Unit Tests

Test files are located in each module under ` __test__ ` directory.

To run unit tests, follow below steps.

`> npm test`

For Code Coverrage reports

`> npm test -- --coverage`

## Services

Authenticaton Service : `http://localhost:3200`

Posts Service : `http://localhost:3212`

Comments Service : `http://localhost:3211`

## APIs

### Authentication Service

### User Registration

`/users/create` - POST

#### Body Params
  - email
  - password
  - role

### Auser Authentication

`/users/auth` - POST

#### Body Params 
  - email
  - password

#### Response

 With the successfull login, `auth API` return token for login session. This token need to add in header section for further API calls.

## Posts Service

### Create Post

`/posts/create` - POST

#### Header Params
  - authorization : < token >

#### Body Params
  -  title
  -  content
  -  authorID
  -  createDate

### Get All Posts

`/posts/all` - GET

#### Header Params
  - authorization : < token >

### Get Post By author ID

`/posts/:id` - GET

#### Header Params
  - authorization : < token >

#### Params
Replace author ID with `:id` in query string

### Delete post

`/posts/delete/:id` - DELETE

#### Header Params
  - authorization : < token >

#### Params
Replace post ID with `:id` in query string

### Update post

`/posts/:id/update` - PATCH

#### Header Params
  - authorization : < token >

#### Params
Replace post ID with `:id` in query string





 











