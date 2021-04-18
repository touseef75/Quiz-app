let data = [
    {
        question:"Q1)HTML stand for ?",
        a:"hypertext markup language",
        b:"hypertext makeup language",
        c:"hypertext mark language",
        d:"hyper markup language",
        ans:"ans1",
    },
    {
       question:"Q2)js stand for?",
        a:"jequrey",
        b:"javas",
        c:"javascript",
        d:"json", 
        ans:"ans3",
    },
     {
       question:"Q3)how many days in a week?",
        a:"30",
        b:"7",
        c:"3",
        d:"9", 
        ans:"ans2",
    },
    {
       question:"Q4)how many days in a month?",
        a:"30",
        b:"70",
        c:"3",
        d:"2", 
        ans:"ans1",
    }
]

let question = document.getElementById("question")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let but = document.getElementById("but")
let pre = document.getElementById("pre");

let answers = document.querySelectorAll(".answere")
let scoreArea = document.getElementById("scoreArea")
let score = 0;

let incre = 0;
function display(){
    let arr = data[incre];
    question.innerHTML = arr.question;
    a.innerHTML = arr.a;
    b.innerHTML = arr.b;
    c.innerHTML = arr.c;
    d.innerHTML = arr.d;
}
display();

function getallid(){
    let answer;
    answers.forEach((allEle)=>{
        if(allEle.checked){
            answer = allEle.id;
        }
    })
    return answer;
}
  

but.addEventListener("click",()=>{
    let getid = getallid();
    console.log(getid);
    if(getid == data[incre].ans){
        score++;
    }
    incre++;
    if(incre < data.length){
        display();
    }else{
        scoreArea.innerHTML = `
        <h1>YourScored is</h1><h1>${score}/${data.length}🤞</h1>
        `
        scoreArea.classList.remove("score")
    }
})
pre.addEventListener("click",()=>{
    incre--;
    if(incre<data.length){
        display();
    }
})

