'use strict';

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('comments__like--active')) {
    target.src = '../images/icons/like.png';
    target.classList.toggle('comments__like--active');
  } else if (target.classList.contains('comments__like')) {
    target.src = '../images/icons/like--active.png';
    target.classList.toggle('comments__like--active');
  }
})
