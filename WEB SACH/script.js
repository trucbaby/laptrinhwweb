
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}
// đăng ký
let registerForm = document.querySelector('.register-form-container');

document.querySelector('#register-btn').onclick = () =>{
  registerForm.classList.toggle('active');
}

document.querySelector('#close-register-btn').onclick = () =>{
  registerForm.classList.remove('active');
}
document.getElementById("btn1").onclick = function () {
  var user = document.getElementById("myText").value;
  document.getElementById("hello-user").innerHTML = user;
  document.getElementById("login").style.display = 'none';
  document.getElementById("logout").style.display = 'block';
  alert('Đăng nhập thành công.')
  loginForm.classList.remove('active');
}
document.getElementById("logout-btn").onclick = function () {
  alert('Đã đăng xuất.')
}
// Quang cao
let adsBook = document.querySelector('.ads');

document.querySelector('#close-ads-btn').onclick = () =>{
  adsBook.classList.toggle('active');
}