// TODO: render a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  switch (license){
    case 'MIT': return '[shields.io](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache-v2': return '[shields.io](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL-v3': return '[shields.io](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
};

// TODO: render a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  switch (license) {
    case 'MIT': return ('https://opensource.org/licenses/MIT'); 
    case 'Apache-v2': return ('https://opensource.org/licenses/Apache-2.0');
    case 'GPL-v3': return ('https://www.gnu.org/licenses/gpl-3.0');
  }

};

// TODO: render a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') return '';

  return `## License
  ${license}: ${renderLicenseLink(license)}`
};
// table of contents start
//function renderTableOfContents()
// table of contents end

// description start
function renderDescription(description) {
  return `## Description
  ${description}`;
};
// description end

// link start 
function renderLink(link) {
  if (!link) return '';
  return `## Link to Project
  ${link}`
};
// link end

// languages start
function renderLanguages(languages) {
  if (!languages) return '';
  return `## Languages Used
  ${languages.map(language => language).join(', ')}`
};
// langueages end

// installation start
function renderInstall (installation){
  if (!installation) return '';
  return `## Installation Steps
  ${installation}`
  };
// installation end

//credits start
function renderCredits (credits) {
  if (!credits) return '';
  return `## Credits
  ${credits}`
};
//credits end

// contact start
function renderContact (contact) {
  if (!contact) return '';
  return `## Questions
  If you have any questions contact ${contact}`
};




// TODO: create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  
  ${renderDescription(data.description)}
  ${renderLink(data.link)}
  ${renderLanguages(data.languages)}
  ${renderInstall(data.installation)}
  ${renderCredits(data.credits)}
  ${renderLicenseSection(data.license)}
  ${renderContact(data.contact)}
  
`;
}

module.exports = generateMarkdown;

