# Book Tracking web-app in React

## Overview
![Alt Text](https://github.com/deep-diver/book-tracking-react/blob/master/%20overview.gif)

The purpose of this project is playing with React framework. Specifically, 'react', 'react-router-dom', and 'react-timer-mixin' packages are used. This project reflects my understanding over some questions below
- how React component is rendered?
- how to manage the states of a React component?
- how to pass click/change event to parent or child components?
- where to load Ajax call to fetch data?

## Features
- initial load of books in each shelf
- move books to different shelf
- search new books
- add one of searched books to the designated shelf
- route between the root '/' and add '/add' urls

## Resources
- index.js
  - app starting point
- App.js
  - conditional layout of Library and Search components
  - update/manage the list of books
- Library.js
  - reusable component to hold different shelf information
  - there are three Library components inside App.js for three different shelves
- Search.js
  - layout a search text box and back button
  - timeout to wait until user ends writing search text (300ms)
  - layout a list of searched Book components
- Book.js
  - reusable component to hold a book information
  - reused in Library component to show books in a shelf
  - reused in Search component to show searching result

## Acknowledgement
This project is a part of requirements to graduate Front-End Web Developer Nanodegree program @Udacity. However, the entire code is built from the ground up. This project only borrow BooksAPI from Udacity's base code.
