// display dropdown menu on mouseover

function displayDropdownMenu(dropdownArea) {
  const dropdownStyle = dropdownArea;
  dropdownStyle.style.visibility = 'visible';
  dropdownStyle.style.padding = '12px';
  dropdownStyle.style.backgroundColor = 'white';
}

// hide dropdown menu when mouse leaves area

function hideDropdownMenu(dropdownArea) {
  const dropdownStyle = dropdownArea;
  dropdownStyle.style.visibility = 'hidden';
}

// create button and dropdown display

const loadDropdownMenu = (
  contentSection,
) => {
  const contentMenu = contentSection;
  contentMenu.innerHTML = `
    <div class ='dropdown'>
    <button id ='dropdownButton'>Button</button>
    <div id ='dropdownContent'>
      <a href='#' style = 'display: block'>Link 1</a>
      <a href='#' style = 'display: block'>Link 2</a>
      <a href='#' style = 'display: block'>Link 3</a>
    </div>
  </div>
  `;
  // define areas to activate menu

  const dropdownArea = document.getElementById('dropdownContent');
  const buttonStyle = document.getElementById('dropdownButton');  
  // upon page load, hide dropdown menu from view

  hideDropdownMenu(dropdownArea);
  // add event listeners to activation areas

  buttonStyle.addEventListener('mouseover', () => {
    displayDropdownMenu(dropdownArea);
  });

  dropdownArea.addEventListener('mouseover', () => {
    displayDropdownMenu(dropdownArea);
  });

  dropdownArea.addEventListener('mouseout', () => {
    hideDropdownMenu(dropdownArea);
  });
};

export { loadDropdownMenu }