const arrows = document.querySelector('.left-content');

arrows.addEventListener('click', (e) => {
  const menuClass = e.target.classList;

  const container = document.querySelector('.app');
  const leftArrow = document.querySelector('.fa-arrow-left');
  const rightArrow = document.querySelector('.fa-arrow-right');

  if (menuClass.contains('fa-arrow-left')) {
    container.classList.add('no-menu');
    e.target.style.display = 'none';
    rightArrow.style.display = 'block';
  } else if (menuClass.contains('fa-arrow-right')) {
    container.classList.remove('no-menu');
    e.target.style.display = 'none';
    leftArrow.style.display = 'block';
  }
});
