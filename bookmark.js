'use strict';
/* global $*/

//eslint -disable-next-line no-unused-vars

const bookmarkList = (function(){
  function generateBookmark(bookmark) {
    return `
    <li class="bookmark-list" bookmark-id="${bookmark.id}>
        <h3 class="item-title">${bookmark.title}</h3>
        <div class="item">
          <p class="bookmark-descr hidden">${bookmark.desc}</p>
          <div class="item-info">
          <a href="${bookmark.url}" target="_blank" class="bookmark-url">
          ${bookmark.url}</a>
        </div>
    </li>`;
  }

  return {
    generateBookmark,
  };
}());