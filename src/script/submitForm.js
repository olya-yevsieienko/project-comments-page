'use strict';

const commentList = document.querySelector('.comments__list');
const commentName = document.querySelector('.form__name');
const commentText = document.querySelector('.form__textarea');
const commentDate = document.querySelector('.form__date');
const button = document.querySelector('.form__button');

const today = new Date();

function submitForm(event) {
  event.preventDefault();

  const li = document.createElement('li');
  li.className = 'comments__item';

  const liName = document.createElement('span');
  createLiOption(liName, commentName);

  const liText = document.createElement('span');
  createLiOption(liText, commentText);

  const liDate = document.createElement('span');
  formatDate(liDate);

  const liTime = document.createElement('span');
  formatTime(liTime);

  const dateBlock = document.createElement('div');
  dateBlock.className = 'form__date-block';

  dateBlock.append(liDate, liTime);

  li.append(dateBlock, liName, liText);

  commentList.append(li);
  document.form.reset();
}

button.addEventListener('click', submitForm);

function createLiOption(name, value) {
  name.innerHTML = value.value;
  name.className = 'comments__value';

  return name;
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