

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';
   btn.setAttribute('disabled', '');

   const serviceID = 'service_4zfbcxj';
   const templateID = 'template_5scilhq';

   emailjs.sendForm(serviceID, templateID, '#form')
    .then(() => {
      btn.value = 'Send Email';
      btn.removeAttribute('disabled');
      alert('Sent! Thank you for contact me! :)');
 document.getElementById('name').value ='';
 document.getElementById('email').value = '';
 document.getElementById('phone').value='';
 document.getElementById('message').value = '';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
    

 
