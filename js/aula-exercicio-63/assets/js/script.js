function taskManager() {
  const taskInput = document.querySelector('.input-task');
  const taskBtn = document.querySelector('.btn-task');
  const tasks = document.querySelector('.task');

  // criando um elemento html <li>
  function createLi() {
    const li = document.createElement('li');
    return li;
  }

  // habilitando tecla enter para salva uma nova task
  taskInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      if (!taskInput.value) return;
      createTask(taskInput.value);
    }
  });

  // função para limpar o input
  function inputClear() {
    taskInput.value = '';
    taskInput.focus();
  }

  // função cria btn apagar
  function createBtnDel(li) {
    li.innerText += ' ';
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('class', 'delete');
    li.appendChild(delBtn);
  }

  // função criadora de uma nova task
  function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    inputClear();
    createBtnDel(li);
    saveTasks();
  }

  // adicionando task ao clicar no btn
  taskBtn.addEventListener('click', () => {
    if (!taskInput.value) return; // prevendo input vazio
    createTask(taskInput.value);
  });

  // ativando a função de deletar do btn delete
  document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('delete')) {
      const question = confirm('Would you like to delete this task?'); // confirmação de segurança para deletar a task
      if (question) {
        element.parentElement.remove(); // o elemento que temos que deletar é o pai do delBtn ou seja o li
        saveTasks();
      }
    }
  });

  // função para salvar as tarefas e não serem apagadas após recarregar a pagina
  function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for (let task of liTasks) {
      let taskText = task.innerText;
      taskText = taskText.replace('Delete', '').trim();
      tasksList.push(taskText);
    }

    const tasksJSON = JSON.stringify(tasksList); // trasnformando-as em JSON para serem salvas em localstore
    localStorage.setItem('tasks', tasksJSON); // primeiro parametro palavra chave para a recuperação da lista
  }

  // função que recupeta as task do localStorage
  function tasksSavedRecovery() {
    const tasks = localStorage.getItem('tasks');  // revertendo a conversão para serem exibidas as li
    const taskList = JSON.parse(tasks);

    for (let task of taskList) {
      createTask(task);
    }
  }
  tasksSavedRecovery();
}

taskManager();