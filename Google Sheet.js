const scriptURL = 'https://script.google.com/macros/s/AKfycbzdVm6fbU5gqC6dgsDz0gdvN5GOepWPeEFWvSmnoQZGFyAhr7r4UEaAh-7TsAGcyed6Mg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your wishes are sent successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
