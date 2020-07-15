const employeeCardTemplate = `

                <div class="card mb-5 box-shadow">
                    
                    <div class="card-body">
                        
                        <div class="employee-card_header">
                            <h5 class="card-title"><%= name %></h5>
                            <div>
                                <i style="margin-right: .6rem; color: green" class="fas fa-edit fa-lg edit-button"></i>
                                <i style="color: red" class="fas fa-times-circle fa-lg delete-button"></i>
                            </div>
                            
                        </div>
                        <hr>

                        <div class="">
                            <h5>Availability</h5>

                            <p>Monday: <span class="monday"><%= monday %></span></p>
                            <p>Tuesday: <span class="tuesday"><%= tuesday %></span></p>
                            <p>Wednesday: <span class="wednesday"><%= wednesday %></span></p>
                            <p>Thursday: <span class="thursday"><%= thursday %></span></p>
                            <p>Friday: <span class="friday"><%= friday %></span></p>
                            <p>Saturday: <span class="saturday"><%= saturday %></span></p>
                            <p>Sunday: <span class="sunday"><%= sunday %></span></p>

                            <hr>
                        </div>

                        <div class="">
                            <h5>Hours per week</h5>

                            <p>Interested in <span><%= hours %></span> hours per week</p>

                            <hr>
                        </div>

                        <div class="">
                            <h5>Days not available to work</h5>

                            <ul>
                                <% daysOff.forEach(day => { %>
                                    <li><%= day %></li>
                                <% }) %>
                            </ul>
                        </div>
                    </div>
                </div>
            
`;

const dialogTemplate = `
    <div class="dialog">
        <div class="overlay"></div>
        <div class="p-2 dialog-box">
            <div class="close-icon"><span class="x-icon">X</span></div>
            <div class="head"></div>
            <div class="body"></div>
            <hr>
            <div id="button-container" class="d-flex justify-content-end mt-3">
                <button class="done-button btn btn-primary"></button>
                <button class="cancel-button btn btn-danger ml-3">Cancel</button>
            </div>
        </div>
    </div> 
`;


const newEmployeeTemplate = `<form>
<div class="new-employee-header mb-3">New Employee</div>

<div>
<div class="form-group">
  <label for="name">Full Name</label>
  <input class="form-control" type="text" id="name">
  </div>
  
  <div class="new-employee-header my-3">Availability</div>
  
  <div class="form-group">
    <label for="monday">Monday</label>
    <select class="form-control mb-2" id="monday" name="monday">
        <option value="all">All</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
        <option value="off">Off</option>
    </select>

  
  
  <label for="tuesday">Tuesday</label>
  <select class="form-control mb-2" id="tuesday" name="tuesday">
    <option value="all">All</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
    <option value="off">Off</option>
  </select>
  
  
  
  <label for="wednesday">Wednesday</label>
  <select class="form-control mb-2" id="wednesday" name="wednesday">
    <option value="all">All</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
    <option value="off">Off</option>
  </select>
  
  
  
  <label for="thursday">Thursday</label>
  <select class="form-control mb-2" id="thursday" name="thursday">
    <option value="all">All</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
    <option value="off">Off</option>
  </select>
  
  
  
  <label for="friday">Friday</label>
  <select class="form-control mb-2" id="friday" name="friday">
    <option value="all">All</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
    <option value="off">Off</option>
  </select>
  
  
  
  <label for="saturday">Saturday</label>
  <select class="form-control mb-2" id="saturday" name="saturday">
    <option value="all">All</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
    <option value="off">Off</option>
  </select>
  
  
  
  <label for="sunday">Sunday</label>
  <select class="form-control mb-5" id="sunday" name="sunday">
    <option value="all">All</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
    <option value="off">Off</option>
  </select>

  
  </div>

  <div class="new-employee-header my-3">Hours Per Week</div>

  <div class="form-group">
    <label for="hoursPerWeek">Hours</label>
    <input class="form-control" type="number" id="hoursPerWeek" name="hoursPerWeek"
       min="1" max="40">
  </div>


  <div class="new-employee-header my-3">Days no available to work</div>

  <div class="form-group">
    <label for="date">Choose a day</label>
    <input class="form-control" type="date" id="date" name="date">
  </div>
</div>
</form>`;