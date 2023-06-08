import { LitElement, html, css } from "lit-element";
import "./sachi-11.js";
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
    * {
      margin: 1px;
      padding: 0.4px;
      box-sizing: border-box;
    }
    
    .card-list{
      background-image: linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      float: left;
      width: 100%;
    }
    .card {
      color: #1b1b1b;
      width: 390px;
      height: 455px;
      position: relative;
      /* outline: 6px solid #f5f1f1; */
      box-shadow: 1px 1px 12px #0c0c0c ;
      border-radius: 8px;
      line-height: 150%;
      padding: 16px;
      background: #ffffff;
      background-blend-mode: multiply;
      background-image: linear-gradient(to top, #832555 0%, #1f457a 100%);
      transition: background-color 1s ease-in-out;
      overflow: hidden;
      margin-left: 3rem;
      margin-top: 3rem;
    }
    .card-header {
      background-image: linear-gradient(#ffffff, #714ed3);
      color: #080808;
      border-radius: 49px;
      display: flex;
      height: 5.5rem;
      width: 21.8rem;
      margin-bottom: 40px;
      padding:1px;
      text-align:  center;
      
    }
    .card-header h2{
      margin-top: 25px;
      padding-left: 20px;
    }
    .card-front {
      padding: 15px;
      color: #f8eeee;
      bottom: 16px;
      left: 0;
      position: absolute;
      width: 100%;
      text-align: left;
      transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .card-back {
      color: #f8f7f7;
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
    //image
    .image-container {
      /* border-radius: 100px; */
      width: 100px;
      height: 100px;
      display: flex;
      
    }
    .image-container img {
      border-radius: 50%;
      width: 5rem;
      height: 4.9rem;
    }
    .btn{
      padding-left: 90px
    }
    .buttons{
      padding-left: 40%;
    }
    ///////////////////////////////////////////////////
    .uni-select {
      width: 213px;
    }

    .overlay {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-image: linear-gradient(#74d2f4, #e68dd4);
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
      color: #ffffff;
      display: block;
      transition: 0.3s;
    }

    .overlay a:hover,
    .overlay a:focus {
      color: #f30707;
    }

   

    .closebtn {
      position: absolute;
      color: #ffffff;
      top: 20px;
      right: 50px;
      font-size: 1.7em;
      cursor: pointer;
      display: none;
      z-index: 999;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .closebtn:hover {
      font-size: 2.4em;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      color: #e41212;
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
  `;

  render() {
    const filteredFormData = this.formData.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return html`
      
        <div id="search-bar">
          <sl-input
            type="text"
            id="search-input"
            @input="${this.handleSearch}"
            placeholder="Search.."
          />
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

                  <h1>Personal</h1>
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
                    <strong>Permanent Landmark:</strong
                    >${item.permanentLandmark}
                  </p>
                  <p><strong>Permanent City:</strong>${item.permanentCity}</p>
                  <p>
                    <strong>Permanent Country:</strong>${item.permanentCountry}
                  </p>
                  <p><strong>Permanent State:</strong>${item.permanentState}</p>
                  <p><strong>Permanent Zip:</strong> ${item.permanentZip}</p>
                  <div class="buttons">
                    <sl-button variant="primary" outline @click=${() => this.editUser(index)}>Edit</sl-button>
                  </div>
                </div>
                ${this.editingUser === index
                  ? html`
                      <div id="bubuN" class="overlay">
                        <a class="closebtn" @click="${this.closeNav}"
                          >&times;</a
                        >
                        <div class="table-body">
                          <sach-11
                            .formData=${this.formData}
                            .editingUserIndex=${index}
                            @save-form=${this.handleSaveForm}
                          ></sach-11>
                        </div>
                      </div>
                      <div class="btn">
                        <sl-button variant="success" outline  @click="${this.openNav}">
                          Update
                        </sl-button>
                        <sl-button 
                          variant="danger"
                          outline
                          @click=${() => this.deleteUser(index)}
                        >
                          Delete
                        </sl-button>
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
    const bubuN = this.shadowRoot.getElementById("bubuN");
    bubuN.style.width = "100%";
  }
  closeNav() {
    const bubuN = this.shadowRoot.getElementById("bubuN");
    bubuN.style.width = "0%";
    window.location.reload();
  }
  editUser(index) {
    this.editingUser = index;
  }
  deleteUser(index) {
    const deletedUserName = this.formData[index].name;
    if (confirm(`Are you sure you want to delete ${deletedUserName}?`))window.location.reload(); {
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
    window.location.reload();
  }
  handleSearch(event) {
    this.searchTerm = event.target.value;
    this.requestUpdate();
  }
}

customElements.define("show1-user-data", FormDataPage);
