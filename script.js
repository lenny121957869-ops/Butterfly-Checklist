const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const butterflyLifeCycle=[
    "assets/egg.png",
    "assets/caterpillar.png",
    "assets/chrysalis.png",
    "assets/butterfly.png"
];

window.addEventListener("load", function() {
    setupButterflyImage();
});

function setupButterflyImage() {
    const stage = showButterflyStage4();
    const selectedButterflyImageSRC = butterflyLifeCycle[stage];
    const container = document.getElementById("butterfly-image-container");
    const imgElement = document.createElement("img");
    imgElement.src = selectedButterflyImageSRC;
    
    if (container) {
        container.appendChild(imgElement);
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
        document.body.style.backgroundImage= "url('" + butterflyLifeCycle[0] + "')";
    }
    else if(remaining === 2 ){
        stage = 1;
        document.body.style.backgroundImage= "url('" + butterflyLifeCycle[1] + "')";
    }
    else if(remaining === 3 ){
        stage = 2;
        document.body.style.backgroundImage= "url('" + butterflyLifeCycle[2] + "')";
    }
    else if(remaining === 4 ){
        stage = 3;
        document.body.style.backgroundImage= "url('" + butterflyLifeCycle[3] + "')";
    }else{
        stage = 3;
        showButterflyStageGreaterThan4();
    }
    return stage;
}


function greaterThanFour(){
    if(countListItems()>4){
      return Math.trunc(countListItems()/4);
    }
}


function showButterflyStageGreaterThan4(){
    for(var i=0; i<countCheckedItems();i++){
        for(var j=0; j<greaterThanFour(); j++){
            showButterflyStage4();
        }
    }
}
