const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() {
//   const myName = prompt('あなたの名前を入力してください。');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
// }

function setUserName() {
  const myName = prompt('あなたの名前を入力してください。');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}

// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').addEventListener('click', function () {
//   alert('痛っ! つつかないで!');
// });

// document.querySelector('html').addEventListener('click', () => {
//   alert('痛っ! つつかないで!');
// });