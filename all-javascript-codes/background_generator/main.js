let h3 = document.querySelector('h3');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let body = document.getElementById('gradient');

document.addEventListener('input', e => {
  if (e.target === color1 || e.target === color2) {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  }

  h3.innerHTML = `linear-gradient(to right, "${color1.value}", "${color2.value}")`;
});
