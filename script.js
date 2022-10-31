const formEl = document.getElementsByClassName('form')[0];
const getNameEl = document.getElementsByClassName('inputName')[0];
const getPassEl = document.getElementsByClassName('inputPassword')[0];
const nameWrong = document.getElementsByClassName('loginError')[0];
const passWrong = document.getElementsByClassName('passwordError')[0];
const userWrong = document.getElementsByClassName('userError')[0];
const passwordWrong = document.getElementsByClassName('passwordError')[0];
const loginBtn = document.getElementsByClassName('loginBtn')[0];
const userBase = ['max', 'admin'];
const passwordBase = ['password123', '12345678'];

loginBtn.disabled = true;

function emailCheck (email) {
    const emailPart = email.split('@');
    const domain = emailPart[1];

    if (emailPart.length !== 2) {
        nameWrong.innerText = '* Incorrect e-mail format';
        return null;
    }
    
    if (!domain.includes('.')){
        nameWrong.innerText = '* Incorrect e-mail format';
        return null;
    }

    if (domain.length < 4){
        console.log(emailPart[1].length)
        nameWrong.innerText = '* Incorrect e-mail format';
        return null;
    }

    if (domain.startsWith('.')){
        nameWrong.innerText = '* Incorrect e-mail format';
        return null;
    }

    if (domain.endsWith('.')){
        nameWrong.innerText = '* Incorrect e-mail format';
        return null;
    }

    nameWrong.innerText = '';
    return true;
};

getNameEl.addEventListener('blur', () => {
    emailCheck(getNameEl.value);
    // console.log(emailCheck(getNameEl.value));
})

formEl.addEventListener('keyup', () => {
    if (getNameEl.value || getPassEl.value){
     loginBtn.disabled = false;
    };
 
    if (!getNameEl.value || !getPassEl.value){
     loginBtn.disabled = true;
    }
 
    if(getPassEl.value.length >= 6) {
        passWrong.innerText = null;
    } 

    if(getPassEl.value.length < 1){
        passWrong.innerText = ''
    }

    if(getPassEl.value.length < 6){
        passWrong.innerText = '* password is too short, please enter min 6 symbols'
        loginBtn.disabled = true;
    }
    if(getPassEl.value.length < 1){
        passWrong.innerText = ''
    }
 });



function userCheck (email) {
    const emailPart = email.split('@');
    const user = emailPart[0];
    let correct;
    userBase.forEach(el => {
        if (el === user) {
            correct = true;
        }
    });

    return correct;
};

function passwordCheck (password) {
    let correct;
    passwordBase.forEach(el => {
        if (el == password) {
            correct = true;
        }
    });

    return correct;
};



formEl.addEventListener('submit', (e) => {
    if(!emailCheck(getNameEl.value)){
        e.preventDefault();
    };

    if(!userCheck(getNameEl.value)){
        e.preventDefault();
        userWrong.innerText = '* User not found'
    }

    if(!passwordCheck(getPassEl.value)){
        e.preventDefault();
        passwordWrong.innerText = '* wrong password'
    }

    getPassEl.value = null;
});





  













