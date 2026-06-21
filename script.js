const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("you must add a task to begin!");
    }else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

const butterflyLifeCycle=[
    "url(assets/egg.png)",
    "url(assets/caterpillar.png)",
    "url(assets/chrysalis.png)",
    "url(assets/butterfly.png)"
];

function showButterflyStage(){
    
}
