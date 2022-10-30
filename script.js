const form = document.getElementsByClassName('form')[0];
const formEl = document.getElementsByClassName('form')[0];
const getNameEl = document.getElementsByClassName('name')[0];
const getPassEl = document.getElementsByClassName('pass')[0];
const nameWrong = document.getElementsByClassName('login')[0];
const passWrong = document.getElementsByClassName('password')[0];
const loginBtn = document.getElementsByClassName('login-btn')[0];

loginBtn.disabled = true;

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

});

formEl.addEventListener('keyup', () => {
   if (getNameEl.value || getPassEl.value){
    loginBtn.disabled = false;
   };
   if (!getNameEl.value || !getPassEl.value){
    loginBtn.disabled = true;
   }
});






