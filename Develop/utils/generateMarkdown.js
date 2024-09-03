// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') { // Check if a license is selected
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`; // Return the badge URL
  }
  return ''; // Return an empty string if no license is selected
}

