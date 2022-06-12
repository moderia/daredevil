*
console.dir(document);
// Gives the domain of the web page.
console.log(document.domain);
// Gives the URL of the web page.
console.log(document.URL); 
THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMENTS.
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10])
*/

// console.log(document.all[10]);

// document.all[10].textContent = "I am changing the header";

// console.log(document.forms);

// console.log(document.links);
// console.log(document.images); 

/////////////////////
//GetElementByID

// console.log(document.getElementById('header-title'));

// // 
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);


// headerTitle.textContent = "Changed the Title again."
// headerTitle.innerText = "Hello Changed You Again"

// headerTitle.style.color = 'hotpink';

/////////////////////////////////////
//////////GetElementByClassName

// var items = document.getElementsByClassName('list-group-item');

// console.log(items); 

// // 
// items[1].style.backgroundColor = 'pink'; 
// items[1].style.fontWeight = 'bold'; 
// items[1].textContent = 'Skee Wee'
// items[1].style.color = 'green';

// items[0].style.backgroundColor = 'red'; 
// items[0].style.fontWeight = 'bold'; 
// items[0].textContent = 'Ooooop'
// items[0].style.color = 'white';

// items[2].style.backgroundColor = 'blue'; 
// items[2].style.fontWeight = 'bold'; 
// items[2].textContent = 'Zeee Phi'
// items[2].style.color = 'white';

// 
// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }

// 
// for (let i = 0; i <=20; i+=2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i-=2) {
//     console.log(i);
// }

// const myDiamonds = ['Snacky','Scary','Lily', 'Kitty','IttyBitty','Pinchie', 'Piggy','Lanky','Nibbles','Kibbles'];

// for (let i = 0; i < myDiamonds.length; i++) {
//     console.log(i, myDiamonds[i]);
// }

// for(var i = 0; i < items.length; i++) {

//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = "Changing the List Items";
//     items[i].style.color = 'white';

// }

//////////////////////////////////////////////////////////////////////////////
////////////GetElementByTagName

// 
// var li = document.getElementsByTagName('li');

// console.log(li); 
// console.log(li[1]);

// li[1].textContent = "Hello 2 Now"; 
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';
// li[1].style.color = 'white'; 

// for(var i = 0; i < li.length; i++) {

//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = "I Changed The Items From the DOM";
//     li[i].style.color = 'white'; 

// }

/////////////////////////////////////////////////////////////////////////////
////////////////////////////Query Selector:

// // 
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px hotpink'; 
// // 
// var input = document.querySelector('input');
// input.value = "I just changed the text value in the input box.";
// // 
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "HELLO BUTTON";
// // 
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'; 

// var otherItem = document.querySelector('.list-group-item:nth-child(2)');
// otherItem.style.color = 'coral';

///////////////////////////////////////////////////////////////////////////


var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hey Monte, I changed the title again';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
}

