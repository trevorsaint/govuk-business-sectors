// ============================================
// Business sector
// ============================================

function Sector(params) {
  this.container = params.container;
  this.checkboxes = this.container.querySelectorAll('input'); // Store NodeList in array
  this.facets = document.getElementById('facets');
  this.initCheckboxes();
  this.setupControls();
};


// Checkbox state
Sector.prototype.checkState = function() {
  var checked = false;
  for (var i=0; i < this.checkboxes.length; i++) {
    if (this.checkboxes[i].checked) {
      checked = true;
    }
  }
  return checked;
};


// Setup controls
Sector.prototype.setupControls = function() {

  // Checkboxes
  this.checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', this.onChange.bind(this, checkbox), false);
  }.bind(this));

};


// Checkbox change handler
Sector.prototype.onChange = function(checkbox) {

  event.preventDefault();

  if (checkbox.checked) {
    this.addFacet(checkbox);
    this.initCheckboxes();
  } else {
    this.removeFacet(checkbox);
    this.initCheckboxes();
  }

};


// Button HTML
Sector.prototype.addFacetHTML = function(checkbox, button) {

  var button = document.createElement('button');

  button.classList.add('govuk-facets__button');
  button.setAttribute('type', 'button');
  button.setAttribute('aria-controls', checkbox.value);
  button.setAttribute('aria-label', 'Remove filter ' + checkbox.nextElementSibling.innerText);
  button.addEventListener('click', this.onButtonClick.bind(this, checkbox), false);
  button.innerHTML = '<span class="govuk-facets__button-text">' + checkbox.nextElementSibling.innerText + '</span><span class="govuk-facets__button-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15,13.6L13.6,15L10,11.4L6.4,15L5,13.6L8.6,10L5,6.4L6.4,5L10,8.6L13.6,5L15,6.4L11.4,10L15,13.6z M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z"/></svg></span>'

  this.facets.appendChild(button);

};


// // Checkbox click handler
Sector.prototype.onButtonClick = function(checkbox, e) {

  var button = e.target;
  var checkboxValue = button.getAttribute('aria-controls');

  button.remove(); // Remove button

  if (checkboxValue) {
    var checkbox = document.querySelector("input[value='" + checkboxValue + "']")

    if (checkbox) {
      checkbox.checked = false; // Uncheck checkbox
    }
  }

  var multipleResultsList = document.querySelector(".govuk-business-sector__facets button")
  if (multipleResultsList == null) {
    document.querySelector(".govuk-business-sector__facets").classList.remove("govuk-business-sector__facets--is-visible")
  }
};


// Add button
Sector.prototype.addFacet = function(checkbox) {
  this.addFacetHTML(checkbox);
};


// Remove
Sector.prototype.removeFacet = function(checkbox) {
  var value = checkbox.value;
  var button = document.querySelector("button[aria-controls='" + value + "']");
  button.remove();
};


// Init checkboxes
Sector.prototype.initCheckboxes = function() {

  if (this.checkState(true)) {
    this.facets.classList.add('govuk-business-sector__facets--is-visible'); // If at least 1 checkbox is selected show container
  } else {
    this.facets.classList.remove('govuk-business-sector__facets--is-visible'); // If no checkboxes are selected hide container
  }

};
