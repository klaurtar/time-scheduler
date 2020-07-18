const scheduler = (function () {
    const timeTable = {
        monday: {
            afternoon: [],
            evening: []
        },
        tuesday: {
            afternoon: [],
            evening: []
        },
        wednesday: {
            afternoon: [],
            evening: []
        },
        thursday: {
            afternoon: [],
            evening: []
        },
        friday: {
            afternoon: [],
            evening: []
        },
        saturday: {
            afternoon: [],
            evening: []            
        },
        sunday: {
            afternoon: [],
            evening: []
        }
    }
  
    const actuallyWorking = {
        monday: {
            afternoon: [],
            evening: []
        },
        tuesday: {
            afternoon: [],
            evening: []
        },
        wednesday: {
            afternoon: [],
            evening: []
        },
        thursday: {
            afternoon: [],
            evening: []
        },
        friday: {
            afternoon: [],
            evening: []
        },
        saturday: {
            afternoon: [],
            evening: []            
        },
        sunday: {
            afternoon: [],
            evening: []
        }
    }

    function capacityCheck(arr, string, sortedArr){
        if(string === 'afternoon'){
            arr.push(sortedArr[0]);
            arr.push(sortedArr[1]);
    
            arr.forEach(x => {
                x.workedHours = x.workedHours - 4;
                x.capacityLeftPercent = (x.workedHours / x.hours) * 100;
            });
        } else if(string === 'evening'){
            arr.push(sortedArr[0]);
            arr.push(sortedArr[1]);
            arr.push(sortedArr[2]);
    
            arr.forEach((x, i) => {
                if(i === 0 || i === 1){
                    x.workedHours = x.workedHours - 4;
                    x.capacityLeftPercent = (x.workedHours / x.hours) * 100;
                } else {
                    x.workedHours = x.workedHours - 3;
                    x.capacityLeftPercent = (x.workedHours / x.hours) * 100;
                }
                
            });
        }
    }

    let mondayAfternoonSorted = undefined;
    let mondayEveningSorted = undefined;

    function fillShifts(employees) {
        // - check if the employee can't work any more (fill out his capacity)
        employees.forEach((employee) => {
            if(employee.mondayAvailability[0]) timeTable.monday.afternoon.push(employee);
            if(employee.mondayAvailability[1]) timeTable.monday.evening.push(employee);

            if(employee.tuesdayAvailability[0]) timeTable.tuesday.afternoon.push(employee);
            if(employee.tuesdayAvailability[1]) timeTable.tuesday.evening.push(employee);

            if(employee.wednesdayAvailability[0]) timeTable.wednesday.afternoon.push(employee);
            if(employee.wednesdayAvailability[1]) timeTable.wednesday.evening.push(employee);

            if(employee.thursdayAvailability[0]) timeTable.thursday.afternoon.push(employee);
            if(employee.thursdayAvailability[1]) timeTable.thursday.evening.push(employee);

            if(employee.fridayAvailability[0]) timeTable.friday.afternoon.push(employee);
            if(employee.fridayAvailability[1]) timeTable.friday.evening.push(employee);

            if(employee.saturdayAvailability[0]) timeTable.saturday.afternoon.push(employee);
            if(employee.saturdayAvailability[1]) timeTable.saturday.evening.push(employee);

            if(employee.sundayAvailability[0]) timeTable.sunday.afternoon.push(employee);
            if(employee.sundayAvailability[1]) timeTable.sunday.evening.push(employee);
        });
        
        // mondayAfternoonSorted = timeTable.monday.afternoon.sort((a, b) => b.capacityLeftPercent - a.capacityLeftPercent);
        mondayAfternoonSorted = [];
        let number = Math.floor(Math.random() * timeTable.monday.afternoon.length);
        let person = timeTable.monday.afternoon[number];
        mondayAfternoonSorted.push(person);

        console.log(timeTable);

        timeTable.monday.afternoon.splice(number, 1);

        console.log(timeTable);

        console.log(person);
        mondayAfternoonSorted.push(timeTable.monday.afternoon[Math.floor(Math.random() * timeTable.monday.afternoon.length)]);

    }

    function schedule(employees) {
        // - check availabilty
        fillShifts(employees)

    

        capacityCheck(actuallyWorking.monday.afternoon, 'afternoon', mondayAfternoonSorted);

        mondayEveningSorted = timeTable.monday.evening.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        //we need a check so the person does not work a full 8 hours. he must only take the 2pm to 6pm shift then the 7pm to 10pm shift

        capacityCheck(actuallyWorking.monday.evening, 'evening', mondayEveningSorted);

        // - TUESDAY SCHEDULE

        tuesdayAfternoonSorted = timeTable.tuesday.afternoon.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.tuesday.afternoon, 'afternoon', tuesdayAfternoonSorted);

        tuesdayEveningSorted = timeTable.tuesday.evening.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.tuesday.evening, 'evening', tuesdayEveningSorted);

        // - WEDNESDAY SCHEDULE

        wednesdayAfternoonSorted = timeTable.wednesday.afternoon.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.wednesday.afternoon, 'afternoon', wednesdayAfternoonSorted);

        wednesdayEveningSorted = timeTable.wednesday.evening.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.wednesday.evening, 'evening', wednesdayEveningSorted);

        // - THURSDAY SCHEDULE

        thursdayAfternoonSorted = timeTable.thursday.afternoon.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.thursday.afternoon, 'afternoon', thursdayAfternoonSorted);

        thursdayEveningSorted = timeTable.thursday.evening.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.thursday.evening, 'evening', thursdayEveningSorted);

        // - FRIDAY SCHEDULE

        fridayAfternoonSorted = timeTable.friday.afternoon.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.friday.afternoon, 'afternoon', fridayAfternoonSorted);

        fridayEveningSorted = timeTable.friday.evening.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.friday.evening, 'evening', fridayEveningSorted);

        // - SATURDAY SCHEDULE

        saturdayAfternoonSorted = timeTable.saturday.afternoon.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.saturday.afternoon, 'afternoon', saturdayAfternoonSorted);

        saturdayEveningSorted = timeTable.saturday.evening.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.saturday.evening, 'evening', saturdayEveningSorted);

        // - SUNDAY AFTERNOON

        sundayAfternoonSorted = timeTable.sunday.afternoon.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.sunday.afternoon, 'afternoon', sundayAfternoonSorted);

        sundayEveningSorted = timeTable.sunday.evening.sort((a, b) =>  b.capacityLeftPercent - a.capacityLeftPercent);

        capacityCheck(actuallyWorking.sunday.evening, 'evening', sundayEveningSorted);

        return actuallyWorking;
    }
  
    return {
      schedule,
    };
  })();
  