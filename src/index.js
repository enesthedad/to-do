// IMPORTING MODULES
import ToDo from "./classToDo";

//CONSTS

// FORM ADD BUTTON
const addButton = document.getElementById('add-btn');
// MAIN CONTAINER WHERE IS ADDING TO DO
const mainContainer = document.getElementById('main-container');


// FORM INPUTS
const formName=document.getElementById('todoName');
const formDate=document.getElementById('dueDate');
const formPriority = document.getElementById('formPriority');
const formDescription = document.getElementById('description');

// ADD TO DO FORM 
const confirmForm=document.getElementById('add-to-do');
const cancelAddingButton=document.getElementById('cancel-adding-btn');
// HIDDEN MODALS
const blurContainer=document.querySelector('.blur-container');
const blurContainerRemove=document.querySelector('.blur-container-remove');
// CONFIRMATION ACTION BUTTONS
const agreeBtn = document.querySelector('.yes');
const disagreeBtn = document.querySelector('.no');
// ARRAY FOR ADDING TODOS
const toDoList = [];


function addToDo(obj){
    const newToDo = document.createElement('div');
    newToDo.setAttribute('id',`${obj.id}`);
    newToDo.classList.add('to-do');
    newToDo.innerHTML = obj.innerHTML();
    mainContainer.appendChild(newToDo);
    const removeButtons = document.querySelectorAll('.remove-btn')
    removeButtons.forEach(btn=>btn.addEventListener('click',(e)=>{
        showContainer(blurContainerRemove);
        agreeBtn.addEventListener('click',()=>{
            const removeDiv=(e.target.parentElement.parentElement);
            removeDiv.remove();
            const index =e.target.parentElement.parentElement.id;
            toDoList.splice(index,1);
            hideContainer(blurContainerRemove);

        })
        disagreeBtn.addEventListener('click',()=>{
            hideContainer(blurContainerRemove);
        })
    }))
}
function todoAdder(name,date,priority,description){
    const todoToAdd = new ToDo(name,date,priority,description);
    toDoList.push(todoToAdd);
    addToDo(todoToAdd);
}
function showContainer(container){
    container.classList.remove('hidden');
}
function hideContainer(container){
    container.classList.add('hidden');
}




addButton.addEventListener('click',()=>{
    showContainer(blurContainer);
})
cancelAddingButton.addEventListener('click',()=>{
    hideContainer(blurContainer);
})
confirmForm.addEventListener('click',(e)=>{
    e.preventDefault();
    if(formName.value!=''&&formDate.value!=''&&formPriority.value!=''){
        todoAdder(formName.value,formDate.value,formPriority.value,formDescription.value);
        hideContainer(blurContainer);
        formName.value='';
        formDate.value='';
        formDescription.value='';
    }
    else{
        alert('Invalid Input!')
    }

})
