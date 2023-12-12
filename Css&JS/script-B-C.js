
document.getElementById('showForm').addEventListener('click', function() {
    var contactForm = document.getElementById('contactForm');
    contactForm.classList.toggle('hidden');
  
    if (contactForm.classList.contains('hidden')) {
      this.innerText = 'Show Contact Form';
    } else {
      this.innerText = 'Hide Contact Form';
    }
  });
  