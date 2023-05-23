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
  
    :host{
    display: block;
    justify-content: center;
    align-items: center;
    /* min-height: 90vh; */
    background: linear-gradient(-45deg, #d585aa, #db96af, #88cae1, #bda7e3);
      background-size: 400% 400%;
      animation: gradient 10s ease infinite;
  
    

}


    .card {
  
  box-shadow: 0 4px 8px 0 rgba(0,0,7,9);
  border-radius: 40px;
  margin-bottom: 20px;
  /* overflow: hidden; */
  background-image: linear-gradient(#74d2f4,#e68dd4);
}

.card-header {
  background-color: #54004a;
  background-image: linear-gradient( #f104d5,#023547);
  color: #ffffff;
  padding: 20px;
  display: flex;
  
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
  text-decoration-color:#000000;
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
    border: 1px solid #ee0909;
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

}

#search-bar  input[type=text]:focus {
  width: 500px;
}
//////////
input[type="text"] {
  padding: 10rem;
  font-size: 1rem;
  border: 2px solid #c20808;
  border-radius: 10px;
  box-sizing: border-box;
 
  
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

    .overlay {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      /* background-image: linear-gradient(#ffc002,#00bbff); */
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 8s ease infinite;
      overflow-x: hidden;
      transition: 0.5s;
    }
    @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    
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
      color: #818181;
      display: block;
      transition: 0.3s;
    }

    .overlay a:hover,
    .overlay a:focus {
      color: rgb(0, 255, 81);
    }

    .overlay .closebtn {
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 40px;
    }

    @media screen and (max-height: 450px) {
      .overlay a {
        font-size: 20px;
      }
      .overlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 40px;
      }
    }

    .position33 {
      display: flex;
    }
    .position33 h1 {
      font-size: 1em;
      margin-left: 90px;
    }
    .table-body {
      display: flex;
      flex-direction: column;
    }
    .position34 {
      display: flex;
    }
    .position34 h1 {
      font-size: 1em;
      margin-left: 90px;
    }
    .btn {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      margin: 10px;
      padding: 10px;
      
    }
    .btn #save,
    #cancel {
      margin-left: 90px;
      width: 150px;
      height: 30px;
    }
    .btn .up,
    .delete-button {
      margin-left: 40px;
      margin-right: 40px;
      width: 150px;
      height: 30px;
    }

/* abc */

  
.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #D7D4E4;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
  border-color: #FFF ;
}
.cube:nth-child(2) {
  animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}
.cube:nth-child(3) {
  animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}
.cube:nth-child(4) {
  animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}
.cube:nth-child(5) {
  animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}
.cube:nth-child(6) {
  animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}




@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

//image
.image-container{
  border-radius: 200px;
  width: 100px;
   height: 100px;
   display: flex;
}
.image-container img {
    /* Add your desired styles for the image here */
    /* For example: */
   
    border-radius: 200px;
    width: 100px;
   height: 100px;
  }



  `;


render() {
  return html`
  
    <div id="data">
      <div id="search-bar">
        <label for="search-input" ></label>
        <input type="text" id="search-input" @input="${this.handleSearch}" placeholder="Search.." />
      </div>
      <ol>
        ${this.filteredformData.map(item => html`
        <li>
        <div class="card">
          <div class="card-header">
          <div class="image-container">
                <img src="${item.image}" alt="Profile Image">
              </div>

           <h2>Name: :${item.name}</h2>
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
            <p><strong>Designation:</strong>${item.designation}</p>
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
            <div class="btn">
                  <button @click="${() => this.editUser(item)}">Edit</button>
                  </div>
          </div>
        </div>
        
        
        ${this.editingUser === item ? html`
       
        <div id="myNav" class="overlay">
        

        <div class="overlay-content">
        <div  class=table-body>

        <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
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
                <div class="image-container">
                <img src="${item.image}" alt="Profile Image">
                <input type="file" @change="${event => this.handleImageChange(event, item)}" accept="image/*">
                </div>

          </div>

              
          <div class="btn">
              
            <button @click="${() => this.saveUser(item)}" id="save">Save</button>
            <button @click="${() => this.cancelEdit(item)}" id="cancel">Cancel</button>
          </div>
              
        </div>  
      </div>
    </div>

    <div class="btn">
    <button class="up" @click="${this.openNav}">Update</button>
    <button class="delete-button" @click="${() => this.confirmDeleteUser(item)}">Delete</button>
    
    </div>
` : ''}
           


  </li>
      `)} 
</ol>
      
    </div>
    
    `;
}
openNav() {
  const myNav = this.shadowRoot.getElementById('myNav');
  myNav.style.width = '100%';
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
    window.location.reload();
  }
}
editUser(user) {
    this.editingUser = user;
    this.requestUpdate();
  }

  handleImageChange(event, user) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      user.image = reader.result;
      this.requestUpdate();
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }




  cancelEdit(user) {
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.editingUser = null;
    this.requestUpdate();
   
  }

  saveUser() {
  
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.editingUser = false;
    this.requestUpdate();
    alert("Data saved successfully!");
  }


   handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredformData = this.formData.filter(
      emp => emp.name.toLowerCase().includes(query) || emp.empCode.toLowerCase().includes(query) || emp.officialEmail.toLowerCase().includes(query) || emp.primaryContact.toLowerCase().includes(query)
    );
  }


}

customElements.define('show-user-data', FormDataPage);
