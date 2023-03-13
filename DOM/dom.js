//console.dir(document);
//console.log(document.getElementById('header-title'));
  //  var title = document.getElementById('header-title');
    //console.log(title);
  //  var header = document.getElementById('main-header');
//    header.style.borderBottom = 'solid 3px #000';
// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// for (var i = 0; i<item.length;i++){
//     item[i].style.color = 'Green';
//     item[i].style.fontWeight = 'bold';
// } 
// var item = document.getElementsByTagName('li');
// console.log(item);
// for (var i = 0; i<item.length;i++){
//     item[i].style.color = 'Green';
//     item[i].style.fontWeight = 'bold';
// } 
//Queryselector
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';
// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color = 'white';
//QueryselectorAll
  // var li = document.querySelectorAll('li');
  // li[1].style.color ='green';
  // var odd = document.querySelectorAll('li:nth-child(odd)');
  // for (var i = 0;i<odd.length;i++){
  //   odd[i].style.backgroundColor = 'green';
  // }
  // traversing DOM
  //parentNode
// var itemslist = document.querySelector('#items');
// console.log(itemslist);
// console.log(itemslist.parentNode.parentNode.parentNode);

//parentElement
// var itemslist = document.querySelector('#items');
// console.log(itemslist);
// itemslist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemslist.parentElement.parentElement.parentElement);

// //childnode
// console.log(itemslist.childNodes);
// console.log(itemslist.children);

//firstchild
// console.log(itemslist.firstChild);//dont use it because it will take the space from you.
// console.log(itemslist.firstElementChild);
// itemslist.firstElementChild.style.backgroundColor = 'yellow';

//Last child
// console.log(itemslist.lastChild);//dont use it because it will take the space from you.
// console.log(itemslist.lastElementChild);
// itemslist.lastElementChild.style.backgroundColor = 'yellow';
// itemslist.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemslist.nextSibling);
// console.log(itemslist.nextElementSibling);

//previousSibling
// console.log(itemslist.previousSibling);
// console.log(itemslist.previousElementSibling);
// itemslist.previousElementSibling.style.color = 'green';

//create Element
//Create div
// var newDiv = document.createElement('div');
// //add class
// newDiv.className = 'hi';
// //add id
// newDiv.id = 'name';
// //set attribute
// newDiv.setAttribute('title','Hello Div');
// //create textNode
// var newDivtext = document.createTextNode('Hello World');
// //Append text to Div
// newDiv.append(newDivtext);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv, h1);

// var newDiv1 = document.createElement('div');
// //add class
// newDiv1.className = 'hi';
// //add id
// newDiv1.id = 'name';
// //set attribute
// newDiv1.setAttribute('title','Hello Div');
// //create textNode
// var newDiv1text = document.createTextNode('Hello World');
// //Append text to Div
// newDiv1.append(newDiv1text);
// var h2 = document.querySelector('.title');//where do you want to add the content
// var ul = document.querySelector('ul .list-group');//child node which determines the where the element is going to insert
// newDiv1.style.fontSize = '30px';
// console.log(newDiv1);
// h2.insertBefore(newDiv1, ul);


var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', additems);
itemlist.addEventListener('click', removeitem);
filter.addEventListener('keyup',filteritems);
function additems(e){
e.preventDefault();
var newItem = document.getElementById('item').value;
var li = document.createElement('li');
li.className = 'list-group-item';
li.appendChild(document.createTextNode(newItem));

var editBtn = document.createElement('button');
editBtn.className = 'btn btn-sm float-right'
editBtn.appendChild(document.createTextNode('Edit'));
editBtn.style.marginLeft = '10px';
li.appendChild(editBtn);

var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);



itemlist.appendChild(li);
}

function removeitem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure ?')){
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}

function filteritems(e){
  var text = e.target.value.toLowerCase();
  var items = itemlist.getElementsByTagName('li');
  Array.from(items).forEach (function(item) {
    var itemname = item.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else {
      item.style.display = 'none';
    }
  });
}