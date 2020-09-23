import magento_modules from "../data/magento_modules";

let liStr = "";
let secStr = "";

for (let i = 0; i < Object.keys(magento_modules).length; i++) {
  const key = Object.keys(magento_modules)[i];
  const id = key.toLowerCase();
  if (i === 0) {
    liStr += `
        <li class="nav-item">
            <a class="nav-link" active href="#module_${id}">${key}</a>
        </li>`;
  } else {
    liStr += `
        <li class="nav-item">
            <a class="nav-link" href="#module_${id}">${key}</a>
        </li>`;
  }

  secStr += `
  <section id="module_${id}">
    <h3>${key + " : " + magento_modules[key]}</h3>
  </section>
  `;
}

const loadModulesInfo = `
  <nav class="main-content-nav">
        <ul class="nav">
            ${liStr}           
        </ul>
    </nav>
    <section class="main-content">
           ${secStr}
    </section>
  `;
export default loadModulesInfo;
