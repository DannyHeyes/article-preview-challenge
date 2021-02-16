
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const share = document.querySelector('.share');

openBtn.addEventListener('click', () => {
  share.style.visibility = "visible";
});

closeBtn.addEventListener('click', () => {
  share.style.visibility = "hidden";
});
