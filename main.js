//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));
//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));
//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Bala';
//ul.lastElementChild.innerHTML = '<h3>Pls</h3>';
//const btn = document.querySelector('.btn');
//btn.style.background = 'red';
//btn.addEventListener('click',(e) => {
    //e.preventDefault();
    //document.querySelector('#my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
//});
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');
myForm.addEventListener('submit', Onsubmit);
function Onsubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Pls fill the mandatory field';
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userlist.appendChild(li);
        // clear fields;
        nameInput.value = '';
        emailInput.value = '';
    }
localStorage.setItem('name',`${userlist.nameInput.value }`);
}