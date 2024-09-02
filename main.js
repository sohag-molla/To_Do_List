const input = document.querySelector("#entered-list"),
    addBtn = document.querySelector("#add-list"),
    saveBtn = document.querySelector("#save-list"),
    tasks = document.querySelector("#tasks");

let editTag;

input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', (event) => {

    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.className='item flex justify-between';
        newItem.innerHTML = `

          <p> ${input.value} </p>

               <div class="item-btn cursor-pointer">
                <i onclick="editTask(this)" class="fa-solid fa-pen-to-square  mx-5 text-blue-700"></i>
                <i class="fa-solid fa-trash text-red-700"></i>
               </div>
        
        `
        tasks.insertBefore(newItem, tasks.childNodes[0])
        input.value = '';
    } else {
        alert('please enter a task')
    }
})

function editTask(editBtn) {

    addBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
    input.focus()

    const parent = editBtn.parentNode.parentNode;
    const taskName = parent.querySelector("p");
    editTag = taskName;
    input.value = taskName.innerText;

}


function saveTask() {
    if (input.value.trim().length != 0) {
        addBtn.style.display = 'inline-block';
        saveBtn.style.display = 'none';
        editTag.innerText = input.value;
        input.value = '';
        editTag = undefined;
    }
}

saveBtn.addEventListener('click', saveTask);

//  delete list//

tasks.addEventListener('click', (e) => {
    if (editTag === undefined) {
        if (e.target.classList.contains("fa-trash")) {
            e.target.parentElement.parentElement.remove();

        }
    }

})
