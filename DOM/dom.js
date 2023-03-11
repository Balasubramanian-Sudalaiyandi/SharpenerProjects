//console.dir(document);
//console.log(document.getElementById('header-title'));
  //  var title = document.getElementById('header-title');
    //console.log(title);
  //  var header = document.getElementById('main-header');
//    header.style.borderBottom = 'solid 3px #000';
var item = document.getElementsByClassName('list-group-item');
console.log(item);
for (var i = 0; i<item.length;i++){
    item[i].style.color = 'Green';
    item[i].style.fontWeight = 'bold';
} 
var item = document.getElementsByTagName('li');
console.log(item);
for (var i = 0; i<item.length;i++){
    item[i].style.color = 'Green';
    item[i].style.fontWeight = 'bold';
} 