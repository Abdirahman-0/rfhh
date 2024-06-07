  // Hantera formulärskickning
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Här kan du lägga in kod för att skicka formuläret till servern
      alert('Tack för din ansökan! Vi återkommer med besked inom kort.');
      form.reset();
  });
  

  const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
});