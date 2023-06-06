import { LitElement, html, css } from "lit";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/rating/rating.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/color-picker/color-picker.js";

// import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

setBasePath("/path/to/shoelace/dist");

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
    this.correspondenceAddressLine1 = "";
    this.correspondenceAddressLine2 = "";
    this.correspondenceLandmark = "";
    this.correspondenceCity = "";
    this.correspondenceState = "";
    this.correspondenceCountry = "";
    this.correspondenceZip = "";
    this.correspondenceAddressLine1Error = "";
    this.correspondenceAddressLine2Error = "";
    this.correspondenceLandmarkError = "";
    this.correspondenceCityError = "";
    this.correspondenceStateError = "";
    this.correspondenceCountryError = "";
    this.correspondenceZipError = "";
    this.correspondenceCityOptions = [
      { label: "Select City", value: "" },
      { label: "Mumbai", value: "Mumbai" },
      { label: "Hyderabad", value: "Hyderabad" },
      { label: "Bengaluru", value: "Bengaluru" },
      { label: "Pune", value: "Pune" },
      { label: "Delhi", value: "Delhi" },
      { label: "Bhubaneswar", value: "Bhubaneswar" },
      { label: "Noidat", value: "Noida" },
    ];
    this.correspondenceStateOptions = [
      { label: "Select State", value: "" },
      { label: "Tamil Nadu", value: "TamilNadu" },
      { label: "Karnataka", value: "Karnataka" },
      { label: "Gujaratr", value: "Gujarat" },
      { label: "Odisha", value: "Odisha" },
      { label: "Rajasthan", value: "Rajasthan" },
      { label: "Uttar Pradesh", value: "UttarPradesh" },
      { label: "Assam", value: "Assamt" },
    ];
    this.correspondenceCountryOptions = [
      { label: "Select Country", value: "" },
      { label: "India", value: "india" },
      { label: "U.S.", value: "UnitedStates" },
    ];

    this.permanentAddressLine1 = "";
    this.permanentAddressLine2 = "";
    this.permanentLandmark = "";
    this.permanentCity = "";
    this.permanentState = "";
    this.permanentCountry = "";
    this.permanentZip = "";
    this.permanentAddressLine1Error = "";
    this.permanentAddressLine2Error = "";
    this.permanentLandmarkError = "";
    this.permanentCityError = "";
    this.permanentStateError = "";
    this.permanentCountryError = "";
    this.permanentZipError = "";
    this.permanentCityOptions = [
      { label: "Select City", value: "" },
      { label: "Mumbai", value: "Mumbai" },
      { label: "Hyderabad", value: "Hyderabad" },
      { label: "Bengaluru", value: "Bengaluru" },
      { label: "Pune", value: "Pune" },
      { label: "Delhi", value: "Delhi" },
      { label: "Bhubaneswar", value: "Bhubaneswar" },
      { label: "Noidat", value: "Noida" },
    ];
    this.permanentStateOptions = [
      { label: "Select State", value: "" },
      { label: "Tamil Nadu", value: "TamilNadu" },
      { label: "Karnataka", value: "Karnataka" },
      { label: "Gujaratr", value: "Gujarat" },
      { label: "Odisha", value: "Odisha" },
      { label: "Rajasthan", value: "Rajasthan" },
      { label: "Uttar Pradesh", value: "UttarPradesh" },
      { label: "Assam", value: "Assamt" },
    ];
    this.permanentCountryOptions = [
      { label: "Select Country", value: "" },
      { label: "India", value: "india" },
      { label: "U.S.", value: "UnitedStates" },
    ];
    this.image = "";
  }

  static get styles() {
    return [
      css`
        /* user invalid styles */
        .inline-validation sl-input[data-user-invalid]::part(base) {
          border-color: var(--sl-color-danger-700);
        }

        .inline-validation
          sl-input:focus-within[data-user-invalid]::part(base) {
          border-color: var(--sl-color-danger-700);
          box-shadow: 0 0 0 var(--sl-focus-ring-width)
            var(--sl-color-danger-300);
        }

        /* User valid styles */
        .inline-validation sl-input[data-user-valid]::part(base) {
          border-color: var(--sl-color-success-600);
        }

        .inline-validation sl-checkbox[data-user-valid]::part(control) {
          background-color: var(--sl-color-indigo-400);
          outline: none;
        }

        .inline-validation sl-input:focus-within[data-user-valid]::part(base) {
          border-color: var(--sl-color-success-600);
          box-shadow: 0 0 0 var(--sl-focus-ring-width)
            var(--sl-color-success-300);
        }
        .error {
          font-size: var(--sl-input-help-text-font-size-medium);
          color: var(--sl-color-danger-500);
          color: red;
        }

        .error ~ sl-button {
          margin-top: var(--sl-spacing-medium);
        }

        sl-input,
        sl-select,
        label {
          font-weight: bold;
          margin-left: 10px;
          width: 240px;
          color: #0c0c0c;
        }
        sl-input {
          width: 240px;
        }
        sl-select {
          width: 240px;
        }

        form {
          /* background-image: url("b5.webp"); */
          background-image: linear-gradient(#74d2f4, #e68dd4);
        }

        #bubu {
          flex-wrap: wrap;
          gap: 5rem;
          align-items: center;
          justify-content: center;
          margin-left: 3rem;
          margin-right: 3em;
          animation: mymove 5s infinite;
          box-shadow: 0px 0px 15px currentcolor;
          border: 5px solid currentcolor;
          padding-top: 10px;
          display: flex;
          /* backdrop-filter: blur(10px);
          background-color: #0a09098d;
          border: 1px solid #13010100; */
        }
        .emp {
          height: 480px;
          margin-left: 10px;
          margin-right: 10px;
          line-height: 110%;
        }
        sl-button {
          width: 250px;
          height: 60px;
        }
        .img {
  border: 1px solid #f7f0f0;
  padding: 5px;
  width: 230px;
  color: #f7f0f0;
  
}

        
      `,
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has("editingUserIndex")) {
      if (this.editingUserIndex !== -1) {
        const user = this.formData[this.editingUserIndex];
        if (user) {
          this.name = user.name;
          this.empCode = user.empCode;
          this.officialEmail = user.officialEmail;
          this.personalEmail = user.personalEmail;
          this.designation = user.designation;
          this.department = user.department;
          this.primaryContact = user.primaryContact;
          this.secondaryContact = user.secondaryContact;
          this.emergencyContact = user.emergencyContact;
          this.correspondenceAddressLine1 = user.correspondenceAddressLine1;
          this.correspondenceAddressLine2 = user.correspondenceAddressLine2;
          this.correspondenceLandmark = user.correspondenceLandmark;
          this.correspondenceCity = user.correspondenceCity;
          this.correspondenceState = user.correspondenceState;
          this.correspondenceCountry = user.correspondenceCountry;
          this.correspondenceZip = user.correspondenceZip;
          this.permanentAddressLine1 = user.permanentAddressLine1;
          this.permanentAddressLine2 = user.permanentAddressLine2;
          this.permanentLandmark = user.permanentLandmark;
          this.permanentCity = user.permanentCity;
          this.permanentState = user.permanentState;
          this.permanentCountry = user.permanentCountry;
          this.permanentZip = user.permanentZip;
          this.image = user.image;
        }
      }
    }
  }

  render() {
    return html`
      <form class="inline-validation" @submit=${this.handleSubmit}>
        <div id="bubu">
          <div class="emp">
            <sl-input
              label="Name"
              placeholder="Full Name"
              size="small"
              id="name-input"
              .value=${this.name}
              @input=${this.validateName}
              autocomplete="off"
              required
              >
            </sl-input>
            <span class="error">${this.nameError}</span>
            <br />

            <sl-input
              label="Employee Code"
              size="small"
              type="text"
              placeholder="Ex-A123456"
              id="empcode-input"
              .value=${this.empCode}
              @input=${this.validateEmpCode}
              required
            ></sl-input>
            <span class="error">${this.empCodeError}</span>
            <br />

            <sl-input
              label="Official Email"
              size="small"
              type="text"
              placeholder="Ex- abc@annalect.com"
              id="official-email-input"
              .value=${this.officialEmail}
              @input=${this.validateOfficialEmail}
              required
            ></sl-input>
            <span class="error">${this.officialEmailError}</span>
            <br />

            <sl-input
              label="Personal Email Address"
              size="small"
              placeholder="Ex-abc@gmail.com,@yahoo"
              type="text"
              id="personal-email-input"
              .value=${this.personalEmail}
              @input=${this.validatePersonalEmail}
              required
            ></sl-input>
            <span class="error">${this.personalEmailError}</span>
            <br />

            <sl-select
              label="Designation"
              size="small"
              clearable
              value=""
              id="designation-select"
              class="uni-select"
              @sl-change=${this.handleDesignationChange}
              required
            >
              ${this.designationOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.designationError}</span>
            <br />

            <sl-select
              label="Department"
              size="small"
              clearable
              value=""
              id="department-select"
              class="uni-select"
              @sl-change=${this.handleDepartmentChange}
              required
            >
              ${this.departmentOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.departmentError}</span>
            <br />

            <sl-input
              label="Primary Number:"
              size="small"
              clearable
              value=""
              type="tel"
              id="primary-contact-input"
              value="${this.primaryContact}"
              @input=${this.validatePrimaryContact}
              required
            ></sl-input>
            <span class="error">${this.primaryContactError}</span>
            <br />

            <sl-input
              label="Secondary Number:"
              size="small"
              type="tel"
              id="secondary-contact-input"
              value="${this.secondaryContact}"
              @input=${this.validateSecondaryContact}
              required
            ></sl-input>
            <span class="error">${this.secondaryContactError}</span>
            <br />
          </div>

          <div class="emp">
            <sl-input
              label="Emergency Number"
              size="small"
              id="emergency-contact-input"
              type="tel"
              value="${this.emergencyContact}"
              @input="${this.validateEmergencyContact}"
              required
            ></sl-input>
            <span class="error">${this.emergencyContactError}</span>
            <br />

            <sl-input
              label="Correspondence Address Line 1"
              size="small"
              id="correspondence-address-line1-input"
              type="text"
              value="${this.correspondenceAddressLine1}"
              @input="${this.validateCorrespondenceAddressLine1}"
              required
            ></sl-input>
            <span class="error">${this.correspondenceAddressLine1Error}</span>
            <br />

            <sl-input
              label="Correspondence Address Line 2"
              size="small"
              id="correspondence-address-line2-input"
              type="text"
              value="${this.correspondenceAddressLine2}"
              @input="${this.validateCorrespondenceAddressLine2}"
            ></sl-input>
            <span class="error">${this.correspondenceAddressLine2Error}</span>
            <br />

            <sl-input
              label="Correspondence Landmark"
              size="small"
              id="correspondence-landmark-input"
              type="text"
              value="${this.correspondenceLandmark}"
              @input="${this.validateCorrespondenceLandmark}"
              required
            ></sl-input>
            <span class="error">${this.correspondenceLandmarkError}</span>
            <br />

            <sl-select
              label="Correspondence City"
              size="small"
              clearable
              value=""
              id="correspondence-city-input"
              class="uni-select"
              @sl-change=${this.handleCorrespondenceCityChange}
              required
            >
              ${this.correspondenceCityOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.correspondenceCityError}</span>
            <br />

            <sl-select
              label="Correspondence State"
              size="small"
              clearable
              value=""
              id="correspondence-state-input"
              class="uni-select"
              @sl-change=${this.handleCorrespondenceStateChange}
              required
            >
              ${this.correspondenceStateOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.correspondenceStateError}</span>
            <br />

            <sl-select
              label="Correspondence Country"
              size="small"
              clearable
              value=""
              id="correspondence-country-input"
              class="uni-select"
              @sl-change=${this.handleCorrespondenceCountryChange}
              required
            >
              ${this.correspondenceCountryOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.correspondenceCountryError}</span>
            <br />

            <sl-input
              label=" Correspondence Zip"
              size="small"
              type="text"
              id="correspondence-zip-input"
              value=${this.correspondenceZip}
              @sl-input=${this.validateCorrespondenceZip}
              required
            ></sl-input>
            <span class="error">${this.correspondenceZipError}</span>
            <br />
          </div>

          <div class="emp">
            <!-- Permanent Address -->

            <sl-input
              label=" Permanent Address Line 1"
              size="small"
              id="permanent-address-line1-input"
              type="text"
              value="${this.permanentAddressLine1}"
              @input="${this.validatePermanentAddressLine1}"
              required
            ></sl-input>
            <span class="error">${this.permanentAddressLine1Error}</span>
            <br />

            <sl-input
              label=" Permanent Address Line 2"
              size="small"
              id="permanent-address-line2-input"
              type="text"
              value="${this.permanentAddressLine2}"
              @input="${this.validatePermanentAddressLine2}"
            ></sl-input>
            <span class="error">${this.permanentAddressLine2Error}</span>
            <br />

            <sl-input
              label=" Permanent Landmark"
              size="small"
              id="permanent-landmark-input"
              type="text"
              value="${this.permanentLandmark}"
              @input="${this.validatePermanentLandmark}"
              required
            ></sl-input>
            <span class="error">${this.permanentLandmarkError}</span>
            <br />

            <sl-select
              label=" Permanent Permanent City"
              size="small"
              clearable
              value=""
              id="permanent-city-input"
              class="uni-select"
              @sl-change=${this.handlePermanentCityChange}
              required
            >
              ${this.permanentCityOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.permanentLandmarkError}</span>
            <br />

            <sl-select
              label=" Permanent State"
              size="small"
              clearable
              value=""
              id="permanent-state-input"
              class="uni-select"
              @sl-change=${this.handlePermanentStateChange}
              required
            >
              ${this.permanentStateOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.permanentStateError}</span>
            <br />

            <sl-select
              label=" Permanent Country"
              size="small"
              clearable
              value=""
              id="permanent-country-input"
              class="uni-select"
              @sl-change=${this.handlePermanentCountryChange}
              required
            >
              ${this.permanentCountryOptions.map(
                (option) =>
                  html`<sl-option value="${option.value}"
                    >${option.label}</sl-option
                  >`
              )}
            </sl-select>
            <span class="error">${this.permanentCountryError}</span>
            <br />

            <sl-input
              label=" Permanent Zip"
              size="small"
              type="text"
              id="permanent-zip-input"
              value=${this.permanentZip}
              @sl-input=${this.validatePermanentZip}
              required
            ></sl-input>
            <span class="error">${this.permanentZipError}</span>
            <br />

            <label for="image-upload">Upload Image:</label><br />
            <input
              class="img"
              type="file"
              id="image-upload"
              accept="image/*"
              @change=${this.handleImageUpload}
            />
          </div>

          <sl-button
            type="submit"
            variant="success"
            outline
            @click=${() =>
              (this.innerHTML = this.editingUserIndex !== -1 ? "Save" : "Add")}
            >${this.editingUserIndex !== -1 ? "Save" : "Add"}</sl-button
          >
        </div>
      </form>
    `;
  }

  validateName(e) {
    const name = e.target.value;
    switch (true) {
      case name.trim() === "" || name.length > 40:
        this.nameError = " Full name(maximum length 40 characters)";
        this.shadowRoot.getElementById("name-input").required = true;
        break;
      default:
        this.nameError = "";
        this.name = name;
        this.shadowRoot.getElementById("name-input").required = false;
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
        this.empCodeError = "Enter a valid code(1 alphabet and 6 digits)";
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
        this.officialEmailError = "Enter a valid email Ex-##@annalect.com";
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
        this.personalEmailError = "Enter a valid email Ex-##@gmail.com";
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
          "Please enter a valid 10-digit contact number";
        break;
    }
  }

  validateSecondaryContact(e) {
    const secondaryContact = e.target.value;
    switch (true) {
      case /^\d{10}$/.test(secondaryContact):
        this.secondaryContactError = "";
        this.secondaryContact = secondaryContact;
        break;
      default:
        this.secondaryContactError =
          "Please enter a valid 10-digit contact number";
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
          "Please enter a valid 10-digit contact number";
        break;
    }
  }

  validateCorrespondenceAddressLine1(e) {
    const addressLine1 = e.target.value;
    switch (true) {
      case addressLine1.trim() === "":
        this.correspondenceAddressLine1Error =
          "Enter a valid address (maximum length 80 characters)";
        break;
      case addressLine1.length > 80:
        this.correspondenceAddressLine1Error =
          "Enter a valid address (maximum length 80 characters)";
        break;
      default:
        this.correspondenceAddressLine1Error = "";
        this.correspondenceAddressLine1 = addressLine1;
        break;
    }
  }

  validateCorrespondenceAddressLine2(e) {
    const addressLine2 = e.target.value;
    switch (true) {
      case addressLine2.trim() === "" || addressLine2.length > 80:
        this.correspondenceAddressLine2Error =
          " Enter a valid address (maximum length 80 characters)";
        break;
      default:
        this.correspondenceAddressLine2Error = "";
        this.correspondenceAddressLine2 = addressLine2;
        break;
    }
  }

  validateCorrespondenceLandmark(e) {
    const landmark = e.target.value;
    switch (true) {
      case landmark.trim() === "" || landmark.length > 50:
        this.correspondenceLandmarkError =
          "Please enter a valid Landmark (maximum length 50 characters)";
        break;
      default:
        this.correspondenceLandmarkError = "";
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
      case addressLine1.trim() === "" || addressLine1.length > 80:
        this.permanentAddressLine1Error =
          "Please enter a valid address (maximum length 80 characters)";
        break;
      default:
        this.permanentAddressLine1Error = "";
        this.permanentAddressLine1 = addressLine1;
        break;
    }
  }

  validatePermanentAddressLine2(e) {
    const addressLine2 = e.target.value;
    switch (true) {
      case addressLine2.trim() === "":
      case addressLine2.length > 80:
        this.permanentAddressLine2Error =
          "Please enter a valid address (maximum length 80 characters)";
        break;
      default:
        this.permanentAddressLine2Error = "";
        this.permanentAddressLine2 = addressLine2;
        break;
    }
  }

  validatePermanentLandmark(e) {
    const landmark = e.target.value;
    switch (true) {
      case landmark.trim() === "" || landmark.length > 50:
        this.permanentLandmarkError =
          "Please enter a valid Landmark (maximum length 50 characters)";
        break;
      default:
        this.permanentLandmarkError = "";
        this.permanentLandmark = landmark;
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
    switch (permanentCountry) {
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
        this.permanentZipError = "";
        this.permanentZip = zip;
        break;
      default:
        this.permanentZipError =
          "Please enter a valid zip code (6 digits only)";
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
    if (
      this.name.trim() === "" ||
      this.empCode.trim() === "" ||
      this.officialEmail.trim() === "" ||
      this.personalEmail.trim() === ""
    ) {
      // Show required message for empty fields
      if (this.name.trim() === "") {
        this.nameError = "This field is required";
        this.shadowRoot.getElementById("name-input").required = true;
      }
      if (this.empCode.trim() === "") {
        this.empCodeError = "This field is required";
        this.shadowRoot.getElementById("empcode-input").required = true;
      }
      if (this.officialEmail.trim() === "") {
        this.officialEmailError = "This field is required";
        this.shadowRoot.getElementById("official-email-input").required = true;
      }
      if (this.personalEmail.trim() === "") {
        this.personalEmailError = "This field is required";
        this.shadowRoot.getElementById("personal-email-input").required = true;
      }
      if (this.designation.trim() === "") {
        this.designationError = "This field is required";
        this.shadowRoot.getElementById("designation-select").required = true;
      }
      if (this.department.trim() === "") {
        this.departmentError = "This field is required";
        this.shadowRoot.getElementById("department-select").required = true;
      }
      if (this.primaryContact.trim() === "") {
        this.primaryContactError = "This field is required";
        this.shadowRoot.getElementById("primary-contact-input").required = true;
      }
      if (this.secondaryContact.trim() === "") {
        this.secondaryContactError = "This field is required";
        this.shadowRoot.getElementById(
          "secondary-contact-input"
        ).required = true;
      }
      if (this.emergencyContact.trim() === "") {
        this.emergencyContactError = "This field is required";
        this.shadowRoot.getElementById(
          "emergency-contact-input"
        ).required = true;
      }
      if (this.correspondenceAddressLine1.trim() === "") {
        this.correspondenceAddressLine1Error = "This field is required";
        this.shadowRoot.getElementById(
          "correspondence-address-line1-input"
        ).required = true;
      }
      if (this.correspondenceLandmark.trim() === "") {
        this.correspondenceLandmarkError = "This field is required";
        this.shadowRoot.getElementById(
          "correspondence-landmark-input"
        ).required = true;
      }
      if (this.correspondenceCity.trim() === "") {
        this.correspondenceCityError = "This field is required";
        this.shadowRoot.getElementById(
          "correspondence-city-input"
        ).required = true;
      }
      if (this.correspondenceState.trim() === "") {
        this.correspondenceStateError = "This field is required";
        this.shadowRoot.getElementById(
          "correspondence-state-input"
        ).required = true;
      }
      if (this.correspondenceCountry.trim() === "") {
        this.correspondenceCountryError = "This field is required";
        this.shadowRoot.getElementById(
          "correspondence-country-input"
        ).required = true;
      }
      if (this.correspondenceZip.trim() === "") {
        this.correspondenceZipError = "This field is required";
        this.shadowRoot.getElementById(
          "correspondence-zip-input"
        ).required = true;
      }
      if (this.permanentAddressLine1.trim() === "") {
        this.permanentAddressLine1Error = "This field is required";
        this.shadowRoot.getElementById(
          "permanent-address-line1-input"
        ).required = true;
      }
      if (this.permanentLandmark.trim() === "") {
        this.permanentLandmarkError = "This field is required";
        this.shadowRoot.getElementById(
          "permanent-landmark-input"
        ).required = true;
      }
      if (this.permanentCity.trim() === "") {
        this.permanentCityError = "This field is required";
        this.shadowRoot.getElementById("permanent-city-input").required = true;
      }
      if (this.permanentState.trim() === "") {
        this.permanentStateError = "This field is required";
        this.shadowRoot.getElementById("permanent-state-input").required = true;
      }
      if (this.permanentCountry.trim() === "") {
        this.permanentCountryError = "This field is required";
        this.shadowRoot.getElementById(
          "permanent-country-input"
        ).required = true;
      }
      if (this.permanentZip.trim() === "") {
        this.permanentZipError = "This field is required";
        this.shadowRoot.getElementById("permanent-zip-input").required = true;
      }

      return;
    }
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
      correspondenceCountry: this.correspondenceCountry,
      correspondenceZip: this.correspondenceZip,
      permanentAddressLine1: this.permanentAddressLine1,
      permanentAddressLine2: this.permanentAddressLine2,
      permanentLandmark: this.permanentLandmark,
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
