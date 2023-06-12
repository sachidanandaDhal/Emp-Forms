import { LitElement, html, css } from "lit-element";
import "./sachi-11";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/rating/rating.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/color-picker/color-picker.js";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

setBasePath("/path/to/shoelace/dist");

class FormDataPage extends LitElement {
  static get properties() {
    return {
      formData: { type: Array },
      editingUser: { type: Number },
      searchTerm: { type: String },
      sortOrder: { type: String },
    };
  }

  constructor() {
    super();
    this.formData = JSON.parse(localStorage.getItem("formData")) || [];
    this.editingUser = null;
    this.searchTerm = "";
    this.sortOrder = "asc";
  }

  static styles = css`
    * {
      margin: 1px;
      padding: 0.4px;
      box-sizing: border-box;
    }

    sl-input {
      margin-top: 10px;
      margin-left: 220px;
      width: 550px;
      background-color: var(--sl-color-neutral-0);
      color: var(--sl-color-neutral-950)
    }
    sl-select{
      margin-top: 10px;
      width: 180px;
    }

    .card-list {
      background-image: linear-gradient(120deg, #ffffff 0%, #ffffff 100%);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      float: left;
      width: 100%;
    }
    .card {
      color: #efe3e3;
      width: 390px;
      height: 455px;
      position: relative;
      /* outline: 6px solid #f5f1f1; */
      box-shadow: 1px 1px 9px #080005;
      border-radius: 10px;
      line-height: 170%;
      padding: 15px;
      background-image: linear-gradient(to top, #d7d8e6 0%, #ffffff 100%);
      background-blend-mode: multiply;
      transition: background-color 1s ease-in-out;
      overflow: hidden;
      margin-left: 3rem;
      margin-top: 2rem;
    }

    .card-header {
      background-image: linear-gradient(#559cff, #507cff);
      color: #fff8f8;
      border-radius: 49px;
      display: flex;
      height: 5.5rem;
      width: 21.8rem;
      margin-bottom: 20px;
      padding: 1px;
      text-align: center;
    }
    .card-header h2 {
      margin-top: 25px;
      padding-left: 20px;
    }
    .card-front {
      padding: 15px;
      color: #0c0c0c;
      bottom: 16px;
      left: 0;
      position: absolute;
      width: 100%;
      text-align: left;
      transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .card-back {
      color: #0f0f0f;
      transform: translateX(130%);
      transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .card:hover .card-front {
      transform: translateX(-100%);
    }
    .card:hover .card-back {
      transform: translateX(0);
    }

    #all-table-data {
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
    

    //image.............
    .image-container {
      width: 100px;
      height: 100px;
      display: flex;
    }
    .image-container img {
      border-radius: 50%;
      width: 5rem;
      height: 4.9rem;
    }
    .buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    //edit overlay...............
    .clear {
      width: 100px;
      box-sizing: border-box;
      border: 2px solid #161616;
      border-radius: 20px;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;

      justify-content: center;
      align-items: center;
      z-index: 9999;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 0.25s, opacity 0.25s 0s;
    }

    .overlay.active {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
    }

    .closebtn {
      position: absolute;
      color: #f30a0a;
      top: 20px;
      right: 50px;
      weight: 10px;
      font-size: 3em;
      cursor: pointer;
      z-index: 999;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
      .overlay {
        width: 100%;
        height: 100%;
      }
    }

    .se-so{
      display:flex;
    }
    
  `;

  render() {
    this.sortFormData(); // Call the sorting method

    const filteredFormData = this.formData.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return html`
      <div class="se-so">

      <div id="sorting-bar">
          <sl-select
         
            id="sorting-select"
            pill
            placeholder="Sort by Name:"
            filled
            @sl-change="${this.handleSort}"
          >
            <sl-option   value="asc">Ascending</sl-option>
            <sl-option  value="desc">Descending</sl-option>
          </sl-select>
        </div>
        <div id="search-bar">
          <sl-input
          pill
            type="text"
            id="search-input"
            @input="${this.handleSearch}"
            placeholder="Search.."
            filled
          />
        </div>

       
      </div>

      <div class="card-list">
        ${filteredFormData.map(
          (item, index) => html`
            <div class="card">
              <div class="card-front">
                <div class="card-header">
                  <div class="image-container">
                    <img src="${item.image}" alt="Profile Image" />
                  </div>
                  <h2>Name: ${item.name}</h2>
                </div>

                <p><strong>Employee Code:</strong> ${item.empCode}</p>
                <p>
                  <strong>Official Email Address:</strong>
                  ${item.officialEmail}
                </p>
                <p>
                  <strong>Personal Email Address:</strong>
                  ${item.personalEmail}
                </p>
                <p><strong>Primary Number:</strong> ${item.primaryContact}</p>
                <p>
                  <strong>Secondary Number:</strong>
                  ${item.secondaryContact}
                </p>
                <p>
                  <strong>Emergency Number:</strong>
                  ${item.emergencyContact}
                </p>
                <p><strong>Department:</strong> ${item.department}</p>
                <p><strong>Designation:</strong>${item.designation}</p>

                <p>
                  <strong>CorrespondenceAddressLine1:</strong
                  >${item.correspondenceAddressLine1}
                </p>
                <p>
                  <strong>CorrespondenceAddressLine2:</strong
                  >${item.correspondenceAddressLine2}
                </p>
              </div>
              <div class="card-back">
                <p>
                  <strong>CorrespondenceLandmark:</strong
                  >${item.correspondenceLandmark}
                </p>
                <p>
                  <strong>CorrespondenceCity:</strong
                  >${item.correspondenceCity},
                </p>
                <p>
                  <strong>CorrespondenceState:</strong
                  >${item.correspondenceState}
                </p>
                <p>
                  <strong>CorrespondenceZip:</strong>
                  ${item.correspondenceZip}
                </p>
                <p>
                  <strong>CorrespondenceCountry:</strong
                  >${item.correspondenceCountry}
                </p>

                <p>
                  <strong>Permanent AddressLine1:</strong
                  >${item.permanentAddressLine1}
                </p>
                <p>
                  <strong>Permanent AddressLine2:</strong
                  >${item.permanentAddressLine2}
                </p>
                <p>
                  <strong>Permanent Landmark:</strong>${item.permanentLandmark}
                </p>
                <p><strong>Permanent City:</strong>${item.permanentCity}</p>
                <p>
                  <strong>Permanent Country:</strong>${item.permanentCountry}
                </p>
                <p><strong>Permanent State:</strong>${item.permanentState}</p>
                <p><strong>Permanent Zip:</strong> ${item.permanentZip}</p>
                <br />
                <div class="buttons">
                  <div class="button1">
                    <sl-button
                      variant="primary"
                      @click=${() => this.editUser(index)}
                      >Edit</sl-button
                    >
                  </div>
                  <div class="button2">
                    <sl-button
                      variant="danger"
                      @click=${() => this.deleteUser(index)}
                    >
                      Delete
                    </sl-button>
                  </div>
                </div>
              </div>
              ${this.editingUser === index
                ? html`
                    <div id="myNav" class="overlay active">
                      <sl-button
                        variant="danger"
                        class="closebtn"
                        @click="${() => this.closeEditPage()}"
                        >&times;</sl-button
                      >
                      <div class="table-body">
                        <sachi-11
                          .formData=${this.formData}
                          .editingUserIndex=${index}
                          @save-form=${this.handleSaveForm}
                        ></sachi-11>
                      </div>
                    </div>
                  `
                : ""}
            </div>
          `
        )}
      </div>
    `;
  }
  editUser(index) {
    this.editingUser = index;
    const myNav = this.shadowRoot.getElementById("myNav");
    myNav.classList.add("active");
  }

  closeEditPage() {
    this.editingUser = null;
    const myNav = this.shadowRoot.getElementById("myNav");
    myNav.classList.remove("active");
  }

  editUser(index) {
    this.editingUser = index;
  }

  deleteUser(index) {
    const deletedUserName = this.formData[index].name;
    if (confirm(`Are you sure you want to delete ${deletedUserName}?`))
      window.location.reload();
    {
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
    // window.location.reload();
  }

  handleSearch(event) {
    this.searchTerm = event.target.value;
    this.requestUpdate();
  }

  sortFormData() {
    if (this.sortOrder === "asc") {
      this.formData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.formData.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  handleSort(event) {
    this.sortOrder = event.target.value;
    this.requestUpdate();
  }
}

customElements.define("show-user-data", FormDataPage);
