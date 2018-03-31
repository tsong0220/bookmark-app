'use strict';

/* global */

// eslint-disable-next-line no-unused-vars

const store = (function () {

  const addBookmark = function (bookmark) {
    this.list.push(bookmark);

  };

 


  return {
    list: [
      {title: 'bookmark app sucks',
        desc: 'asdlfk',
        url: 'https://www.google.com'

      }
    ],
    expanded: false,
     
    addBookmark
  };

});