// const panel1 = document.querySelector('.panel1');
// const panel2 = document.querySelector('.panel2');
// const panel3 = document.querySelector('.panel3');
// const panel4 = document.querySelector('.panel4');
// const panel5 = document.querySelector('.panel5');

// panel1.addEventListener('mousedown', function(e) {
//   panel1.classList.toggle("open-active");
//   panel1.classList.toggle("open");
// })

// panel2.addEventListener('mousedown', function(e) {
//   panel2.classList.toggle("open-active");
//   panel2.classList.toggle("open");
// })

// panel3.addEventListener('mousedown', function(e) {
//   panel3.classList.toggle("open-active");
//   panel3.classList.toggle("open");
// })

// panel4.addEventListener('mousedown', function(e) {
//   panel4.classList.toggle("open-active");
//   panel4.classList.toggle("open");
// })

// panel5.addEventListener('mousedown', function(e) {
//   panel5.classList.toggle("open-active");
//   panel5.classList.toggle("open");
// })

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));