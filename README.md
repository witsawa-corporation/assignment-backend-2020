# node-ts-boilerplate

## How to develop

- run `yarn` for install package
- run `yarn start` for start server
- open <http://localhost:3000> in browser

## How to change config

set environment in `app/lib/env.ts` and fix config in `.env.[NODE_ENV]` such as `.env.production`

## Assignment

Please implement from the code with typescript

In the page <http://localhost:3000/cars> show the following

- table show each cars
- group the cars by country and show number of brand in each country

File that you should interest

- /app/lib/getCars.ts => function get data ([axios](https://github.com/axios/axios))
- /app/app.ts => route
- /app/views/index.ejs => template that there is logic ([ejs](https://ejs.co/))

## Q & A

If you have question, you can send question to email: apichan@witsawa.com
