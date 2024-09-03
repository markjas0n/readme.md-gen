// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') { // Check if a license is selected
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`; // Return the badge URL
  }
  return ''; // Return an empty string if no license is selected
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') { // Check if a license is selected
    return `\n* [License](#license)\n`; // Return the link to the license section in the README
  }
  return ''; // Return an empty string if no license is selected
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') { // Check if a license is selected
    return `## License\nThis project is licensed under the ${license} license.`; // Return the license section content
  }
  return ''; // Return an empty string if no license is selected
}

