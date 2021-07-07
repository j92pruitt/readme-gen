// If there is no license, return an empty string
function renderLicenseBadge(license) {
  badges = {
    "No License, all rights reserved." : "",
    "MIT License - simple and highly permisive." : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License - private use with some open source maintanence." : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "GNU GPLv3 License - keeps code open source." : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  };

  return badges[license];
};

// If there is no license, return an empty string
function renderLicenseLink(license) {
  links = {
    "No License, all rights reserved." : "",
    "MIT License - simple and highly permisive." : "https://opensource.org/licenses/MIT",
    "Mozilla Public License - private use with some open source maintanence." : "https://opensource.org/licenses/MPL-2.0",
    "GNU GPLv3 License - keeps code open source." : "https://www.gnu.org/licenses/gpl-3.0",
  }

  return links[license];
};

// If there is no license, return an empty string
function renderLicenseSection(license) {
  content = {
    "No License, all rights reserved." : "All rights resevered. Copyright (c) 2021",
    "MIT License - simple and highly permisive." : "Licensed under the MIT License",
    "Mozilla Public License - private use with some open source maintanence." : "Licensed under the Mozilla Public License",
    "GNU GPLv3 License - keeps code open source." : "Licensed under the GNU GPLv3 License",
  };

  return content[license]
};

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}  
${renderLicenseLink(data.license)}

## Questions
If you have any other questions you can find me on github at [${data.github}](https://www.github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
