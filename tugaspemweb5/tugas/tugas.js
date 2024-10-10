function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
      page.classList.remove('active');
    });
  
    setTimeout(() => {
      document.getElementById(pageId).classList.add('active');
    }, 200);  
  
  document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
  });
}