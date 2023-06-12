import { LitElement, html, css } from "lit-element";

class Navbar extends LitElement {
  static get styles() {
    return css`
      nav {
        background-color: #585bef;
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 12px;
        border-radius: 20px;
        box-shadow: 1px 1px 12px #000;
      }

      ul {
        display: flex;
        list-style-type: none;
       margin: 0;
       padding: 0;
      }

      li {
        margin: 0 1rem;
        
      }
      .logo{
        margin-left:35px;
      }

      a {
        color: white;
        text-decoration: none;
        margin-right: 20px;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <div class="logo">Annalect</div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="page.html">Data</a></li>
          
        </ul>
      </nav>
    `;
  }
}

customElements.define('my-navbar', Navbar);
