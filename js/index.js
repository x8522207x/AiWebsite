document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.ai_page').addEventListener('click', () => {
    localStorage.setItem('page', 'ai');
  });
  document.querySelector('.floor_page').addEventListener('click', () => {
    localStorage.setItem('page', 'floor');
  });
  document.querySelector('.transportation_page').addEventListener('click', () => {
    localStorage.setItem('page', 'transportation');
  });
  document.querySelector('.store_page').addEventListener('click', () => {
    localStorage.setItem('page', 'store');
  });
  document.querySelector('.media_page').addEventListener('click', () => {
    localStorage.setItem('page', 'media');
  });
});