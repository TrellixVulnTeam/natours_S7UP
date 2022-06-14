let cl=console.log;


const navigation = document.getElementById('navigation');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click',function(){
  navigation.classList.toggle('active')
});