const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const butterflyLifeCycle=[
    "assets/egg.png",
    "assets/caterpillar.png",
    "assets/chrysalis.png",
    "assets/butterfly.png"
];

const selectedButterflyImageSRC = butterflyLifeCycle[updateButterflyCycle()];
const container = document.getElementById("butterfly-image-container");
const imgElement = document.createElement("img");
imgElement.src = selectedButterflyImageSRC;
if (container) {
    container.appendChild(imgElement);
}

function addTask(){ 
    if (inputBox.value === ''){
        alert("you must add a task to begin!");
    }else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        cupdateButterflyCycle();
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
       updateButterflyCycle();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    });

function countItems(){
    const count = listContainer.querySelectorAll("li").length;
    console.log("Number of items:" + count);
    return count;
}

function updateButterflyCycle(){}
const stage = countItems();
imgElement.src = butterflyLifeCycle[stage];