'use strict';

const commentName = document.querySelector('.form__name');
const commentText = document.querySelector('.form__text');
const commentDate = document.querySelector('.form__date');

const today = new Date();
let liId = 1;

export function createLi() {
  const li = document.createElement('li');
  li.className = 'comments__item';
  li.setAttribute('id', `comment-${liId}`);

  const liName = document.createElement('span');
  liName.innerHTML = commentName.value;
  liName.className = 'comments__value comments__value--name';

  const liText = document.createElement('span');
  liText.innerHTML = commentText.value;
  liText.className = 'comments__value';

  const liDate = document.createElement('span');
  formatDate(liDate);

  const liTime = document.createElement('span');
  formatTime(liTime);

  const dateBlock = document.createElement('div');
  dateBlock.className = 'comments__date-block';

  const buttons = document.createElement('div');
  buttons.className = 'comments__buttons';

  const commentHeader = document.createElement('div');
  commentHeader.className = 'comments__header';

  const likeButton = document.createElement('img');
  likeButton.src = '../images/icons/like.png';
  likeButton.className = 'comments__like';

  const deleteButton = document.createElement('img');
  deleteButton.src = '../images/icons/trash.png';
  deleteButton.className = 'comments__delete';
  deleteButton.setAttribute('id', `delButton-${liId}`);

  buttons.append(likeButton, deleteButton);
  dateBlock.append(liDate, liTime);

  commentHeader.append(dateBlock, buttons);

  li.append(commentHeader, liName, liText);
  liId++;

  return li;
}

let selectedDate;

function formatDate(title) {
  const months = ['января', 'февраля', 'марта', 'апреля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  let enteredDate;
  if (commentDate.value) {
    enteredDate = new Date(commentDate.value);
  } else {
    enteredDate = today;
  }

  let date = enteredDate.getDate();
  if (date === today.getDate()) {
    date = 'сегодня';
  } else if (today.getDate() - date === 1) {
    date = 'вчера';
  } else {
    date = `${enteredDate.getDate()} ${months[enteredDate.getMonth()]}`;
  }

  selectedDate = date;

  title.textContent = date;
  title.className = 'comments__value';
}

function formatTime(title) {
  let enteredTime;
  if (selectedDate === 'сегодня') {
    enteredTime = `, ${today.getHours()}:${today.getMinutes()}`;
  } else {
    enteredTime = '';
  }

  title.innerHTML = enteredTime;
  title.className = 'comments__value';
}
