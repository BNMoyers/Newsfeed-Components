/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

//menu container
const menuButton = document.querySelector('.menu-button')
menuButton.appendChild(createMenu())

function createMenu(arr){
//elements

const menu = document.createElement('div');
const list = document.createElement('ul');

//handling the array

menuItems.forEach(item => {
  let listItem = document.createElement('li');
})

//element structure
menu.appendChild(list)
list.appendChild(listItem)

//classes
menu.classList.add('menu')

//event listener
menuButton.addEventListener('click', event => {
  menu.classList.toggle('menu--open')
})
return menu
}


