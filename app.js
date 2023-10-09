"use strict"

// DOM ---- Document Object Model
// The process of reaching elements in html page and using it in javascript is known as querying the DOM

// document.body.style.backgroundColor = 'yellow';
// document.body.style.color = 'red';
// lets set a variable to avoid repetition DRY(dont repeat ursef)

// let body = document.body.style

// body.backgroundColor = "yellow";
// body.color = "red";

// so lets dive in properly now

// getElementById()
// Select d element or grp of element u wnt
// Decide d effect u wnt 2 apply 2d selection
// getElementById('element') -- make sure d id matches
// We can assign 2 a variable or go straight using the document. 
// Lets do sth basic so u understand cox we wud go into complex tins wich in turn wud need d basic tins u learnt

// document.getElementById("heading-1").style.color = "red";
// document.getElementById("heading-1").style.backgroundColor = "yellow"

let headingTag = document.getElementById("heading-1").style;
headingTag.backgroundColor = 'yellow';
headingTag.color = 'red'
console.log(headingTag);

// getElementsByTagName()
// Html-collection which is almost similar to an array like object
// Index, lenght properties wud work bt not all array methods wud work

const headingTwoTag = document.getElementsByTagName('h2')
console.log(headingTwoTag[1]);

// headingTwoTag.style.backgroundColor = "green"
// headingTwoTag.forEach((singleTag)=> singleTag.style.backgroundColor = "green")
let newHeading = [...headingTwoTag];
newHeading.forEach((singleNewTag)=>singleNewTag.style.backgroundColor='green')

// getElementsByClassName()
// Html-collection which is almost similar to an array like object
// Index, lenght properties wud work bt not all array methods wud work

// let listItems = document.getElementsByClassName('state')

// console.log(listItems[2]);
// let newListItem = [...listItems]
// newListItem.forEach((singleList)=> singleList.style.backgroundColor = "purple");

// Awa lax 2 methods
// querySelector('any css') -- it selects d first element dt mathces d selector picked
// querySelectorAll('any css') -- selects all,forEach wud work here
// ---- Select d element or grp of elements u wnt
// ---- Decide d effect u wnt to apply

// =============================
// querySelector('any css')
// =============================

// let listedItem = document.querySelector('.state');
// console.log(listedItem);
// listedItem.style.backgroundColor = 'red'

// =============================
// querySelectorAll('any css')
// =============================
const listedItems = document.querySelectorAll('.state');
console.log(listedItems);
listedItems.forEach((singleListed)=>singleListed.style.backgroundColor = "blue")

// innerText

// let pTag = document.querySelector('p')
// console.log(pTag);
// console.log(pTag.innerText);
// pTag.innerText += ' Innocent'

// textContent
// console.log(pTag.textContent);
// innerHtml
let newPara = document.querySelector('p');
newPara.innerHTML = '<h1>We dn change am</h1>';

// changing attribute

const link = document.querySelector('a');
console.log(link.getAttribute('href'));


link.setAttribute('href',"https://facebook.com")
link.innerText = 'link to facebook'

// classList
// className
// contain
let headingTag5 = document.querySelector('h5');
console.log(headingTag5);
console.log(headingTag5.className);
console.log(headingTag5.classList.contains('red'));

// headingTag5.classList.add('blue')
let hasClass = headingTag5.classList.contains('blue')
if(hasClass ){
    console.log('e get am');
    
}else{
    
    console.log('e nr get am');
}

// events
// select d element and decide d effect
// what event?
// addEventListener()

let btn = document.querySelector('.btn2');
let paraTag = document.querySelector('.parag');

function changeColor(){
    // alert('hello world')
    let hasClasss = paraTag.classList.contains('blue');
    // if(hasClasss){
    //     paraTag.classList.remove('blue')
    // }else{
    //     paraTag.classList.add('blue')
    // }
    hasClasss ? paraTag.classList.remove('blue') : paraTag.classList.add('blue')
}
btn.addEventListener('click',changeColor)

let button = document.querySelector('.button')
let body = document.querySelector('body')
button.addEventListener('click',()=>{
    // body.backgroundColor = 'black'
    // body.color = 'red'
    let bodyClass = body.classList.contains('dark')
    if( bodyClass){
        body.classList.remove('dark')
        button.innerText = 'dark mode'

        
    }else{
        button.innerText = 'light mode'

        body.classList.add('dark')
    }
    
    
})






