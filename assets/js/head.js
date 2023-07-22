class Head extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
    <script src="https://kit.fontawesome.com/f407607c7f.js" crossorigin="anonymous"></script>
    
    <!-- CSS Styles -->
    <link rel="stylesheet" href="assets/css/styles.css"/> 
    <link rel="stylesheet" href="assets/css/index.css"/>
    <link rel="stylesheet" href="assets/css/contact.css"/>
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/JD.png"/>
    `;
  }
}

customElements.define('head-component', Head);