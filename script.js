const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const butterflyLifeCycle=[
    "assets/egg.png",
    "assets/caterpillar.png",
    "assets/chrysalis.png",
    "assets/butterfly.png"
];

const selectedButterflyImageSRC = butterflyLifeCycle[2];
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
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        showButterflyStage4();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        showButterflyStage4();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


