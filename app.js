window.addEventListener('load',()=>{
    const form = document.querySelector("#new-ip-form");
    const input = document.querySelector("#input-task");
    const task_list = document.querySelector(".task-list");

    form.addEventListener('submit',(e)=>{   
        e.preventDefault();
        
        const task = input.value ;
        if(!task){
            alert("Please enter a task !!!")
            return;
        }

        const task_box = document.createElement('div');
        task_box.classList.add("task-box");
        
        const task_content = document.createElement('div');
        task_content.classList.add("content");

        task_box.appendChild(task_content);
        
        const li_el = document.createElement('input');
        li_el.classList.add('txt'); 
        li_el.type = "text";
        
        li_el.setAttribute('readonly' , 'readonly');
        li_el.setAttribute('value' , task);
        
        task_content.append(li_el);
        
        const actions = document.createElement('div');
        actions.classList.add('actions');
        
        const delte = document.createElement('button');
        delte.classList.add('delete');
        delte.innerHTML = "Delete"

        const edit = document.createElement('button');
        edit.classList.add('add');
        edit.innerHTML = "Edit"
        
        actions.appendChild(delte);
        actions.appendChild(edit);
        task_content.appendChild(actions);
        task_list.appendChild(task_box);
        input.value = "";

        edit.addEventListener('click', ()=>{
            if(edit.innerText == "Edit"){
                li_el.removeAttribute('readonly');
                li_el.focus();
                edit.innerText = "Save";
            }
            else{
                li_el.setAttribute('readonly', 'readonly');
                edit.innerText = "Edit";
            }
        })
        delte.addEventListener('click', ()=>{
            task_list.removeChild(task_box);
            // task_content.removeChild(actions);
        })
    })

})