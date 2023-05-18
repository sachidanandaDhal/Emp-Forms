import { LitElement, html, css } from 'lit-element';

class FormDataPage extends LitElement {

  static get properties() {
    return {
      formData: { type: Array },
      filteredformData: { type: Array }
    };
  }

  constructor() {
    super();
    this.formData = JSON.parse(localStorage.getItem("formData")) || [];
    this.filteredformData = [...this.formData];
    this.editingUser = null;
}

  
  static styles = css`

    .card {
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
}

.card-header {
  background-color: #d490d1;
  color: #fff;
  padding: 20px;
}

.card-header h2 {
  margin: 0;
  font-size: 24px;
}

.card-header p {
  margin: 0;
  font-size: 16px;
}

.card-body {
  padding: 20px;
  display:flex;

}
.sub-card-body h1{
  font-size:1.4em;
  text-decoration:underline;
  text-decoration-color:#d490d1;
  text-decoration-thickness: 3px;
  text-underline-offset:12px;
  
}
.sub-card-body{
  padding-left:120px;
}

.card-body p {
  margin: 0;
  padding: 5px 0;
}

.card-body hr {
  margin: 10px 0;
  border-top: 1px solid #ccc;
}

#all-table-data {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    display: 'flex',
    

  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    padding: 5px;
    border: 1px solid #ccc;
  }

  input[type="text"] {
    padding: 0.5rem;
  font-size: 1rem;
  
  
  }

  button {
    padding: 5px 10px;
    background-color:  #00eb2f;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 9px;
    position: right;
  }

  button:hover {
    background-color: #4554a0;
  }
  .delete-button{
    background-color: #ff7700;
    color: #fff;
    border: none;
    cursor: pointer;
    position: right;
    border-radius: 9px;
  }
  .delete-button:hover {
    background-color: #ff0d00;
  }

  .position33{
    display:flex;
  }
  .position33 h1{
    font-size:1em;
    margin-left: 90px;
  }
  .table-body{
    display:flex;
    flex-direction:column;
  }
  .position34 {
  
    display:flex;
  
  }
  .position34 h1{
    font-size:1em;
    margin-left:90px;
  
  }
  .btn{
    display:flex;
    justify-content:center;
  }
  .btn #save,#cancel{
    margin-left: 90px;
    width:150px;
    height:30px;

  }
  .table-body{
    height:300px;
    overflow:scroll;
  }


  
input,
select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #000000;
  border-radius: 7px;
  box-sizing: border-box;
  
}

input:focus,
select:focus {
  outline: none;
  border-color: #3366cc;
  
}
.uni-select{
  width:213px;
}

#search-bar{
 width: 300px;
 border-color: #3366cc;

}

  `;


render() {
  return html`
  
    <div id="data">
      <h1>Form Data</h1>
      <div id="search-bar">
        <label for="search-input" ></label>
        <input type="text" id="search-input" @input="${this.handleSearch}" placeholder="Search.." />
      </div>
      <ol>
      ${this.filteredformData.map(item => html`
<li>
       <div class="card">
          <div class="card-header">
           <h2>${item.name}</h2>
            <p>${item.designation}</p>
            <td>
                  <button href="edit.html" @click="${() => this.editUser(item)}">Edit</button>
                  <button class="delete-button" @click="${() => this.confirmDeleteUser(item)}">Delete</button>
            </td>
          </div>
          <div class="card-body">
            <div class="sub-card-body">
            <h1><strong>Personal Details:</strong></h1>
            <p><strong>Employee Code:</strong> ${item.empCode}</p>
            <p><strong>Official Email Address:</strong> ${item.officialEmail}</p>
            <p><strong>Personal Email Address:</strong> ${item.personalEmail}</p>
            <p><strong>Primary Number:</strong> ${item.primaryContact}</p>
            <p><strong>Secondary Number:</strong> ${item.secondaryContact}</p>
            <p><strong>Emergency Number:</strong> ${item.emergencyContact}</p>
            <p><strong>Department:</strong> ${item.department}</p>
            </div>
            <div class="sub-card-body">
            
            <h1><strong>Correspondence Address:</strong></h1>
            <p><strong>CorrespondenceAddressLine1:</strong>${item.correspondenceAddressLine1}</p>
            <p><strong>CorrespondenceAddressLine2:</strong>${item.correspondenceAddressLine2}</p>
            <p><strong>CorrespondenceLandmark:</strong>${item.correspondenceLandmark}</p>
            <p><strong>CorrespondenceCity:</strong>${item.correspondenceCity}, </p>
            <p><strong>CorrespondenceState:</strong>${item.correspondenceState}</p>
            <p><strong>CorrespondenceZip:</strong> ${item.correspondenceZip}</p>
            <p><strong>CorrespondenceCountry:</strong>${item.correspondenceCountry}</p>
            </div>
            <div class="sub-card-body">
            <h1><strong>Permanent Address:</strong></h1>
            <p><strong>Permanent AddressLine1:</strong>${item.permanentAddressLine1}</p>
            <p><strong>Permanent AddressLine2:</strong>${item.permanentAddressLine2}</p>
            <p><strong>Permanent Landmark:</strong>${item.permanentLandmark}</p>
            <p><strong>Permanent City:</strong>${item.permanentCity}</p>
            <p><strong>Permanent Country:</strong>${item.permanentCountry}</p>
            <p><strong>Permanent State:</strong>${item.permanentState}</p>
            <p><strong>Permanent Zip:</strong> ${item.permanentZip}</p>
            </div>
            </div>
          </div>
        </div>
        ${this.editingUser === item ? html`
        <div class=table-body>
          <div class="position33">
            
                <h1><strong>Name:</strong><br><input type="text" .value="${item.name}" @input="${e => item.name = e.target.value}"></h1>
                <h1><strong>Employee Code:</strong><br><input type="text" .value="${item.empCode}" @input="${e => item.empCode = e.target.value}"></h1>
                <h1><strong>Official Email :</strong><br><input type="text" .value="${item.officialEmail}" @input="${e => item.officialEmail = e.target.value}"></h1>
                 <h1><strong>Personal Email Address:</strong><br><input type="text" .value="${item.personalEmail}" @input="${e => item.personalEmail = e.target.value}"></h1>
</div>


<div class="position33">
               
              <h1><strong>Designation:</strong><br><input type="text" .value="${item.designation}" @input="${e => item.designation = e.target.value}"></h1>
                <h1><strong>Department:</strong><br><input type="text" .value="${item.department}" @input="${e => item.department = e.target.value}"></h1>
                <h1><strong>Primary Contact:</strong><br><input type="text" .value="${item.primaryContact}" @input="${e => item.primaryContact = e.target.value}"></h1>  
                <h1><strong>Secondary Contact:</strong><br><input type="text" .value="${item.secondaryContact}" @input="${e => item.secondaryContact = e.target.value}"></h1>
                
          </div> 


          <div class="position34">
              
                <h1><strong>Emergency Contact:</strong><br><input type="text" .value="${item.emergencyContact}" @input="${e => item.emergencyContact = e.target.value}"></h1>
                <h1><strong>Correspondence Address 1:</strong><br><input type="text" .value="${item.correspondenceAddressLine1}" @input="${e => item.correspondenceAddressLine1 = e.target.value}"></h1>
                <h1><strong>Correspondence Address 2:</strong><br><input type="text" .value="${item.correspondenceAddressLine2}" @input="${e => item.correspondenceAddressLine2 = e.target.value}"></h1>
                <h1><strong>Correspondence Landmark:</strong><br><input type="text" .value="${item.correspondenceLandmark}" @input="${e => item.correspondenceLandmark = e.target.value}"></h1>
</div>


<div class="position34">

                <h1><strong>Correspondence City:</strong><br><input type="text" .value="${item.correspondenceCity}" @input="${e => item.correspondenceCity = e.target.value}"></h1>
                <h1><strong>Correspondence Country:</strong><br><input type="text" .value="${item.correspondenceCountry}" @input="${e => item.correspondenceCountry = e.target.value}"></h1>
                <h1><strong>Correspondence State:</strong><br><input type="text" .value="${item.correspondenceState}" @input="${e => item.correspondenceState = e.target.value}"></h1>
                <h1><strong>Correspondence Zip:</strong><br><input type="text" .value="${item.correspondenceZip}" @input="${e => item.correspondenceZip = e.target.value}"></h1>
</div>

          
       <div class="position33">
            
                <h1><strong>Permanent Address 1:</strong><br><input type="text" .value="${item.permanentAddressLine1}" @input="${e => item.permanentAddressLine1 = e.target.value}"></h1>
                <h1><strong>Permanent Address 2:</strong><br><input type="text" .value="${item.permanentAddressLine2}" @input="${e => item.permanentAddressLine2 = e.target.value}"></h1>
                <h1><strong>Permanent Landmark:</strong><br><input type="text" .value="${item.permanentLandmark}" @input="${e => item.permanentLandmark = e.target.value}"></h1>
                <h1><strong>Permanent City:</strong><br><input type="text" .value="${item.permanentCity}" @input="${e => item.permanentCity = e.target.value}"></h1>
</div>


<div class="position33">
                <h1><strong>Permanent Country:</strong><br><input type="text" .value="${item.permanentCountry}" @input="${e => item.permanentCountry = e.target.value}"></h1>
                <h1><strong>Permanent State:</strong><br><input type="text" .value="${item.permanentState}" @input="${e => item.permanentState = e.target.value}"></h1>
                <h1><strong>Permanent Zip:</strong><br><input type="text" .value="${item.permanentZip}" @input="${e => item.permanentZip = e.target.value}"></h1>
      
</div>

              
            <div class="btn">
              
                  <button @click="${() => this.saveUser(item)}" id="save">Save</button>
                  <button @click="${() => this.cancelEdit()}" id="cancel">Cancel</button>
            </div>
              
              </div>  
            ` : ''}
            </li>
      `)} 
</ol>
      
    </div>
    
    `;
}


confirmDeleteUser(user) {
  if (confirm(`Are you sure you want to delete ${user.name}?`)) {
    this.deleteUser(user);
  }
}
deleteUser(user) {
  const index = this.formData.indexOf(user);
  if (index > -1) {
    this.formData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.requestUpdate();
  }
}
editUser(user) {
    this.editingUser = user;
    this.requestUpdate();
  }
  cancelEdit(user) {
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.editingUser = null;
    this.requestUpdate();
  }
  saveUser(user) {
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.editingUser = null;
    this.requestUpdate();
  }
   handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredformData = this.formData.filter(
      emp => emp.name.toLowerCase().includes(query) || emp.empCode.toLowerCase().includes(query)
    );
  }


}

customElements.define('show-user-data', FormDataPage);
