'use strict';

const errorName = document.querySelector('.form__error-name');
const errorText = document.querySelector('.form__error-text');

export function checkName(commentName) {
  if (!commentName.trim()) {
    commentName.style.borderColor = 'red';
    errorName.innerHTML = 'Имя не может быть пустой строкой';
  } else if (commentName.match(/[A-Za-zА-Яа-я]/gi)) {
    commentName.style.borderColor = 'red';
    errorName.innerHTML = 'Введите корректное имя';
  } else {
    return true;
  }
}
