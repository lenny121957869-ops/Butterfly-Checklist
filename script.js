const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const butterflyLifeCycle=[
    "assets/egg.png",
    "assets/caterpillar.png",
    "assets/chrysalis.png",
    "assets/butterfly.png"
];
let butterflyImageElement = null;

window.addEventListener("load", function() {
    setupButterflyImage();
});

function setupButterflyImage() {
    const container = document.getElementById("butterfly-image-container");
    if (container) {
        butterflyImageElement = document.createElement("img");
        container.appendChild(butterflyImageElement);
        showButterflyStage4();
    }
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
        showButterflyStage4();
    }
}, false);


function countListItems(){
    if (!listContainer) return 0;
    const items = listContainer.getElementsByTagName('li');
    return items.length;
}


function countCheckedItems(){
    if (!listContainer) return 0;
    const checkedItems= listContainer.querySelectorAll('li.checked');
    return checkedItems.length;
}


function showButterflyStage4(){
    const remaining = countListItems() - countCheckedItems();
    let stage = 0;
    
    if(remaining === 1 ){
        stage = 0;
    }
    else if(remaining === 2 ){
        stage = 1;
    }
    else if(remaining === 3 ){
        stage = 2;
    }
    else if(remaining === 4 ){
        stage = 3;
    }else{
        stage = 3;
        showButterflyStageGreaterThan4();
    }
    
    if (butterflyImageElement) {
        butterflyImageElement.src = butterflyLifeCycle[stage];
    }
    return stage;
}



