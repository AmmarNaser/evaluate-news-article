# Evaluate news articles

## Introduction

The developed App uses an API integration with meaning cloud which allows users to run NLP on articles to get some sentimental insights.

## Overview

![This is an image](./_overview/pic.jpg)

## Teck Stack

- JavaScript
  - Reactjs
- SCSS
- Nodejs
  - Express
- Webpack

- ## Setup

  - ### Node server dependencies

    ```
    npm i express node-fetch cors dotenv
    ```

  - ### React dependencies

    ```
    npm i react react-dom
    ```

- > Dev Dependencies

  - ### WebPack

    ```
    npm i -D webpack webpack-cli webpack-dev-server
    ```

    ```
    npm i -D @babel/core @babel/preset-env babel-loader (if react => @babel/preset-react)
    ```

  - ### HTML File

    ```
    npm i -D html-webpack-plugin
    ```

  - ### Testing

    ```
    npm i -D jest babel-jest
    ```

  - ### Style loaders and plugins

    ```
    npm i -D mini-css-extract-plugin
    ```

    ```
    npm i -D style-loader node-sass css-loader sass-loader
    ```

    ```
    npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
    ```

  - ### Service Worker

    ```
    npm i -D workbox-webpack-plugin
    ```

  - ### Scripts

    ```json
    {
    "test": "jest --config jest.config.js",
    "start": "node src/server/index.js",
    "dev": "webpack serve --config webpack.dev.js",
    "build-dev": "webpack --config webpack.dev.js",
    "build-prod": "webpack --config webpack.prod.js"
    },
    ```
