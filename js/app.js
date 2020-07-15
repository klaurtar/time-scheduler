(function app() {
  let employees = [];
  const LOCALSTORAGE_KEY = "employee-session";
  let $timeCardContainer = undefined;
  let $newEmployeeButton = undefined;
  let $scheduleButton = undefined;
  let $test = undefined;

  cacheDOMElements();

  
  // employees.push({
  //   name: "Ryan Talbert",
  //   monday: "All",
  //   tuesday: "All",
  //   wednesday: "Afternoon",
  //   thursday: "night",
  //   friday: "off",
  //   saturday: "off",
  //   sunday: "off",
  //   hours: 20,
  //   daysOff: [
  //     '12/25/20',
  //     '3/14/15'
  //   ]
  // })

  // employees.push({
  //   name: "Matthew Talbert",
  //   monday: "All",
  //   tuesday: "All",
  //   wednesday: "Afternoon",
  //   thursday: "night",
  //   friday: "off",
  //   saturday: "off",
  //   sunday: "off",
  //   hours: 20,
  //   daysOff: [
  //     '12/25/20',
  //     '3/14/15'
  //   ]
  // })
 
  function renderEmployees(){
    $timeCardContainer.innerHTML = '';
    employees.forEach(item => {
      const employee = new EmployeeCard(item);
      const employeeCard = employee.getEmployeeCard();
      const employeeName = item.name;

      employee.onDelete(() => {
        console.log('Delete button was clicked');
        console.log(employeeName, " Employee Name");

        const newEmployeeArr = employees.filter(person => person.name !== employeeName);
        saveEmployees(newEmployeeArr);
      })

      employee.onEdit(() => {
        const dialog = DialogManager.createDialog();
        dialog.open();


      })
      $timeCardContainer.append(employeeCard);
    })
  }
    
    
    
  function renderNewEmployeeForm() {
    const dialog = DialogManager.createDialog();
    dialog.open();

    dialog.setContent(ejs.render(newEmployeeTemplate));

    dialog.onSave(() => {
      createEmployee();

      renderEmployees();
      saveEmployees(employees);
    })
  }

  

  function cacheDOMElements(){
    $timeCardContainer = document.querySelector('#time-card-container');
    $newEmployeeButton = document.querySelector('#new-employee');
    $scheduleButton = document.querySelector('#scheduler');
    $test = document.querySelector('#test');
  }

  function createEmployee(){
    const nameField = document.querySelector('#name');
    const monday = document.querySelector('#monday');
    const tuesday = document.querySelector('#tuesday');
    const wednesday = document.querySelector('#wednesday');
    const thursday = document.querySelector('#thursday');
    const friday = document.querySelector('#friday');
    const saturday = document.querySelector('#saturday');
    const sunday = document.querySelector('#sunday');
    const hours = document.querySelector('#hoursPerWeek');
    const date = document.querySelector('#date');

    const newEmployee = {
      name: nameField.value,
      monday: monday.value,
      tuesday: tuesday.value,
      wednesday: wednesday.value,
      thursday: thursday.value,
      friday: friday.value,
      saturday: saturday.value,
      sunday: sunday.value,
      hours: hours.value,
      daysOff: [
        date.value
      ]
    };

    employees.push(newEmployee);
  }

  function retrieveEmployees(){
    try{
      employees = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY)) || [];
      console.log(employees);
    }catch(e){
      console.log('There was an error retrieving employees: ', e);
    }
  }

  function saveEmployees(arr){
    window.localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify(arr)
    );
  }

  function setUpListeners(){
    $newEmployeeButton.addEventListener('click', renderNewEmployeeForm);
    $scheduleButton.addEventListener('click', () => {
      const test = scheduler.schedule(employees);

      $test.innerText = JSON.stringify(Object.values(test));
    });
  }

  function init(){
    retrieveEmployees();
    cacheDOMElements();
    setUpListeners();

    renderEmployees();

  }
  init();
})();
