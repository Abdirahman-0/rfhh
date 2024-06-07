const form = document.querySelector('form');
const fileInputs = document.querySelectorAll('input[type="file"]');

// Bygg den fullständiga URL:en med implementations-ID:t
const scriptURL = `https://script.google.com/macros/s/AKfycbwLaZzfxPp0e5ch5VYhRezkRFqx-0V5OYXTKvu32AxMAqmfsrGfMdImOQ6qniWvbVFl4Q/exec`;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData();

  // Lägg till fältdata
  formData.append('orgnr', document.querySelector('#orgnr').value);
  formData.append('name', document.querySelector('#name').value);
  formData.append('address', document.querySelector('#address').value);
  formData.append('phone', document.querySelector('#phone').value);
  formData.append('email', document.querySelector('#email').value);

  // Lägg till filer
  fileInputs.forEach(input => {
    for (const file of input.files) {
      formData.append(input.id, file);
    }
  });

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Ansökan skickad!');
      form.reset();
    } else {
      alert('Något gick fel. Försök igen senare.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Något gick fel. Försök igen senare.');
  }
});


  



  const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
});

