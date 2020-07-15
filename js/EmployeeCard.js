class EmployeeCard{
    constructor(employee){
        this.employeeOptions = employee;

        this.$employeeCard = undefined;
        this.$editButton = undefined;
        this.$deleteButton = undefined;

        this.editHandler = [];
        this.deleteHandler = [];

        this.renderEmployeeCard(this.employeeOptions);

        this.cacheDOMElements();

        this.setUpListeners();

    }

    renderEmployeeCard(employeeInfo){
        this.$employeeCard = document.createElement('div');
        this.$employeeCard.className = "col-md-6 col-lg-4";
        this.$employeeCard.insertAdjacentHTML("afterbegin", ejs.render(employeeCardTemplate, this.employeeOptions));
    }

    cacheDOMElements(){
        this.$editButton = this.$employeeCard.querySelector('.edit-button');
        this.$deleteButton = this.$employeeCard.querySelector('.delete-button');
    }

    getEmployeeCard(){
        return this.$employeeCard;
    }

    getName(){
        return this.employeeOptions.name;
    }

    onDelete(handler){
        this.deleteHandler.push(handler);
    }

    onEdit(handler){
        this.editHandler.push(handler);
    }

    close(){
        this.$employeeCard.remove();
    }

    setUpListeners(){
        this.$deleteButton.addEventListener('click', () => {
            this.deleteHandler.forEach(handler => {
                handler();
            });
            this.close();
        });

        this.$editButton.addEventListener('click', () => {
            this.editHandler.forEach(handler => {
                handler();
            })
        })
    }
}