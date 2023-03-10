'use strict';

const today = new Date();

const yyyy = today.getFullYear();

let mm = today.getMonth() + 1;
if (mm < 10) {
  mm = `0${mm}`
}

let dd = today.getDate();
if (dd < 10) {
  dd = `0${dd}`;
}

const todayDate = `${yyyy}-${mm}-${dd}`;

document.querySelector('.form__date').setAttribute('max', todayDate);
