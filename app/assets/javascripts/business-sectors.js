// ============================================
// Togggle business sectors
// ============================================

function Toggle(params) {
  this.container = params.container;
  this.toggleShowLabel = 'show all business sectors';
  this.toggleHideLabel = 'hide all business sectors';
  this.initToggle();
};


Toggle.prototype.initToggle = function() {
  this.container.setAttribute('aria-expanded', 'false');
  this.container.addEventListener('click', this.onClick.bind(this), false);
};


Toggle.prototype.onClick = function(event) {

  event.preventDefault();

  var id = this.container.getAttribute('aria-controls'); // Get ID from ARIA attribute
  var content = document.getElementById(id)

  if (content.classList.contains('js-hidden')) {
    this.container.setAttribute('aria-expanded', 'true');
    this.container.textContent = this.toggleHideLabel;
    content.classList.remove('js-hidden');
  } else {
    this.container.setAttribute('aria-expanded', 'false');
    this.container.textContent = this.toggleShowLabel;
    content.classList.add('js-hidden');
  }

};



// ============================================
// Choose business sectors
// ============================================

function Sectors(params) {
  this.container = params.container;
  this.checkboxes = this.container.querySelectorAll('input'); // Store NodeList in array
  this.facets = document.getElementById('facets');
  this.group = this.facets.querySelector('.govuk-facets__group');
  this.initCheckboxes();
  this.setupControls();
};


// Checkbox state
Sectors.prototype.checkState = function() {
  var checked = false;
  for (var i=0; i < this.checkboxes.length; i++) {
    if (this.checkboxes[i].checked) {
      checked = true;
    }
  }
  return checked;
};


// Setup controls
Sectors.prototype.setupControls = function() {

  // Checkboxes
  this.checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', this.onChange.bind(this, checkbox), false);
  }.bind(this));

};


// Checkbox change handler
Sectors.prototype.onChange = function(checkbox) {

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
Sectors.prototype.addFacetHTML = function(checkbox, button) {

  var button = document.createElement('button');

  button.classList.add('govuk-facets__button');
  button.setAttribute('type', 'button');
  button.setAttribute('aria-controls', checkbox.id);
  button.setAttribute('aria-label', 'Remove filter ' + checkbox.nextElementSibling.innerText);
  button.addEventListener('click', this.onButtonClick.bind(this, checkbox), false);
  button.innerHTML = '<span class="govuk-facets__button-text">' + checkbox.nextElementSibling.innerText + '</span><span class="govuk-facets__button-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15,13.6L13.6,15L10,11.4L6.4,15L5,13.6L8.6,10L5,6.4L6.4,5L10,8.6L13.6,5L15,6.4L11.4,10L15,13.6z M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z"/></svg></span>'

  this.group.appendChild(button);

};


// // Checkbox click handler
Sectors.prototype.onButtonClick = function(checkbox, e) {

  var button = e.target;
  var checkbox = button.getAttribute('aria-controls');

  document.getElementById(checkbox).checked = false; // Uncheck checkbox
  button.remove(); // Remove button

  this.initCheckboxes();

};


// Add button
Sectors.prototype.addFacet = function(checkbox) {
  this.addFacetHTML(checkbox);
};


// Remove
Sectors.prototype.removeFacet = function(checkbox) {
  var id = checkbox.id;
  var button = document.querySelector('[aria-controls=' + id + ']');
  button.remove();
};


// Init checkboxes
Sectors.prototype.initCheckboxes = function() {

  if (this.checkState(true)) {
    this.facets.classList.add('govuk-facets--is-visible'); // If at least 1 checkbox is selected show container
  } else {
    this.facets.classList.remove('govuk-facets--is-visible'); // If no checkboxes are selected hide container
  }

};
