  function change() {
    let overLays=document.getElementById("overlays")
    overLays.style.opacity=1
    
  }




  function add() {
    let title=document.getElementById('title')
    let desc=document.getElementById('description')
    let board=document.getElementById('board')
    let overLays=document.getElementById("overlays")
    let myDiv=document.createElement('div')
    let titleValue=title.value
    let desValue=desc.value
  myDiv.setAttribute("class","tasks")
  myDiv.innerHTML+=`
  <h1>${titleValue}</h1>
  <p>${desValue}</p>
    <button class="trash" onclick='deleteItem(event)'>Delete</button>
    `
  overLays.style.opacity=0

  board.append(myDiv)


  console.log(myDiv);

  }


  function deleteItem(event){
    let removeItem=event.target
    removeItem.parentElement.remove()

  }

