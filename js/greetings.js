//  Chapter 2.0 ~ 2.4
/*
const a = 5;
const b = 2;
const myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName); 
*/

// Chapter 2.5
/*
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// get item from array 
console.log(daysOfWeek[4]);
// add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
*/

// Chapter 2.6
/*
const player = {
    name : "nico",
    points : 10, 
    fat : true
};
console.log(player);
player.lastName = "potato";
player.points = 15;
console.log(player);
*/

// Chapter 2.7 ~ 2.8
/*
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is "+ nameOfPerson + 
    " and I'm " + age)
}
sayHello("nico", 10);
*/

// Chapter 2.10 HW
/*const calculator = {
    add : function(a,b) {
        console.log(a+b);
    },
    minus : function(a,b) {
        console.log(a-b);
    },
    divide : function(a,b) {
        console.log(a/b);
    }, 
    powerof : function(a,b) {
        console.log(a**b);
    }
}
calculator.add(5, 5);
calculator.minus(5, 1);
calculator.divide(10, 2);
calculator.powerof(2, 3);
*/

// Chapter 2.13
/*const age = prompt("How old are you?")*/

// Chapter 3.1
/*const title = document.getElementById("title");
title.innerText = "Got you^^";
console.log(title.className);
*/

// Chapter 3.2
/*const title = document.querySelector(".hello h1");
console.log(title);
*/

// Chapter 4.0 ~ 4.7
//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
  // 간편하게 쓸려면 document.querySelector("#login-form input")

/*function onLoginBtnClick() {
    const username = loginInput.value;
    if(username == "") {
        alert("Please write your name");
    }
    else if(username.length > 15) {
        alert("Your name is too long.")
    }
    html에서 div안에 input과 button이 있기 때문에
    이렇게 조건문 만듦 >> but, div가 아닌 form 사용하면
    html기본속성 이용 가능 
}*/
//loginButton.addEventListener("click", onLoginBtnClick);
//form안에 넣으면 enter키 눌렀을 때 전체 화면이 새로고침
//되면서 자동으로 submit됨

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
const link = document.querySelector("a");
function handleLinkClick(event){
    event.preventDefault();
    //브라우저의 기본 동작 막기
}//link클릭은 mouseEvent
link.addEventListener("click", handleLinkClick);
*/

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello " + username;
    /*greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)*/
    paintGreetngs(username);
}//loginform은 submitEvent

function paintGreetngs(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    //윗줄 : submit이벤트가 발생하기를 기다리고 발생하면
    //onLoginSubmit함수 실행
}
else {
    //반복되는 동작을 함수로 새롭게 정의해서 사용
    /*greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
    paintGreetngs(savedUsername);
}

