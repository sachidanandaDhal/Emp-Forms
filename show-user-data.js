import { LitElement, html, css } from "lit-element";
import "./sachi-11.js";

class FormDataPage extends LitElement {
  static get properties() {
    return {
      formData: { type: Array },
      editingUser: { type: Object },
      searchTerm: { type: String },
    };
  }

  constructor() {
    super();
    this.formData = JSON.parse(localStorage.getItem("formData")) || [];
    this.editingUser = null;
    this.searchTerm = "";
  }

  static styles = css`
    /* Styles for the page */
    *{
    margin: 1px;
    padding: 0.4px;
    box-sizing: border-box;
    
  }

  :host{
    display: block;
    
    background: linear-gradient(-45deg, #240e18, #580455, #144253, #351a63);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    height:  infinite;
    width: 100%;
    
    color: white;
    }
    .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,1,5);
  border-radius: 40px;
  background-image: linear-gradient(#74d2f4,#e68dd4);
  display: flex;
    justify-content: space-around;
    align-items: left;
    flex-direction: column;
    height: 800px;
    width: 500px;
    margin-left: 90px;
    margin-top: 30px;
    color: black;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 1px 1px 20px #000000,
                1px 1px 40px #000000;
        
    float: left;
    padding: 60px; 
    text-align: left;
    font-weight: bold;
    overflow: hidden;
    transition: transform .5s;
  
} 
.card-header {
  background-image: linear-gradient( #f104d5,#023547);
  color: #ffffff;
  border-radius: 20px;
  display: flex;
  
}

.card-body p {
  color:#0d0101;
}

.card-body h1 {
 color: black;
}

#all-table-data {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #c21111;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    display: flex;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    padding: 5px;
    border: 1px solid #ccc;
  }

  

  button {
    padding: 10px 50px;
    background-color:  #0842ff;
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
#search-bar{
 width: 30px;
 border-color: #3366cc;
 padding: 1px 500px;
 border-radius: 9px;

}

#search-bar{
  box-sizing: border-box;
  height: 50px;
}
input,
select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #000000;
  border-radius: 7px;
  box-sizing: border-box;
  
}


  //image
.image-container{
  border-radius: 100px;
  width: 100px;
   height: 100px;
   display: flex;
}
.image-container img {
    border-radius: 200px;
    width: 100px;
  height: 100px;
  }
///////////////////////////////////////////////////
.uni-select{
  width:213px;
}

  .overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-image: linear-gradient(#74d2f4,#e68dd4);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 9%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #0e0000;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: rgb(0, 255, 81);
}

.closebtn{
position:absolute;
color:#ffffff;
top:20px;
right:50px;
font-size:1.7em;
cursor:pointer;
display:none;
z-index:999;
-webkit-transform:rotate(0deg);
transform:rotate(0deg);
-webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.closebtn:hover{
font-size:2.4em;
-webkit-transform:rotate(360deg);
transform:rotate(360deg);
color:#e41212;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 40px;
  }
}




  `;

  render() {
    const filteredFormData = this.formData.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return html`
      
      <div id="data">
      <div id="search-bar">
        <input type="text" id="search-input" @input="${this.handleSearch}" placeholder="Search.." />
      </div>
      <div class="card-list">
        ${filteredFormData.map(
          (item, index) => html`

          <div class="card">
          <div class="card-header">
            <div class="image-container">
                <img src="${item.image}" alt="Profile Image">
              </div>
              <h2>Name: ${item.name}</h2>
              </div>
              <div class="card-body">
              <h1>Personal</h1>
              <p><strong>Employee Code:</strong> ${item.empCode}</p>
              <p><strong>Official Email Address:</strong> ${item.officialEmail}</p>
              <p><strong>Personal Email Address:</strong> ${item.personalEmail}</p>
              <p><strong>Primary Number:</strong> ${item.primaryContact}</p>
              <p><strong>Secondary Number:</strong> ${item.secondaryContact}</p>
              <p><strong>Emergency Number:</strong> ${item.emergencyContact}</p>
              <p><strong>Department:</strong> ${item.department}</p>
              <p><strong>Designation:</strong>${item.designation}</p>
              <h1>Correspondence</h1>
              <p><strong>CorrespondenceAddressLine1:</strong>${item.correspondenceAddressLine1}</p>
              <p><strong>CorrespondenceAddressLine2:</strong>${item.correspondenceAddressLine2}</p>
              <p><strong>CorrespondenceLandmark:</strong>${item.correspondenceLandmark}</p>
              <p><strong>CorrespondenceCity:</strong>${item.correspondenceCity}, </p>
              <p><strong>CorrespondenceState:</strong>${item.correspondenceState}</p>
              <p><strong>CorrespondenceZip:</strong> ${item.correspondenceZip}</p>
              <p><strong>CorrespondenceCountry:</strong>${item.correspondenceCountry}</p>
              <h1>Permanent</h1>
              <p><strong>Permanent AddressLine1:</strong>${item.permanentAddressLine1}</p>
              <p><strong>Permanent AddressLine2:</strong>${item.permanentAddressLine2}</p>
              <p><strong>Permanent Landmark:</strong>${item.permanentLandmark}</p>
              <p><strong>Permanent City:</strong>${item.permanentCity}</p>
              <p><strong>Permanent Country:</strong>${item.permanentCountry}</p>
              <p><strong>Permanent State:</strong>${item.permanentState}</p>
              <p><strong>Permanent Zip:</strong> ${item.permanentZip}</p>
              </div>
              <div class="buttons">
                <button @click=${() => this.editUser(index)}>Edit</button>
                
              </div>


              ${this.editingUser === index
                ? html`
                <div id="myNav" class="overlay">
                <a class="closebtn" @click="${this.closeNav}">&times;</a>
                
                          <div  class=table-body>
                          <sachi-11
                      .formData=${this.formData}
                      .editingUserIndex=${index}
                      @save-form=${this.handleSaveForm}
                      
                    ></sachi-11>
                    </div>
                      
                </div>
                <div class="btn">
                    <button class="up" @click="${this.openNav}">Update</button>
                    <button class="delete-button" @click=${() => this.deleteUser(index)}>Delete</button>
                    
                </div>
                
                  `
                : ""}
            </div>
          `
        )}
      </div>
    `;
  }
  openNav() {
    const myNav = this.shadowRoot.getElementById('myNav');
    myNav.style.width = '100%';
  }
  closeNav() {
    const myNav = this.shadowRoot.getElementById('myNav');
    myNav.style.width = '0%';
    
  }

  editUser(index) {
    this.editingUser = index;
  }

  // deleteUser(index) {
  //   this.formData.splice(index, 1);
  //   localStorage.setItem("formData", JSON.stringify(this.formData));
  //   this.requestUpdate();
  // }
  deleteUser(index) {
    const deletedUserName = this.formData[index].name;
    if (confirm(`Are you sure you want to delete ${deletedUserName}?`)) {
      this.formData.splice(index, 1);
      localStorage.setItem("formData", JSON.stringify(this.formData));
      this.requestUpdate();
      window.location.reload();
    }
  }

  handleSaveForm(event) {
    const { formData, index } = event.detail;
    if (index !== -1) {
      // Editing an existing user
      this.formData[index] = formData;
    } else {
      // Adding a new user
      this.formData.push(formData);
    }
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.editingUser = null;
    this.requestUpdate();
  }
  handleSearch(event) {
    this.searchTerm = event.target.value;
    this.requestUpdate();
  }
}




customElements.define("show-user-data", FormDataPage);
