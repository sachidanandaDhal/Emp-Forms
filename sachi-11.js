import { LitElement, html, css } from "lit-element";

class EmployeeForm extends LitElement {
  static get properties() {
    return {
      formData: { type: Array },
      editingUserIndex: { type: Number },
      name: { type: String },
      empCode: { type: String },
      officialEmail: { type: String },
      personalEmail: { type: String },
      nameError: { type: String },
      empCodeError: { type: String },
      officialEmailError: { type: String },
      personalEmailError: { type: String },
      designation: { type: String },
      designationOptions: { type: Array },
      designationError: { type: String },
      department: { type: String },
      departmentOptions: { type: Array },
      departmentError: { type: String },
      primaryContact: { type: String },
      secondaryContact: { type: String },
      emergencyContact: { type: String },
      primaryContactError: { type: String },
      secondaryContactError: { type: String },
      emergencyContactError: { type: String },
      correspondenceAddressLine1: { type: String },
      correspondenceAddressLine2: { type: String },
      correspondenceLandmark: { type: String },
      correspondenceCity: { type: String },
      correspondenceState: { type: String },
      correspondenceCountry: { type: String },
      correspondenceZip: { type: String },
      correspondenceAddressLine1Error: { type: String },
      correspondenceAddressLine2Error: { type: String },
      correspondenceLandmarkError: { type: String },
      correspondenceCityError: { type: String },
      correspondenceStateError: { type: String },
      correspondenceCountryError: { type: String },
      correspondenceZipError: { type: String },
      correspondenceCityOptions: { type: Array },
      correspondenceStateOptions: { type: Array },
      correspondenceCountryOptions: { type: Array },
      
      
      permanentAddressLine1: { type: String },
      permanentAddressLine2: { type: String },
      permanentLandmark: { type: String },
      permanentCity: { type: String },
      permanentState: { type: String },
      permanentCountry: { type: String },
      permanentZip: { type: String },
      permanentAddressLine1Error: { type: String },
      permanentAddressLine2Error: { type: String },
      permanentLandmarkError: { type: String },
      permanentCityError: { type: String },
      permanentStateError: { type: String },
      permanentCountryError: { type: String },
      permanentZipError: { type: String },
      permanentCityOptions: { type: Array },
      permanentStateOptions: { type: Array },
      permanentCountryOptions: { type: Array },
      image: { type: String },
    };
  }

  constructor() {
    super();
    this.formData = [];
    this.editingUserIndex = -1;
    this.name = "";
    this.empCode = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.nameError = "";
    this.empCodeError = "";
    this.officialEmailError = "";
    this.personalEmailError = "";
    this.designation = "";
    this.department = "";
    this.designationError = "";
    this.departmentError = "";
    this.designationOptions = [
            { label: "Select Designation", value: "" },
            { label: "Manager", value: "manager" },
            { label: "Developer", value: "developer" },
            { label: "Designer", value: "designer" },
            { label: "Tester", value: "tester" },
            { label: "QA", value: "qa" },
            { label: "Sales", value: "sales" },
            { label: "Accountant", value: "accountant" },
    ];
    this.departmentOptions = [
        { label: "Select Department", value: "" },
        { label: "IT", value: "IT" },
        { label: "HR", value: "hr" },
        { label: "Finance", value: "finance" },
        { label: "Marketing", value: "marketing" },
        { label: "Sales", value: "sales" },
        { label: "Accounting", value: "accounting" },
        { label: "Support", value: "support" },
        { label: "Others", value: "others" },
    ];
    this.primaryContact = "";
    this.secondaryContact = "";
    this.emergencyContact = "";
    this.primaryContactError = "";
    this.secondaryContactError = "";
    this.emergencyContactError = "";
    this.correspondenceAddressLine1 = '';
    this.correspondenceAddressLine2 = '';
    this.correspondenceLandmark = '';
    this.correspondenceCity = '';
    this.correspondenceState = '';
    this.correspondenceCountry = '';
    this.correspondenceZip = '';
    this.correspondenceAddressLine1Error = '';
    this.correspondenceAddressLine2Error = '';
    this.correspondenceLandmarkError = '';
    this.correspondenceCityError= '';
    this.correspondenceStateError = '';
    this.correspondenceCountryError ='';
    this.correspondenceZipError = '';
    this.correspondenceCityOptions = [
        { label: "Select City", value: "" },
        { label: "Mumbair", value: "mumbai" },
        { label: "Hyderabad", value: "hyderabad" },
        { label: "Bengalurur", value: "bengalurur" },
        { label: "Pune", value: "pune" },
        { label: "Delhi", value: "delhi" },
        { label: "Bhubaneswar", value: "bhubaneswar" },
        { label: "Noidat", value: "noida" },
    ];
    this.correspondenceStateOptions = [
        { label: "Select State", value: "" },
        { label: "Tamil Nadu", value: "Tamil Nadu" },
        { label: "Karnataka", value: "karnataka" },
        { label: "Gujaratr", value: "gujarat" },
        { label: "Odisha", value: "odisha" },
        { label: "Rajasthan", value: "Rajasthan" },
        { label: "Uttar Pradesh", value: "Uttar Pradesh" },
        { label: "Assam", value: "Assamt" },
    ];
    this.correspondenceCountryOptions = [
        { label: "Select Country", value: "" },
        { label: "India", value: "india" },
        { label: "U.S.", value: "United States" },
    ];


    this.permanentAddressLine1 = '';
    this.permanentAddressLine2 = '';
    this.permanentLandmark = '';
    this.permanentCity = '';
    this.permanentState = '';
    this.permanentCountry = '';
    this.permanentZip = '';
    this.permanentAddressLine1Error = '';
    this.permanentAddressLine2Error = '';
    this.permanentLandmarkError = '';
    this.permanentCityError = '';
    this.permanentStateError= '';
    this.permanentCountryError= '';
    this.permanentZipError = '';
    this.permanentCityOptions = [
        { label: "Select City", value: "" },
        { label: "Mumbair", value: "mumbai" },
        { label: "Hyderabad", value: "hyderabadr" },
        { label: "Bengalurur", value: "bengalurur" },
        { label: "Pune", value: "pune" },
        { label: "Delhi", value: "delhi" },
        { label: "Bhubaneswar", value: "bhubaneswar" },
        { label: "Noidat", value: "noida" },
    ];
    this.permanentStateOptions = [
        { label: "Select State", value: "" },
        { label: "Tamil Nadu", value: "Tamil Nadu" },
        { label: "Karnataka", value: "karnataka" },
        { label: "Gujaratr", value: "gujarat" },
        { label: "Odisha", value: "odisha" },
        { label: "Rajasthan", value: "Rajasthan" },
        { label: "Uttar Pradesh", value: "Uttar Pradesh" },
        { label: "Assam", value: "Assamt" },
    ];
    this.permanentCountryOptions = [
        { label: "Select Country", value: "" },
        { label: "India", value: "india" },
        { label: "U.S.", value: "United States" },
        
    ];
    this.image = "";
  }

  static get styles(){
    return css`
    :host{
    display: block;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    background-image: linear-gradient(to right,violet,violet);
    }


    form {
  /* padding:20px; */
  /* display: left; */
  min-height: 90vh;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
   margin-left: 11rem ; 
  max-width: 1000px;
  background-image: linear-gradient(#c1c8dd,#5397b2);
 animation: mymove 5s infinite;
 box-shadow: 0px 0px 15px currentcolor;
  border: 5px solid currentcolor;
}

label {
  font-weight: bold;
  margin-left:10px;

}

input,
select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #000000;
  border-radius: 7px;
  box-sizing: border-box;
  /* border:none; */
}


input:focus,
select:focus {
  outline: none;
  border-color: #3366cc;
  
}
.uni-select{
  width:213px;
}

.error {
  color:  #fc0000;
  float:left;
  /* font-size: 0.8rem; */
  /* margin-left: 0.5rem; */
}
.emp {
  float:left;
  width: 31.33%;
  padding: 10px;
text-align:center;
  


}

.buttom button{
margin-left:340px;
margin-top:20px;
width:330px;
height:40px;
border-radius:7px;
border:none;
background-image: linear-gradient(to right, #aa076b,#61045f);
color:black;
font-size:1.1em;

}
.buttom button:hover{

  color:white;
  font-size:bold;
  background-image: linear-gradient(to right, #9e5060,#db4fa5);
}





@media (max-width: 500px) {
  .emp{
    width:100%;
  }
}

/* image */
input[type="file"] {
    display: ;
    width:210px ;

  }
    
   `;}

  updated(changedProperties) {
    if (changedProperties.has("editingUserIndex")) {
      if (this.editingUserIndex !== -1) {
        const user = this.formData[this.editingUserIndex];
        if (user) {
        this.name = user.name;
        this.empCode = user.empCode;
        this.officialEmail = user.officialEmail;
        this.personalEmail = user.personalEmail;
        this.designation = user.designation ;
        this.department = user.department ;
        this.primaryContact =  user.primaryContact ;
        this.secondaryContact = user.secondaryContact ;
        this.emergencyContact = user.emergencyContact ;
        this.correspondenceAddressLine1 = user.correspondenceAddressLine1 ;
        this.correspondenceAddressLine2 = user.correspondenceAddressLine2 ;
        this.correspondenceLandmark = user.correspondenceLandmark ;
        this.correspondenceCity = user.correspondenceCity ;
        this.correspondenceState = user.correspondenceState ;
        this.correspondenceCountry = user.correspondenceCountry ;
        this.correspondenceZip = user.correspondenceZip ;
        this.permanentAddressLine1 = user.permanentAddressLine1 ;
        this.permanentAddressLine2 = user.permanentAddressLine2 ;
        this.permanentLandmark = user.permanentLandmark ;
        this.permanentCity = user.permanentCity ;
        this.permanentState = user.permanentState ;
        this.permanentCountry = user.permanentCountry ;
        this.permanentZip = user.permanentZip ;
        this.image = user.image ;
        }
      } else {
        this.resetForm();
      }
    }
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
      <div id="bubu">
      <div class="emp">
        <label for="name-input">Full Name:*</label><br>
        <input type="text" id="name-input" .value=${this.name} @input=${this.validateName }  required />
        <span class="error">${this.nameError}</span>
        <br>
        <label for="empcode-input">Employee Code:*</label><br>
        <input type="text" id="empcode-input" .value=${this.empCode} @input=${this.validateEmpCode}  required/>
        <span class="error">${this.empCodeError}</span> 
        <br>
        
        <label for="official-email-input">Official Email Address:*</label><br>
        <input type="text" id="official-email-input" .value=${this.officialEmail}  @input=${this.validateOfficialEmail}  required/>
        <span class="error">${this.officialEmailError}</span>
        <br>
        
        <label for="personal-email-input">Personal Email Address:*</label><br>
        <input type="text" id="personal-email-input" .value=${this.personalEmail} @input=${this.validatePersonalEmail}  required/>
        <span class="error">${this.personalEmailError}</span>  
        <br>
       
        <label for="designation-select">Designation:*</label><br>
        <select id="designation-select" class="uni-select" @change=${this.handleDesignationChange}  required>
        <div class="bubu">
            ${this.designationOptions.map(
                (option) =>
                html`<option value="${option.value}">${option.label}</option>`
            )}
        </select>
        <span class="error">${this.designationError}</span>
        <br>
        
       
        <label for="department-select">Department:*</label><br>
        <select id="department-select" class="uni-select" @change=${this.handleDepartmentChange}  required>
            ${this.departmentOptions.map(
                (option) =>
                html`<option value="${option.value}">${option.label}</option>`
            )}
        </select>
        <span class="error">${this.departmentError}</span>
        <br>
        
   
        

      
            <label for="primary-contact-input">Primary Number:*</label><br>
            <input type="tel" id="primary-contact-input" .value=${this.primaryContact} @input=${this.validatePrimaryContact}  required/>
            <span class="error">${this.primaryContactError}</span><br>
           

            <label for="secondary-contact-input">Secondary Number:*</label><br>
            <input type="tel" id="secondary-contact-input" .value=${this.secondaryContact} @input=${this.validateSecondaryContact}  required/>
            <span class="error">${this.secondaryContactError}</span><br>
            </div>
            <div class="emp">
            <label for="emergency-contact-input">Emergency Number:*</label><br>
            <input type="tel" id="emergency-contact-input" .value=${this.emergencyContact} @input=${this.validateEmergencyContact}  required />
        <span class="error">${this.emergencyContactError}</span><br>
      
        
        <label for="correspondence-address-line1-input">Correspondence Address Line 1:*</label><br>
        <input type="text" id="correspondence-address-line1-input" .value=${this.correspondenceAddressLine1} @input=${this.validateCorrespondenceAddressLine1} required />
        <span class="error">${this.correspondenceAddressLine1Error}</span><br>
        
        <label for="correspondence-address-line2-input">Correspondence Address Line 2:*</label><br>
        <input type="text" id="correspondence-address-line2-input" .value=${this.correspondenceAddressLine2} @input=${this.validateCorrespondenceAddressLine2} required  />
        <span class="error">${this.correspondenceAddressLine2Error}</span><br>
        
        <label for="correspondence-landmark-input"> Correspondence Landmark:*</label><br>
        <input type="text" id="correspondence-landmark-input" .value=${this.correspondenceLandmark}  @input=${this.validateCorrespondenceLandmark} required />
        <span class="error">${this.correspondenceLandmarkError}</span><br>
        
        
        <label for="correspondence-city-input">Correspondence City:*</label><br>
        <select id="correspondence-city-input" class="uni-select" @change=${this.handleCorrespondenceCityChange} required>
        ${this.correspondenceCityOptions.map((option) =>html`<option value="${option.value}">${option.label}</option>`)}
        </select><br>
        
      
        
        <label for="correspondence-state-input">Correspondence State:*</label><br>
        <select id="correspondence-state-input" class="uni-select" @change=${this.handleCorrespondenceStateChange} required>
            ${this.correspondenceStateOptions.map(
            (option) =>
            html`<option value="${option.value}">${option.label}</option>`)}
        </select><br>
        
      
        <label for="correspondence-country-input">Correspondence Country:*</label><br>
        <select id="correspondence-country-input" class="uni-select" @change=${this.handleCorrespondenceCountryChange} required>
        ${this.correspondenceCountryOptions.map(
            (option) =>
            html`<option value="${option.value}">${option.label}</option>`)}
        </select><br>
        
      

        <label for="correspondence-zip-input"> Correspondence Zip:*</label><br>
        <input type="text" id="correspondence-zip-input" .value=${this.correspondenceZip} @input=${this.validateCorrespondenceZip}  required/>
        <span class="error">${this.correspondenceZipError}</span><br>

        </div>
            <div class="emp">
        <!-- Permanent Address -->
      
        <label for="permanent-address-line1-input"> Permanent Address Line 1:*</label><br>
        <input type="text" id="permanent-address-line1-input" .value=${this.permanentAddressLine1} @input=${this.validatePermanentAddressLine1} required />
        <span class="error">${this.permanentAddressLine1Error}</span><br>
      
        <label for="permanent-address-line2-input"> Permanent Address Line 2:*</label><br>
        <input type="text" id="permanent-address-line2-input" .value=${this.permanentAddressLine2} @input=${this.validatePermanentAddressLine2} required />
        <span class="error">${this.permanentAddressLine2Error}</span> <br>
        
      
        <label for="permanent-landmark-input">Landmark:*</label><br>
        <input type="text" id="permanent-landmark-input" .value=${this.permanentLandmark} @input=${this.validatePermanentLandmark} required/>
        <span class="error">${this.permanentLandmarkError}</span><br>
      
        <label for="permanent-zip-input">Zip:*</label><br>
        <input type="text" id="permanent-zip-input" .value=${this.permanentZip} @input=${this.validatePermanentZip} required/>
        <span class="error">${this.permanentZipError}</span><br>
      
        <label for="permanent-city-input">City:*</label><br>
        <select id="permanent-city-input" class="uni-select" @change=${this.handlePermanentCityChange} required>
        ${this.permanentCityOptions.map(
        (option) =>
            html`<option value="${option.value}">${option.label}</option>`)}
        </select><br>
      
        <label for="permanent-state-input">State:*</label><br>
        <select id="permanent-state-input" class="uni-select" @change=${this.handlePermanentStateChange} required>
        ${this.permanentStateOptions.map(
        (option) =>
        html`<option value="${option.value}">${option.label}</option>`)}
        </select><br>
      
        <label for="permanent-state-input">Country:*</label><br>
        <select id="permanent-country-input" class="uni-select" @change=${this.handlePermanentCountryChange} required>
        ${this.permanentCountryOptions.map(
        (option) =>
        html`<option value="${option.value}">${option.label}</option>`)}
        </select><br>
        <label for="image-upload">Upload Image:</label><br />
        <input type="file" id="image-upload" accept="image/*" @change=${this.handleImageUpload}  required/>
            <br />
        </div>
        
      </form>
      <div class="buttom">
        <button type="submit">${this.editingUserIndex !== -1 ? "Save" : "Add"}</button></div>
    `;
  }

  validateName(e) {
    const name = e.target.value;
    switch (true) {
      case name.trim() === "" || name.length > 40:
        this.nameError = "Please enter a valid full name (maximum length 40 characters)";
        break;
      default:
        this.nameError = "";
        this.name = name;
        break;
    }
  }

  validateEmpCode(e) {
    const empCode = e.target.value;
    switch (true) {
      case /^[A-Za-z]\d{6}$/.test(empCode):
        this.empCodeError = "";
        this.empCode = empCode;
        break;
      default:
        this.empCodeError = "Please enter a valid employee code (1 alphabet and 6 digits)";
        break;
    }
  }

  validateOfficialEmail(e) {
    const officialEmail = e.target.value;
    switch (true) {
      case /^\S+@(annalect)\.com$/.test(officialEmail):
        this.officialEmailError = "";
        this.officialEmail = officialEmail;
        break;
      default:
        this.officialEmailError = "Please enter a valid official email address";
        break;
    }
  }

  validatePersonalEmail(e) {
    const personalEmail = e.target.value;
    switch (true) {
      case /^\S+@gmail\.com$/.test(personalEmail):
      case /^\S+@yahoo\.com$/.test(personalEmail):
      case /^\S+@outlook\.com$/.test(personalEmail):
        this.personalEmailError = "";
        this.personalEmail = personalEmail;
        break;
      default:
        this.personalEmailError = "Please enter a valid personal email address";
        break;
    }
  }

 
handleDesignationChange(e) {
  const designation = e.target.value;
  switch (designation) {
      case "":
          this.designationError = "Please select a designation";
          break;
      default:
          this.designationError = "";
          this.designation = designation;
          break;
  }
}


handleDepartmentChange(e) {
  const department = e.target.value;
  switch (department) {
      case "":
          this.departmentError = "Please select a department";
          break;
      default:
          this.departmentError = "";
          this.department = department;
          break;
  }
}


validatePrimaryContact(e) {
  const primaryContact = e.target.value;
  switch (true) {
    case /^\d{10}$/.test(primaryContact):
      this.primaryContactError = "";
      this.primaryContact = primaryContact;
      break;
    default:
      this.primaryContactError =
        "Please enter a valid 10-digit primary contact number";
      break;
  }
}



  validateSecondaryContact(e) {
      const secondaryContact = e.target.value;
      switch(true) {
        case /^\d{10}$/.test(secondaryContact):
          this.secondaryContactError = "";
          this.secondaryContact = secondaryContact;
          break;
        default:
          this.secondaryContactError = "Please enter a valid 10-digit secondary contact number";
          break;
      }
    }
    

validateEmergencyContact(e) {
  const emergencyContact = e.target.value;
  switch (true) {
    case /^\d{10}$/.test(emergencyContact):
      this.emergencyContactError = "";
      this.emergencyContact = emergencyContact;
      break;
    default:
      this.emergencyContactError =
        "Please enter a valid 10-digit emergency contact number";
      break;
  }
}

  
  validateCorrespondenceAddressLine1(e) {
      const addressLine1 = e.target.value;
      switch (true) {
          case addressLine1.trim() === '':
              this.correspondenceAddressLine1Error = 'Please enter a valid address (maximum length 80 characters)';
              break;
          case addressLine1.length > 80:
              this.correspondenceAddressLine1Error = 'Please enter a valid address (maximum length 80 characters)';
              break;
          default:
              this.correspondenceAddressLine1Error = '';
              this.correspondenceAddressLine1 = addressLine1;
              break;
      }
  }
  
   
      validateCorrespondenceAddressLine2(e) {
          const addressLine2 = e.target.value;
          switch (true) {
              case (addressLine2.trim() === '' || addressLine2.length > 80):
                  this.correspondenceAddressLine2Error = 'Please enter a valid address (maximum length 80 characters)';
                  break;
              default:
                  this.correspondenceAddressLine2Error = '';
                  this.correspondenceAddressLine2 = addressLine2;
                  break;
          }
      }
      
 
  validateCorrespondenceLandmark(e) {
      const landmark = e.target.value;
      switch (true) {
          case (landmark.trim() === '' || landmark.length > 50):
              this.correspondenceLandmarkError = 'Please enter a valid Landmark (maximum length 50 characters)';
              break;
          default:
              this.correspondenceLandmarkError = '';
              this.correspondenceLandmark = landmark;
              break;
      }
  }
  
  
  handleCorrespondenceCityChange(e) {
      const correspondenceCity = e.target.value;
      switch (correspondenceCity) {
        case "":
          this.correspondenceCityError = "Please select a City";
          break;
        default:
          this.correspondenceCityError = "";
          this.correspondenceCity = correspondenceCity;
          break;
      }
    }
    
 

  handleCorrespondenceStateChange(e) {
      const correspondenceState = e.target.value;
      switch (correspondenceState) {
        case "":
          this.correspondenceStateError = "Please select a State";
          break;
        default:
          this.correspondenceStateError = "";
          this.correspondenceState = correspondenceState;
          break;
      }
    }
   
    handleCorrespondenceCountryChange(e) {
      const correspondenceCountry = e.target.value;
      switch (correspondenceCountry) {
        case "":
          this.correspondenceCountryError = "Please select a Country";
          break;
        default:
          this.correspondenceCountryError = "";
          this.correspondenceCountry = correspondenceCountry;
          break;
      }
    }
        
  
 
    validateCorrespondenceZip(e) {
      const zip = e.target.value;
      switch (true) {
        case /^\d{6}$/.test(zip):
          this.correspondenceZipError = "";
          this.correspondenceZip = zip;
          break;
        default:
          this.correspondenceZipError =
            "Please enter a valid zip code (6 digits only)";
          break;
      }
    }
    
  
  
  validatePermanentAddressLine1(e) {
      const addressLine1 = e.target.value;
      switch (true) {
        case (addressLine1.trim() === '' || addressLine1.length > 80):
          this.permanentAddressLine1Error = 'Please enter a valid address (maximum length 80 characters)';
          break;
        default:
          this.permanentAddressLine1Error = '';
          this.permanentAddressLine1 = addressLine1;
          break;
      }
    }
    

  validatePermanentAddressLine2(e) {
      const addressLine2 = e.target.value;
      switch (true) {
        case addressLine2.trim() === '':
        case addressLine2.length > 80:
          this.permanentAddressLine2Error = 'Please enter a valid address (maximum length 80 characters)';
          break;
        default:
          this.permanentAddressLine2Error = '';
          this.permanentAddressLine2 = addressLine2;
          break;
      }
    }
    
  

    validatePermanentLandmark(e) {
      const landmark = e.target.value;
      switch (true) {
        case (landmark.trim() === '' || landmark.length > 50):
          this.permanentLandmarkError = 'Please enter a valid Landmark (maximum length 50 characters)';
          break;
        default:
          this.permanentLandmarkError = '';
          this.PermanentLandmark = landmark;
          break;
      }
    }
    
  handlePermanentCityChange(e) {
      const permanentCity = e.target.value;
      switch (permanentCity) {
        case "":
          this.permanentCityError = "Please select a City";
          break;
        default:
          this.permanentCityError = "";
          this.permanentCity = permanentCity;
          break;
      }
    }

    
    
    handlePermanentStateChange(e) {
      const permanentState = e.target.value;
      switch (permanentState) {
        case "":
          this.permanentStateError = "Please select a State";
          break;
        default:
          this.permanentStateError = "";
          this.permanentState = permanentState;
          break;
      }
    }
    

    handlePermanentCountryChange(e) {
      const permanentCountry = e.target.value;
      switch(permanentCountry) {
        case "":
          this.permanentcorrespondenceCountryError = "Please select a Country";
          break;
        default:
          this.permanentCountryError = "";
          this.permanentCountry = permanentCountry;
          break;
      }
    }
    
  
  

    validatePermanentZip(e) {
      const zip = e.target.value;
      switch (true) {
        case /^\d{6}$/.test(zip):
          this.permanentZipError = '';
          this.permanentZip = zip;
          break;
        default:
          this.permanentZipError = 'Please enter a valid zip code (6 digits only)';
          break;
      }
    }

    handleImageUpload(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        // Store the image data
        this.image = reader.result;
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
        name: this.name,
        empCode: this.empCode,
        officialEmail: this.officialEmail,
        personalEmail: this.personalEmail,
        designation: this.designation,
        department: this.department,
        primaryContact: this.primaryContact,
        secondaryContact: this.secondaryContact,
        emergencyContact: this.emergencyContact,
        correspondenceAddressLine1: this.correspondenceAddressLine1,
        correspondenceAddressLine2: this.correspondenceAddressLine2,
        correspondenceLandmark: this.correspondenceLandmark,
        correspondenceCity: this.correspondenceCity,
        correspondenceState: this.correspondenceState,
        correspondenceCountry:this.correspondenceCountry,
        correspondenceZip: this.correspondenceZip,
        permanentAddressLine1: this.permanentAddressLine1,
        permanentAddressLine2: this.permanentAddressLine2,
        permanentLandmark: this.PermanentLandmark,
        permanentCity: this.permanentCity,
        permanentState: this.permanentState,
        permanentCountry: this.permanentCountry,
        permanentZip: this.permanentZip,
        image: this.image,
    };
  
    // Retrieve existing data from local storage
    const storedData = localStorage.getItem("formData");
    let employeeData = storedData ? JSON.parse(storedData) : [];
  
    // Add the new form data to the array
    employeeData.push(formData);
  
    // Save the updated data back to local storage
    localStorage.setItem("formData", JSON.stringify(employeeData));
  
    // Reset the form
    // this.resetForm();
  
    // Show alert message
    alert("Data saved in local storage!");
    window.location.reload();
  
    const event = new CustomEvent("save-form", {
      detail: { formData, index: this.editingUserIndex },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
  
}
customElements.define("sachi-11", EmployeeForm);
