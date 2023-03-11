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
  var li = document.querySelectorAll('li');
  li[1].style.color ='green';
  var odd = document.querySelectorAll('li:nth-child(odd)');
  for (var i = 0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
  }