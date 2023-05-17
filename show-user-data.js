import { LitElement, html, css } from 'lit-element';

class FormDataPage extends LitElement {

  static get properties() {
    return {
      formData: { type: Array }
    };
  }

  constructor() {
    super();
    this.formData = JSON.parse(localStorage.getItem("formData")) || [];
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

  `;

render() {
  return html`
  
    <div id="data">
      <h1>Form Data</h1>
      ${this.formData.map(item => html`
       <div class="card">
          <div class="card-header">
           <h2>${item.name}</h2>
            <p>${item.designation}</p>
            <td>
                  <button @click="${() => this.editUser(item)}">Edit</button>
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
            <p><strong>Employee Code:</strong>${item.permanentAddressLine1}</p>
            <p><strong>Employee Code:</strong>${item.permanentAddressLine2}</p>
            <p><strong>Employee Code:</strong>${item.permanentLandmark}</p>
            <p><strong>Employee Code:</strong>${item.permanentCity}</p>
            <p><strong>Employee Code:</strong>${item.permanentCountry}</p>
            <p><strong>Employee Code:</strong>${item.permanentState}</p>
            <p><strong>Employee Code:</strong> ${item.permanentZip}</p>
            </div>
            </div>
          </div>
        </div>
      `)}
      
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


}

customElements.define('show-user-data', FormDataPage);
