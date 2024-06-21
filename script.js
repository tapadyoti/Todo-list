let input = document.querySelector("#input");
let addBtn = document.querySelector("#add");

let addTaskHere = document.querySelector(".listContainer");

let localStorageVal = [];


addBtn.addEventListener("click",()=>{
  let task = input.value;

 if(task === ""){
  alert("You must add something!")
 }
 else{
  let ul = document.createElement("ul");
  ul.className = `lists`;
  ul.innerHTML = ` <li class="item"><span>${task}</span></li>
  <button>Delete</button>`;
  addTaskHere.appendChild(ul)
 }
 input.value="";
 saveData();

})

addTaskHere.addEventListener("click", (e)=>{
  if(e.target.tagName === "SPAN"){
      e.target.classList.toggle("checked");

      const parentLi = e.target.closest("li");
      parentLi.classList.toggle("item")
      parentLi.classList.toggle("itemchecked");
      saveData();
  }
 
  else if(e.target.tagName ==="BUTTON"){
    e.target.parentElement.remove();
    saveData()
  }

})

function saveData(){
  localStorage.setItem("data", addTaskHere.innerHTML)
}
function showData(){
  addTaskHere.innerHTML = localStorage.getItem("data")
}
showData();