document.addEventListener('DOMContentLoaded', function() {

  var signIn = document.querySelector('.signin');
  var form = document.querySelector('.modal');
  var fields = document.querySelectorAll('input');

  signIn.addEventListener('click', function(e) {
    form.style.display = 'block';
  })

  var xButton = document.querySelector('.close');

  xButton.addEventListener('click', function(e) {
    form.style.display = 'none';
    fields[0].className = null;
    fields[1].className = null;
  })

  var submit = document.querySelector('.submit');

  submit.addEventListener('click', function(e) {
    fields[0].className = 'error';
    fields[1].className = 'error';
  })

  fields[0].addEventListener('click', function(e) {
    this.className = null;
  })
  fields[1].addEventListener('click', function(e) {
    this.className = null;
  })
});
