const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const drawer = document.querySelector(".drawer");
const overflow = document.querySelector(".overflow");

openBtn.addEventListener("click", () => {
  drawer.classList.add("active");
  overflow.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  drawer.classList.remove("active");
  overflow.classList.remove("active");
});

overflow.addEventListener("click", () => {
  overflow.classList.remove("active");
  drawer.classList.remove("active");
});

const hideBtn = document.getElementById('hide');
const showBtn = document.getElementById('show');
const gallery = document.querySelector('.gallery');

hideBtn.addEventListener('click', function() {
  gallery.style.display = 'none';
});

showBtn.addEventListener('click', function() {
  gallery.style.display = 'flex';
});

hideBtn.addEventListener('click', function() {
  gallery.style.display = 'none';  
  hideBtn.style.display = 'none';
  showBtn.style.display = 'block';
});


showBtn.addEventListener('click', function() {
  gallery.style.display = 'flex';
  hideBtn.style.display = 'block';
  showBtn.style.display = 'none';

});


hideBtn.style.display = 'none';