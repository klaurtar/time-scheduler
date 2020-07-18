"use strict";

(function app() {
  let employees = [];
  const LOCALSTORAGE_KEY = 'employee-session';
  let $timeCardContainer = undefined;
  let $newEmployeeButton = undefined;
  let $scheduleButton = undefined;
  let $test = undefined;

  let $mondayAfternoon = undefined;
  let $mondayEvening = undefined;

  let $tuesdayAfternoon = undefined;
  let $tuesdayEvening = undefined;

  let $wednesdayAfternoon = undefined;
  let $wednesdayEvening = undefined;

  let $thursdayAfternoon = undefined;
  let $thursdayEvening = undefined;

  let $fridayAfternoon = undefined;
  let $fridayEvening = undefined;

  let $saturdayAfternoon = undefined;
  let $saturdayEvening = undefined;

  let $sundayAfternoon = undefined;
  let $sundayEvening = undefined;

  cacheDOMElements();

  function renderEmployees() {
    $timeCardContainer.innerHTML = '';
    employees.forEach((item) => {
      const employee = new EmployeeCard(item);
      const employeeCard = employee.getEmployeeCard();
      const employeeName = item.name;

      employee.onDelete(() => {
        console.log('Delete button was clicked');
        console.log(employeeName, ' Employee Name');

        const newEmployeeArr = employees.filter(
          (person) => person.name !== employeeName
        );
        saveEmployees(newEmployeeArr);
      });

      employee.onEdit(() => {
        const dialog = DialogManager.createDialog();
        dialog.open();
      });
      $timeCardContainer.append(employeeCard);
    });
  }

  function renderNewEmployeeForm() {
    const dialog = DialogManager.createDialog();
    dialog.open();

    dialog.setContent(ejs.render(newEmployeeTemplate));

    dialog.onSave(() => {
      createEmployee();

      renderEmployees();
      saveEmployees(employees);
    });
  }

  function cacheDOMElements() {
    $timeCardContainer = document.querySelector('#time-card-container');
    $newEmployeeButton = document.querySelector('#new-employee');
    $scheduleButton = document.querySelector('#scheduler');
    $test = document.querySelector('#test');


    $mondayAfternoon = document.querySelectorAll('.monday-afternoon');
    $mondayEvening = document.querySelectorAll('.monday-evening');

    $tuesdayAfternoon = document.querySelectorAll('.tuesday-afternoon');
    $tuesdayEvening = document.querySelectorAll('.tuesday-evening');

    $wednesdayAfternoon = document.querySelectorAll('.wednesday-afternoon');
    $wednesdayEvening = document.querySelectorAll('.wednesday-evening');

    $thursdayAfternoon = document.querySelectorAll('.thursday-afternoon');
    $thursdayEvening = document.querySelectorAll('.thursday-evening');

    $fridayAfternoon = document.querySelectorAll('.friday-afternoon');
    $fridayEvening = document.querySelectorAll('.friday-evening');

    $saturdayAfternoon = document.querySelectorAll('.saturday-afternoon');
    $saturdayEvening = document.querySelectorAll('.saturday-evening');

    $sundayAfternoon = document.querySelectorAll('.sunday-afternoon');
    $sundayEvening = document.querySelectorAll('.sunday-evening');
  }

  function createEmployee() {
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


    function availabilityToArrayConverter(string){
      const dropDownValue = string;

      if(dropDownValue === 'all') return [true, true];
      if(dropDownValue === 'afternoon') return [true, false];
      if(dropDownValue === 'evening') return [false, true];
      if(dropDownValue === 'off') return [false, false];
    }

    const newEmployee = {
      name: nameField.value,
      monday: monday.value, // [true, false, true]
      tuesday: tuesday.value, // [true, true, true]
      wednesday: wednesday.value, // [false, false, false] -> days off
      thursday: thursday.value,
      friday: friday.value,
      saturday: saturday.value,
      sunday: sunday.value,
      mondayAvailability: availabilityToArrayConverter(monday.value),
      tuesdayAvailability: availabilityToArrayConverter(tuesday.value),
      wednesdayAvailability: availabilityToArrayConverter(wednesday.value),
      thursdayAvailability: availabilityToArrayConverter(thursday.value),
      fridayAvailability: availabilityToArrayConverter(friday.value),
      saturdayAvailability: availabilityToArrayConverter(saturday.value),
      sundayAvailability: availabilityToArrayConverter(sunday.value),

      hours: parseInt(hours.value),
      daysOff: [date.value],
      workedHours: hours.value,
      capacityLeftPercent: 100,
      hasMoreTime: false
    };

    console.log(newEmployee);

    employees.push(newEmployee);
  }

  function retrieveEmployees() {
    try {
      employees =
        JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY)) || [];
      console.log(employees);
    } catch (e) {
      console.log('There was an error retrieving employees: ', e);
    }
  }

  function saveEmployees(arr) {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(arr));
  }

  function setUpListeners() {
    $newEmployeeButton.addEventListener('click', renderNewEmployeeForm);

    $scheduleButton.addEventListener('click', () => {
      const schedule = scheduler.schedule(employees);

      $mondayAfternoon.forEach((div, i) => {
        div.innerText = schedule.monday.afternoon[i].name;
      });

      $mondayEvening.forEach((div, i) => {
        div.innerText = schedule.monday.evening[i].name;
      });

      $tuesdayAfternoon.forEach((div, i) => {
        div.innerText = schedule.tuesday.afternoon[i].name;
      });
  
      $tuesdayEvening.forEach((div, i) => {
        div.innerText = schedule.tuesday.evening[i].name;
      });

      $wednesdayAfternoon.forEach((div, i) => {
        div.innerText = schedule.wednesday.afternoon[i].name;
      });
  
      $wednesdayEvening.forEach((div, i) => {
        div.innerText = schedule.wednesday.evening[i].name;
      });

      $thursdayAfternoon.forEach((div, i) => {
        div.innerText = schedule.thursday.afternoon[i].name;
      });
  
      $thursdayEvening.forEach((div, i) => {
        div.innerText = schedule.thursday.evening[i].name;
      });

      $fridayAfternoon.forEach((div, i) => {
        div.innerText = schedule.friday.afternoon[i].name;
      });
  
      $fridayEvening.forEach((div, i) => {
        div.innerText = schedule.friday.evening[i].name;
      });

      $saturdayAfternoon.forEach((div, i) => {
        div.innerText = schedule.saturday.afternoon[i].name;
      });
  
      $saturdayEvening.forEach((div, i) => {
        div.innerText = schedule.saturday.evening[i].name;
      });

      $sundayAfternoon.forEach((div, i) => {
        div.innerText = schedule.sunday.afternoon[i].name;
      });
  
      $sundayEvening.forEach((div, i) => {
        div.innerText = schedule.sunday.evening[i].name;
      });
    });

  }

  function init() {
    retrieveEmployees();
    cacheDOMElements();
    setUpListeners();

    renderEmployees();
  }
  init();
})();
