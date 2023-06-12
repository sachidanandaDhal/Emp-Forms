import { html, css, LitElement } from "lit";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/rating/rating.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
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
      currentPage: { type: Number },
      totalPages: { type: Number },
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
    this.currentPage = 0; // Current page index
    this.totalPages = 3; // Total number of pages in the form
  }

  static get styles() {
    return [
      css`
        /* User valid styles */
        .inline-validation sl-input[data-user-valid]::part(base),
        .inline-validation sl-select[data-user-valid]::part(base) {
          border-color: var(--sl-color-success-600);
        }

        .inline-validation sl-input:focus-within[data-user-valid]::part(base),
        .inline-validation sl-select:focus-within[data-user-valid]::part(base) {
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
        .boxerror::part(base) {
          border-color: var(--sl-color-danger-600);
          box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.33);
        }

        /* .boxerror::part(form-control-label) {
          color: var(--sl-color-danger-500);
        } */

        .boxerror::part(form-control-help-text) {
          color: var(--sl-color-danger-500);
        }

        sl-input,
        sl-select,
        label {
          font-weight: bold;
          margin-left: 10px;
          width: 240px;
          color: #0e0d0d;
        }
        sl-input {
          width: 250px;
        }
        sl-select {
          width: 250px;
        }

        #bubu1 {
          
          display: flex;
          
          
        }
        .image {
          width: 30%;
          margin-left: 20px;
          margin-right: 100px;
          margin-top: 50px;
        }

        #bubu {
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          margin-left: 150px;
          margin-right: 350px;
          margin-top: 30px;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
          padding-top: 10px;
          display: flex;
          border-radius: 30px;
          background: #ffffff;
        }
        .emp {
          margin-top: 0px;
          flex-direction: column;
          line-height: 170%;
          margin-left: -20px;
        }
        .emp1 {
          margin-top: 0px;
          flex-direction: column;
          line-height: 170%;
        }
        sl-button {
          width: 150px;
          height: 50px;
        }
        .img {
          border: 1px solid #cccccc;
          padding: 5px;
          width: 180px;
          height: 25px;
          color: #0c0c0c;
          border-radius: 50px;
          padding-left: 50px;
          padding-top: 9px;
          margin-bottom: 18px;
        }
       
        .card-header {
          box-sizing: border-box;
          width: 600px;
          height: 60px;
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
          background-color: #ffffff;
          text-align: center;
          margin-top: -10px;
          color: #5666f6;
        }
         @media only screen and (max-width: 600px) {
          #bubu1 {
            flex-direction: column;
          }

          .image {
            width: 50%;
            margin-left: 0;
            margin-top: 30px;
          }

          #bubu {
            margin-left: 0;
            margin-right: 0;
            padding: 20px;
            border-radius: 0;
            box-shadow: none;
          }

          sl-input,
          sl-select,
          label {
            width: 100%;
          }

          sl-button {
            width: 100%;
            margin-top: 20px;
          }
        }

        @media only screen and (min-width: 601px) {
          .card-header {
            box-sizing: border-box;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            background-color: #ffffff;
            text-align: center;
            margin-top: -10px;
            color: #5666f6;
          }
        }

        /* Tablet Styles */
        @media only screen and (min-width: 601px) and (max-width: 1024px) {
          #bubu {
            margin-left: 50px;
            margin-right: 50px;
          }
        }
        @media only screen and (min-width: 601px) and (max-width: 800px) {
          #bubu {
            margin-left: 50px;
            margin-right: 50px;
          }
        }

        /* Large Desktop Styles */
        @media only screen and (min-width: 801px) {
          #bubu {
            margin-left: 230px;
            margin-right: 380px;
          }
        }

        /* Large Desktop Styles */
        @media only screen and (min-width: 1025px) {
          #bubu {
            margin-left: 130px;
            margin-right: 380px;
          }
        }

        .card-header {
          box-sizing: border-box;
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
          background-color: #ffffff;
          text-align: center;
          margin-top: -10px;
          color: #5666f6;
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
    
          <form class="inline-validationvalidity-styles" @submit=${
            this.handleSubmit
           }>
          
          
          ${
            this.currentPage === 0
              ? html`
                  <div id="bubu1">
                    <div class="image">
                      <img src="a4.svg" width="550" height="500"/>
                    </div>
                    <div id="bubu">
                      <div class="card-header">
                        <h2>Registration Form</h2>
                      </div>
                      <br />
                      <div class="emp">
                        <sl-input
                          label="Name"
                          pill
                          
                          id="name-input"
                          .value=${this.name}
                          @input=${this.validateName}
                          autocomplete="off"
                          required
                          ><sl-icon name="person-fill" slot="prefix"></sl-icon
                        ></sl-input>
                        <span class="error">${this.nameError}</span>
                        <br />

                        <sl-input
                          label="Employee Code"
                          pill
                          type="text"
                          
                          id="empcode-input"
                          .value=${this.empCode}
                          @input=${this.validateEmpCode}
                          required
                        ></sl-input>
                        <span class="error">${this.empCodeError}</span>
                        <br />

                        <sl-input
                          label="Official Email"
                          pill
                          type="text"
                          
                          id="official-email-input"
                          .value=${this.officialEmail}
                          @input=${this.validateOfficialEmail}
                          required
                        ></sl-input>
                        <span class="error">${this.officialEmailError}</span>
                        <br />

                        <sl-input
                          label="Personal Email Address"
                          pill
                          type="text"
                          id="personal-email-input"
                          .value=${this.personalEmail}
                          @input=${this.validatePersonalEmail}
                          required
                        ></sl-input>
                        <span class="error">${this.personalEmailError}</span>
                        <br />
                      </div>
                      <div class="emp1">
                        <sl-select
                          label="Designation"
                          pill
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
                          pill
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
                          pill
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
                          pill
                          type="tel"
                          id="secondary-contact-input"
                          value="${this.secondaryContact}"
                          @input=${this.validateSecondaryContact}
                          required
                        ></sl-input>
                        <span class="error">${this.secondaryContactError}</span>
                        <br />
                      </div>
                      <sl-button
                        type="button"
                        outline
                        pill
                        variant="primary"
                        @click=${this.goToNextPage}
                        >Next</sl-button
                      >
                    </div>
                  </div>
                `
              : ""
          }

                    ${
                      this.currentPage === 1
                        ? html`
                        <div id="bubu1">
                    <div class="image">
                    <img src="a4.svg" width="550" height="500"/>
                    </div>
                            <div id="bubu">
                              <div class="card-header">
                                <h2>Correspondence Address Details</h2>
                              </div>
                              <div class="emp">
                                <sl-input
                                  label="Emergency Number"
                                  pill
                                  id="emergency-contact-input"
                                  type="tel"
                                  value="${this.emergencyContact}"
                                  @input="${this.validateEmergencyContact}"
                                  required
                                ></sl-input>
                                <span class="error"
                                  >${this.emergencyContactError}</span
                                >
                                <br />

                                <sl-input
                                  label="Correspondence Address Line 1"
                                  pill
                                  id="correspondence-address-line1-input"
                                  type="text"
                                  value="${this.correspondenceAddressLine1}"
                                  @input="${this
                                    .validateCorrespondenceAddressLine1}"
                                  required
                                ></sl-input>
                                <span class="error"
                                  >${this.correspondenceAddressLine1Error}</span
                                >
                                <br />

                                <sl-input
                                  label="Correspondence Address Line 2"
                                  pill
                                  id="correspondence-address-line2-input"
                                  type="text"
                                  value="${this.correspondenceAddressLine2}"
                                  @input="${this
                                    .validateCorrespondenceAddressLine2}"
                                ></sl-input>
                                <span class="error"
                                  >${this.correspondenceAddressLine2Error}</span
                                >
                                <br />

                                <sl-input
                                  label="Correspondence Landmark"
                                  pill
                                  id="correspondence-landmark-input"
                                  type="text"
                                  value="${this.correspondenceLandmark}"
                                  @input="${this
                                    .validateCorrespondenceLandmark}"
                                  required
                                ></sl-input>
                                <span class="error"
                                  >${this.correspondenceLandmarkError}</span
                                >
                                <br />
                              </div>
                              <div class="emp1">
                                <sl-select
                                  label="Correspondence City"
                                  pill
                                  clearable
                                  value=""
                                  id="correspondence-city-input"
                                  class="uni-select"
                                  @sl-change=${this
                                    .handleCorrespondenceCityChange}
                                  required
                                >
                                  ${this.correspondenceCityOptions.map(
                                    (option) =>
                                      html`<sl-option value="${option.value}"
                                        >${option.label}</sl-option
                                      >`
                                  )}
                                </sl-select>
                                <span class="error"
                                  >${this.correspondenceCityError}</span
                                >
                                <br />

                                <sl-select
                                  label="Correspondence State"
                                  pill
                                  clearable
                                  value=""
                                  id="correspondence-state-input"
                                  class="uni-select"
                                  @sl-change=${this
                                    .handleCorrespondenceStateChange}
                                  required
                                >
                                  ${this.correspondenceStateOptions.map(
                                    (option) =>
                                      html`<sl-option value="${option.value}"
                                        >${option.label}</sl-option
                                      >`
                                  )}
                                </sl-select>
                                <span class="error"
                                  >${this.correspondenceStateError}</span
                                >
                                <br />

                                <sl-select
                                  label="Correspondence Country"
                                  pill
                                  clearable
                                  value=""
                                  id="correspondence-country-input"
                                  class="uni-select"
                                  @sl-change=${this
                                    .handleCorrespondenceCountryChange}
                                  required
                                >
                                  ${this.correspondenceCountryOptions.map(
                                    (option) =>
                                      html`<sl-option value="${option.value}"
                                        >${option.label}</sl-option
                                      >`
                                  )}
                                </sl-select>
                                <span class="error"
                                  >${this.correspondenceCountryError}</span
                                >
                                <br />

                                <sl-input
                                  label=" Correspondence Zip"
                                  pill
                                  type="text"
                                  id="correspondence-zip-input"
                                  value=${this.correspondenceZip}
                                  @sl-input=${this.validateCorrespondenceZip}
                                  required
                                ></sl-input>
                                <span class="error"
                                  >${this.correspondenceZipError}</span
                                >
                                <br />
                              </div>

                              <sl-button
                                type="button"
                                pill
                                outline
                                variant="primary"
                                @click=${this.goToPreviousPage}
                                >Previous</sl-button
                              >
                              <sl-button
                                type="button"
                                pill
                                outline
                                variant="primary"
                                @click=${this.goToNextPage}
                                >Next</sl-button
                              >
                            </div>
                                  </div>
                          `
                        : ""
                    }

                ${
                  this.currentPage === 2
                    ? html`
                    <div id="bubu1">
                    <div class="image">
                    <img src="a4.svg" width="550" height="500"/>
                    </div>
                        <div id="bubu">
                          <div class="card-header">
                            <h2>Permanent Address Details</h2>
                          </div>
                          <div class="emp">
                            <!-- Permanent Address -->

                            <sl-input
                              label=" Permanent Address Line 1"
                              pill
                              id="permanent-address-line1-input"
                              type="text"
                              value="${this.permanentAddressLine1}"
                              @input="${this.validatePermanentAddressLine1}"
                              required
                            ></sl-input>
                            <span class="error"
                              >${this.permanentAddressLine1Error}</span
                            >
                            <br />

                            <sl-input
                              label=" Permanent Address Line 2"
                              pill
                              id="permanent-address-line2-input"
                              type="text"
                              value="${this.permanentAddressLine2}"
                              @input="${this.validatePermanentAddressLine2}"
                            ></sl-input>
                            <span class="error"
                              >${this.permanentAddressLine2Error}</span
                            >
                            <br />

                            <sl-input
                              label=" Permanent Landmark"
                              pill
                              id="permanent-landmark-input"
                              type="text"
                              value="${this.permanentLandmark}"
                              @input="${this.validatePermanentLandmark}"
                              required
                            ></sl-input>
                            <span class="error"
                              >${this.permanentLandmarkError}</span
                            >
                            <br />

                            <sl-select
                              label=" Permanent Permanent City"
                              pill
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
                            <span class="error"
                              >${this.permanentCitykError}</span
                            >
                            <br />
                          </div>
                          <div class="emp1">
                            <sl-select
                              label=" Permanent State"
                              pill
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
                            <span class="error"
                              >${this.permanentStateError}</span
                            >
                            <br />

                            <sl-select
                              label=" Permanent Country"
                              pill
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
                            <span class="error"
                              >${this.permanentCountryError}</span
                            >
                            <br />

                            <sl-input
                              label=" Permanent Zip"
                              pill
                              type="text"
                              id="permanent-zip-input"
                              value=${this.permanentZip}
                              @sl-input=${this.validatePermanentZip}
                              required
                            ></sl-input>
                            <span class="error">${this.permanentZipError}</span>
                            <br />

                            <label for="image-upload">Upload Image:</label
                            ><br />
                            <input
                              class="img"
                              type="file"
                              id="image-upload"
                              accept="image/*"
                              @change=${this.handleImageUpload}
                            />
                          </div>
                          <sl-button
                            type="button"
                            outline
                            pill
                            variant="primary"
                            @click=${this.goToPreviousPage}
                            >Previous</sl-button
                          >
                          <sl-button
                            type="submit"
                            variant="success"
                            pill
                            outline
                            @click=${() =>
                              (this.innerHTML =
                                this.editingUserIndex !== -1 ? "Save" : "Add")}
                            >${this.editingUserIndex !== -1
                              ? "Save"
                              : "Add"}</sl-button
                          >
                        </div>
                            </div>
                      `
                    : ""
                }
          </div>
        </div>
        <br><br><br>
      </sl-form>
    `;
  }

  goToNextPage() {
    if (this.currentPage === 0) {
      // Perform validation for the current page
      this.validateName({ target: { value: this.name } });
      this.validateEmpCode({ target: { value: this.empCode } });
      this.validateOfficialEmail({ target: { value: this.officialEmail } });
      this.validatePersonalEmail({ target: { value: this.personalEmail } });
      this.handleDesignationChange({ target: { value: this.designation } });
      this.handleDepartmentChange({ target: { value: this.department } });
      this.validatePrimaryContact({ target: { value: this.primaryContact } });
      this.validateSecondaryContact({
        target: { value: this.secondaryContact },
      });

      // Check if there are any errors
      if (
        this.nameError ||
        this.empCodeError ||
        this.officialEmailError ||
        this.personalEmailError ||
        this.designationError ||
        this.departmentError ||
        this.primaryContactError ||
        this.secondaryContactError
      ) {
        // There are errors, do not proceed to the next page
        return;
      }
    } else if (this.currentPage === 1) {
      // Perform validation for the current page
      this.validateEmergencyContact({
        target: { value: this.emergencyContact },
      });
      this.validateCorrespondenceAddressLine1({
        target: { value: this.correspondenceAddressLine1 },
      });
      this.validateCorrespondenceAddressLine2({
        target: { value: this.correspondenceAddressLine2 },
      });
      this.validateCorrespondenceLandmark({
        target: { value: this.correspondenceLandmark },
      });
      this.handleCorrespondenceCityChange({
        target: { value: this.correspondenceCity },
      });
      this.handleCorrespondenceStateChange({
        target: { value: this.correspondenceState },
      });
      this.handleCorrespondenceCountryChange({
        target: { value: this.correspondenceCountry },
      });
      this.validateCorrespondenceZip({
        target: { value: this.correspondenceZip },
      });

      // Check if there are any errors
      if (
        this.emergencyContactError ||
        this.correspondenceAddressLine1Error ||
        this.correspondenceAddressLine2Error ||
        this.correspondenceLandmarkError ||
        this.correspondenceCityError ||
        this.correspondenceStateError ||
        this.correspondenceCountryError ||
        this.correspondenceZipError
      ) {
        // There are errors, do not proceed to the next page
        return;
      }
    }

    // Logic to navigate to the next page
    this.currentPage += 1;
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  validateName(e) {
    const name = e.target.value;
    const nameInput = this.shadowRoot.getElementById("name-input");

    switch (true) {
      case name.trim() === "" || name.length > 40:
        this.nameError = " Full name (maximum length 40 characters)";
        nameInput.required = true;
        nameInput.classList.add("boxerror");
        break;
      default:
        this.nameError = "";
        this.name = name;
        nameInput.required = false;
        nameInput.classList.remove("boxerror");
        break;
    }
  }
  validateEmpCode(e) {
    const empCode = e.target.value;
    const empCodeInput = this.shadowRoot.getElementById("empcode-input");

    switch (true) {
      case /^[A-Za-z]\d{6}$/.test(empCode):
        this.empCodeError = "";
        this.empCode = empCode;
        empCodeInput.classList.remove("boxerror");
        break;
      default:
        this.empCodeError = "Enter a valid code (1 alphabet and 6 digits)";
        empCodeInput.classList.add("boxerror");
        break;
    }
  }

  validateOfficialEmail(e) {
    const officialEmail = e.target.value;
    const officialEmailInput = this.shadowRoot.getElementById(
      "official-email-input"
    );

    switch (true) {
      case /^\S+@(annalect)\.com$/.test(officialEmail):
        this.officialEmailError = "";
        this.officialEmail = officialEmail;
        officialEmailInput.classList.remove("boxerror");
        break;
      default:
        this.officialEmailError = "Enter a valid email Ex-##@annalect.com";
        officialEmailInput.classList.add("boxerror");
        break;
    }
  }

  validatePersonalEmail(e) {
    const personalEmail = e.target.value;
    const personalEmailInput = this.shadowRoot.getElementById(
      "personal-email-input"
    );

    switch (true) {
      case /^\S+@gmail\.com$/.test(personalEmail):
      case /^\S+@yahoo\.com$/.test(personalEmail):
      case /^\S+@outlook\.com$/.test(personalEmail):
        this.personalEmailError = "";
        this.personalEmail = personalEmail;
        personalEmailInput.classList.remove("boxerror");
        break;
      default:
        this.personalEmailError = "Enter a valid email Ex-##@gmail.com";
        personalEmailInput.classList.add("boxerror");
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
    const primaryContactInput = this.shadowRoot.getElementById(
      "primary-contact-input"
    );

    switch (true) {
      case /^\d{10}$/.test(primaryContact):
        this.primaryContactError = "";
        this.primaryContact = primaryContact;
        primaryContactInput.classList.remove("boxerror");
        break;
      default:
        this.primaryContactError =
          "Please enter a valid 10-digit contact number";
        primaryContactInput.classList.add("boxerror");
        break;
    }
  }

  validateSecondaryContact(e) {
    const secondaryContact = e.target.value;
    const secondaryContactInput = this.shadowRoot.getElementById(
      "secondary-contact-input"
    );

    switch (true) {
      case /^\d{10}$/.test(secondaryContact):
        this.secondaryContactError = "";
        this.secondaryContact = secondaryContact;
        secondaryContactInput.classList.remove("boxerror");
        break;
      default:
        this.secondaryContactError =
          "Please enter a valid 10-digit contact number";
        secondaryContactInput.classList.add("boxerror");
        break;
    }
  }

  validateEmergencyContact(e) {
    const emergencyContact = e.target.value;
    const emergencyContactInput = this.shadowRoot.getElementById(
      "emergency-contact-input"
    );

    switch (true) {
      case /^\d{10}$/.test(emergencyContact):
        this.emergencyContactError = "";
        this.emergencyContact = emergencyContact;
        emergencyContactInput.classList.remove("boxerror");
        break;
      default:
        this.emergencyContactError = "Enter a valid 10-digit contact number";
        emergencyContactInput.classList.add("boxerror");
        break;
    }
  }

  validateCorrespondenceAddressLine1(e) {
    const addressLine1 = e.target.value;
    const addressLine1Input = this.shadowRoot.getElementById(
      "correspondence-address-line1-input"
    );

    switch (true) {
      case addressLine1.trim() === "" || addressLine1.length > 80:
        this.correspondenceAddressLine1Error =
          "Address line-1 cannot exceed 80 characters";
        addressLine1Input.classList.add("boxerror");
        break;
      default:
        this.correspondenceAddressLine1Error = "";
        this.correspondenceAddressLine1 = addressLine1;
        addressLine1Input.classList.remove("boxerror");
        break;
    }
  }

  validateCorrespondenceAddressLine2(e) {
    const addressLine2 = e.target.value;
    const addressLine2Input = this.shadowRoot.getElementById(
      "correspondence-address-line2-input"
    );

    switch (true) {
      case addressLine2.trim() === "" || addressLine2.length > 80:
        this.correspondenceAddressLine2Error =
          "Address line-2 cannot exceed 80 characters";
        addressLine2Input.classList.add("boxerror");
        break;
      default:
        this.correspondenceAddressLine2Error = "";
        this.correspondenceAddressLine2 = addressLine2;
        addressLine2Input.classList.remove("boxerror");
        break;
    }
  }

  validateCorrespondenceLandmark(e) {
    const landmark = e.target.value;
    const landmarkInput = this.shadowRoot.getElementById(
      "correspondence-landmark-input"
    );

    switch (true) {
      case landmark.trim() === "" || landmark.length > 50:
        this.correspondenceLandmarkError =
          "Landmark cannot exceed 50 characters";
        landmarkInput.classList.add("boxerror");
        break;
      default:
        this.correspondenceLandmarkError = "";
        this.correspondenceLandmark = landmark;
        landmarkInput.classList.remove("boxerror");
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
    const zipInput = this.shadowRoot.getElementById("correspondence-zip-input");

    switch (true) {
      case /^\d{6}$/.test(zip):
        this.correspondenceZipError = "";
        this.correspondenceZip = zip;
        zipInput.classList.remove("boxerror");
        break;
      default:
        this.correspondenceZipError = "Enter a valid zip code (6 digits only)";
        zipInput.classList.add("boxerror");
        break;
    }
  }

  validatePermanentAddressLine1(e) {
    const addressLine1 = e.target.value;
    const addressLine1Input = this.shadowRoot.getElementById(
      "permanent-address-line1-input"
    );

    switch (true) {
      case addressLine1.trim() === "" || addressLine1.length > 80:
        this.permanentAddressLine1Error =
          "Address line-1 cannot exceed 80 characters";
        addressLine1Input.classList.add("boxerror");
        break;
      default:
        this.permanentAddressLine1Error = "";
        this.permanentAddressLine1 = addressLine1;
        addressLine1Input.classList.remove("boxerror");
        break;
    }
  }

  validatePermanentAddressLine2(e) {
    const addressLine2 = e.target.value;
    const addressLine2Input = this.shadowRoot.getElementById(
      "permanent-address-line2-input"
    );

    switch (true) {
      case addressLine2.trim() === "" || addressLine2.length > 80:
        this.permanentAddressLine2Error = "Address2 can't exceed 80 characters";
        addressLine2Input.classList.add("boxerror");
        break;
      default:
        this.permanentAddressLine2Error = "";
        this.permanentAddressLine2 = addressLine2;
        addressLine2Input.classList.remove("boxerror");
        break;
    }
  }

  validatePermanentLandmark(e) {
    const landmark = e.target.value;
    const landmarkInput = this.shadowRoot.getElementById(
      "permanent-landmark-input"
    );

    switch (true) {
      case landmark.trim() === "" || landmark.length > 50:
        this.permanentLandmarkError = "Landmark can't exceed 50 characters";
        landmarkInput.classList.add("boxerror");
        break;
      default:
        this.permanentLandmarkError = "";
        this.permanentLandmark = landmark;
        landmarkInput.classList.remove("boxerror");
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
    const zipInput = this.shadowRoot.getElementById("permanent-zip-input");

    switch (true) {
      case /^\d{6}$/.test(zip):
        this.permanentZipError = "";
        this.permanentZip = zip;
        zipInput.classList.remove("boxerror");
        break;
      default:
        this.permanentZipError =
          "Please enter a valid zip code (6 digits only)";
        zipInput.classList.add("boxerror");
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
    {
      // Perform validation for the current page
      this.validatePermanentAddressLine1({
        target: { value: this.permanentAddressLine1 },
      });
      this.validatePermanentAddressLine2({
        target: { value: this.permanentAddressLine2 },
      });
      this.validatePermanentLandmark({
        target: { value: this.permanentLandmark },
      });
      this.handlePermanentCityChange({ target: { value: this.permanentCity } });
      this.handlePermanentStateChange({
        target: { value: this.permanentState },
      });
      this.handlePermanentCountryChange({
        target: { value: this.permanentCountry },
      });
      this.validatePermanentZip({ target: { value: this.permanentZip } });

      // Check if there are any errors
      if (
        this.permanentAddressLine1Error ||
        this.permanentAddressLine2Error ||
        this.permanentLandmarkError ||
        this.permanentCityError ||
        this.permanentStateError ||
        this.permanentCountryError ||
        this.permanentZipError
      ) {
        // There are errors, do not submit the form
        return;
      }

     
    }

    // Store the data in local storage
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
    // Show full-screen alert
    const alertElement = document.createElement("div");
    alertElement.style.position = "fixed";
    alertElement.style.top = "0";
    alertElement.style.left = "0";
    alertElement.style.width = "100%";
    alertElement.style.height = "100%";
    alertElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    alertElement.style.display = "flex";
    alertElement.style.justifyContent = "center";
    alertElement.style.alignItems = "center";
    alertElement.style.zIndex = "9999";
  
    const alertContent = document.createElement("div");
    alertContent.style.backgroundColor = "#5666f6";
    alertContent.style.color = "#fff";
    alertContent.style.padding = "50px";
    alertContent.style.width = "600px";
    alertContent.style.height = "100px";
    alertContent.style.borderRadius = "5px";
    alertContent.style.textAlign = "center";
    alertContent.style.fontSize = "27px";
  
    const alertText = document.createElement("p");
    alertText.textContent = `Welcome to Annalect India : ${formData.name}`;
  
    alertContent.appendChild(alertText);
    alertElement.appendChild(alertContent);
    document.body.appendChild(alertElement);

    setTimeout(() => {
      document.body.removeChild(alertElement);
    }, 3000);


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
