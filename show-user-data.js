import { LitElement, html,css } from 'lit-element';

class FormDataPage extends LitElement { static styles = css`
:host{
    display:flex;
    justify-content: left;
    
    min-height: 100vh;
    background-image: linear-gradient(#d490d1,#96dede);
    
}
h1{
    font-size: 28px;
    text-align: center;
    font-weight:bold;
    color: #fff;
    padding-bottom: 8px;
    border-bottom: 1px solid silver;
}

ol {
  list-style: none;
  padding: 0;
  
}

li {
  margin-bottom: 10px;

}
.employee-info {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}

.employee-info p {
  margin: 0;
  padding: 5px 0;
}

`;

  
  render() {
    return html`
    <div id="data">
      <h1>Form Data</h1>
      <ol>
        ${this.formData.map(item => html`
        <li>
        <div class="employee-info">
  <p>Full Name: ${item.name}</p>
  <p>Employee Code: ${item.empCode}</p>
  <p>Official Email Address: ${item.officialEmail}</p>
  <p>Personal Email Address: ${item.personalEmail}</p>
  <p>Designation: ${item.designation}</p>
  <p>Department: ${item.department}</p>
  <p>Primary Number: ${item.primaryContact}</p>
  <p>Secondary Number: ${item.secondaryContact}</p>
  <p>Emergency Number: ${item.emergencyContact}</p>
  <p>Correspondence Address Line 1: ${item.correspondenceAddressLine1}</p>
  <p>Correspondence Address Line 2: ${item.correspondenceAddressLine2}</p>
  <p>Correspondence Landmark: ${item.correspondenceLandmark}</p>
  <p>Correspondence City: ${item.correspondenceCity}</p>
  <p>Correspondence State: ${item.correspondenceState}</p>
  <p>Correspondence Country: ${item.correspondenceCountry}</p>
  <p>Correspondence Zip: ${item.correspondenceZip}</p>
  <p>Permanent Address Line 1: ${item.permanentAddressLine1}</p>
  <p>Permanent Address Line 2: ${item.permanentAddressLine2}</p>
  <p>Permanent Landmark: ${item.permanentLandmark}</p>
  <p>Permanent City: ${item.permanentCity}</p>
  <p>Permanent State: ${item.permanentState}</p>
  <p>Permanent Country: ${item.permanentCountry}</p>
  <p>Permanent Zip: ${item.permanentZip}</p>
</div>

              </li>`)}
      </ol>
      </div>
    `;
  }

  static get properties() {
    return {
      formData: { type: Array }
    };
  }

  constructor() {
    super();
    this.formData = JSON.parse(localStorage.getItem("formData")) || [];
  }
}

customElements.define('show-user-data', FormDataPage);
