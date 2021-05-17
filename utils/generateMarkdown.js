// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {
    return `[![License: MIT](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    return `https://opensource.org/licenses/` + license
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project is licensed under the following licenses:
  
  * [${license}](${renderLicenseLink(license)})`
  }
  return 'none'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
  
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

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions or want to see more projects use the links below:

  * GitHub: [${data.github}](https://github.com/${data.github}/)

  * Email: [${data.email}](mailto:${data.email})

  `;
}

module.exports = generateMarkdown;