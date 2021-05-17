// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === 'MIT') {
//     return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
//   } else if(license === 'Apache 2.0') {
//     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
//   } else if(license === 'BSD 3-Clause') {
//     return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
//   }  else if(license === 'GNU GPL v3') {
//     return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
//   }  else if(!license) {
//     return '';
//   };
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license.license === 'MIT') {
//     return '';
//   } else if(license.license === 'Apache 2.0') {
//     return '';
//   } else if(license.license === 'BSD 3-Clause') {
//     return '';
//   }  else if(license.license === 'GNU GPL v3') {
//     return '';
//   }  else if(!license) {
//     return '';
//   };
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions or want to see more projects use the links below:

  GitHub: [${data.github}](https://github.com/${data.github}/)

  Email: [${data.email}](mailto:${data.email})

  `;
}

module.exports = generateMarkdown;