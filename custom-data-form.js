import { LitElement, html } from 'lit-element';

class CustomDataForm extends LitElement {
  static get properties() {
    return {
      fullName: { type: String },
      employeeCode: { type: String },
      officialEmail: { type: String },
      personalEmail: { type: String },
    };
  }

  constructor() {
    super();
    this.fullName = '';
    this.employeeCode = '';
    this.officialEmail = '';
    this.personalEmail = '';
  }

  render() {
    return html`
      <form  @submit=${this.validateForm}>
        <label for="full-name">Full Name:</label>
        <input
          id="full-name"
          type="text"
          .value=${this.fullName}
          @input=${this._onFullNameInput}
          required
          maxlength="40"
        />
        <br />

        <label for="employee-code">Employee Code:</label>
        <input
          id="employee-code"
          type="text"
          .value=${this.employeeCode}
          @input=${this._onEmployeeCodeInput}
          pattern="[A-Z][0-9]{6}"
          required
        />
        <br />

        <label for="official-email">Official Email:</label>
        <input
          id="official-email"
          type="email"
          .value=${this.officialEmail}
          @input=${this._onOfficialEmailInput}
          pattern=".*@(annalect)\.com"
          required
        />
        <br />

        <label for="personal-email">Personal Email:</label>
        <input
          id="personal-email"
          type="email"
          .value=${this.personalEmail}
          @input=${this._onPersonalEmailInput}
          pattern=".*@(gmail|yahoo|outlook)\.com"
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    `;
  }
  click(){
    console.log(
      `fullName: ${this.fullName}, employeeCode: ${this.employeeCode}, officialEmail: ${this.officialEmail}, personalEmail: ${this.personalEmail}`
    )
  }

  _onFullNameInput(event) {
    this.fullName = event.target.value;
    localStorage.setItem('fullName', event.target.value);
  }
  
  _onEmployeeCodeInput(event) {
    this.employeeCode = event.target.value.toUpperCase();
    localStorage.setItem('employeeCode', event.target.value.toUpperCase());
  }
  
  _onOfficialEmailInput(event) {
    this.officialEmail = event.target.value;
    localStorage.setItem('officialEmail', event.target.value);
  }
  
  _onPersonalEmailInput(event) {
    this.personalEmail = event.target.value;
    localStorage.setItem('personalEmail', event.target.value);
  }
  
}

customElements.define('custom-data-form', CustomDataForm);
