
 // variables 
const header = document.getElementById('header');
const headerBtn = document.getElementById('headerBtn');
const section1 = document.getElementById('section1');
const accordionBtn = document.getElementsById('accordionBtn1');
const panel = document.getElementsById('panel1');

function removeHeader(){
    header.style.display='none';
    section1.style.marginTop = "5px";
}

function accordion(){
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
}

headerBtn.addEventListener('click', removeHeader);
accordionBtn.addEventListener('click', accordion);