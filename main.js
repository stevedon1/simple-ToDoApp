let form = document.getElementById("form");
let list = document.getElementById("list");
let field = document.getElementById("field");
let time = document.getElementById("time");


form.addEventListener("submit", (ev)=>{
    ev.preventDefault()
    createItems(field.value)
});

function createItems(x){
    let ourHTML = `<li>${x}<button class="button" onclick="deleteItem(this)">Delete Item</button></li>`
    
    if(field.value == ""){
        alert("Please Input Task.")
    }else{
        list.insertAdjacentHTML("beforeend", ourHTML)
    }
    field.value = ""
    field.focus()
}

function deleteItem(deliti){
deliti.parentElement.remove()
}
function masaa(){
let today = new Date()
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
let day = today.getDay();
 if (day == 3){
    return WEDNESDAY
 }
 console.log(day)
}
masaa();
