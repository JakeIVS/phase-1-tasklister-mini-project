document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  const toDoList = document.querySelector('ul');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let btn = document.createElement('button')
    btn.textContent = 'remove';
    btn.addEventListener('click', ()=>{
      li.remove();
    })
    let li = document.createElement('li');
    let newTask = e.target.querySelector('#new-task-description').value;
    li.textContent = newTask+"   ";
    let priority = form.querySelector('#priority-list')
    let priorityVal = priority.value;
    console.log(priorityVal)
    if (priorityVal === 'high') {
      colorVar = 'red';
    } else if (priorityVal === 'medium') {
      colorVar = 'orange';
    } else if (priorityVal === 'low') {
      colorVar = 'green';
    } else {
      colorVar = 'black';
    }
    li.style.color = colorVar;
    toDoList.append(li);
    li.append(btn);
    form.reset();
  })
});
