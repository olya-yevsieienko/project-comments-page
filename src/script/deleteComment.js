'use strict';

function deleteComment(e) {
  const target = e.target;

  if (target.hasAttribute('id')) {
    const targetId = target.getAttribute('id').slice(10);

    document.getElementById(`comment-${targetId}`).remove();
  }
}

document.addEventListener('click', deleteComment);
