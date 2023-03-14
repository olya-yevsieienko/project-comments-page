'use strict';

import { createLi } from './createListItem';

const form = document.querySelector('.form');

const commentList = document.querySelector('.comments__list');
const button = document.querySelector('.form__button');

const commentName = document.querySelector('.form__name');
const commentText = document.querySelector('.form__text');

const errorName = document.querySelector('.form__error-name');
const errorText = document.querySelector('.form__error-text');

function submitForm(event) {
  event.preventDefault();

  if (!commentName.value.trim().length) {
    setErrorName();
  }

  if (!commentText.value.trim().length) {
    setErrorText();
  }

  if (commentName.value.trim().length && commentText.value.trim().length) {
    const li = createLi();

    commentList.append(li);
    document.form.reset();
  }
}

button.addEventListener('click', submitForm);
form.addEventListener('submit', submitForm);

commentName.onblur = function () {
  if (!commentName.value.length) {
    setErrorName();
  }
}

commentName.onfocus = function () {
  commentName.style.borderColor = '';
  errorName.innerHTML = '';
}

commentText.onblur = function () {
  if (!commentText.value.length) {
    setErrorText();
  }
}

commentText.onfocus = function () {
  commentText.style.borderColor = '';
  errorText.innerHTML = '';
}

function setErrorName() {
  commentName.style.borderColor = 'red';
  errorName.innerHTML = 'Введите имя';
}

function setErrorText() {
  commentText.style.borderColor = 'red';
  errorText.innerHTML = 'Введите текст комментария';
}
