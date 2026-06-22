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
    if(countListItems()-countCheckedItems() === 1 ){
        document.body.style.backgroundImage= butterflyLifeCycle[0];
    } 
    else if(countListItems()-countCheckedItems() === 2 ){
        document.body.style.backgroundImage= butterflyLifeCycle[1];
    }
    else if(countListItems()-countCheckedItems() === 3 ){
        document.body.style.backgroundImage=butterflyLifeCycle[2];
    }
    else if(countListItems()-countCheckedItems() === 4 ){
        document.body.style.backgroundImage=butterflyLifeCycle[3];
    }
}

function greaterThanFour(){
    if(countListItems()>4){
      return Math.trunc(countListItems()/4);
    }
}

function showButterflyStageGreaterThan4(){
    for(var i=0; i<countListItems();i++){
        for(var i=0; i<greaterThanFour(); i++){
            showButterflyStage4();
        }
    }
}