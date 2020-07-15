const scheduler = (function(){
    const availableEmployees = {
        mondayAfternoon: [],
        mondayEvening: [],
        tuesdayAfternoon: [],
        tuesdayEvening: [],
        wednesdayAfternoon: [],
        wednesdayEvening: [],
        thursdayAfternoon: [],
        thursdayEvening: [],
        fridayAfternoon: [],
        fridayEvening: [],
        saturdayAfternoon: [],
        saturdayEvening: [],
        sundayAfternoon: [],
        sundayEvening: []
    };

    function employeeSorter(person){
        if(person.monday === 'all'){
            availableEmployees.mondayAfternoon.push(person.name);
            availableEmployees.mondayEvening.push(person.name);
        } else if (person.monday === 'afternoon'){
            availableEmployees.mondayAfternoon.push(person.name);
        } else if (person.monday === 'evening'){
            availableEmployees.mondayEvening.push(person.name);
        }

        if(person.tuesday === 'all'){
            availableEmployees.tuesdayAfternoon.push(person.name);
            availableEmployees.tuesdayEvening.push(person.name);
        } else if (person.tuesday === 'afternoon'){
            availableEmployees.tuesdayAfternoon.push(person.name);
        } else if (person.tuesday === 'evening'){
            availableEmployees.tuesdayEvening.push(person.name);
        }

        if(person.wednesday === 'all'){
            availableEmployees.wednesdayAfternoon.push(person.name);
            availableEmployees.wednesdayEvening.push(person.name);
        } else if (person.wednesday === 'afternoon'){
            availableEmployees.wednesdayAfternoon.push(person.name);
        } else if (person.wednesday === 'evening'){
            availableEmployees.wednesdayEvening.push(person.name);
        }

        if(person.thursday === 'all'){
            availableEmployees.thursdayAfternoon.push(person.name);
            availableEmployees.thursdayEvening.push(person.name);
        } else if (person.thursday === 'afternoon'){
            availableEmployees.thursdayAfternoon.push(person.name);
        } else if (person.thursday === 'evening'){
            availableEmployees.thursdayEvening.push(person.name);
        }

        if(person.friday === 'all'){
            availableEmployees.fridayAfternoon.push(person.name);
            availableEmployees.fridayEvening.push(person.name);
        } else if (person.friday === 'afternoon'){
            availableEmployees.fridayAfternoon.push(person.name);
        } else if (person.friday === 'evening'){
            availableEmployees.fridayEvening.push(person.name);
        }
        
        if(person.saturday === 'all'){
            availableEmployees.saturdayAfternoon.push(person.name);
            availableEmployees.saturdayEvening.push(person.name);
        } else if (person.saturday === 'afternoon'){
            availableEmployees.saturdayAfternoon.push(person.name);
        } else if (person.saturday === 'evening'){
            availableEmployees.saturdayEvening.push(person.name);
        }

        if(person.sunday === 'all'){
            availableEmployees.sundayAfternoon.push(person.name);
            availableEmployees.sundayEvening.push(person.name);
        } else if (person.sunday === 'afternoon'){
            availableEmployees.sundayAfternoon.push(person.name);
        } else if (person.sunday === 'evening'){
            availableEmployees.sundayEvening.push(person.name);
        }
    }

    function employeeSchedule(arr){
        const employeeList = arr;

        employeeList.forEach(employee => {
            employeeSorter(employee);
        });

        console.log(availableEmployees);

        
    }

    return {
        schedule: (arr) => {
            employeeSchedule(arr);
            return availableEmployees;
        }
    }
})();