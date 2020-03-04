// ============================================
// Utilities
// ============================================

function Util () {};


// Class manipulation functions
Util.hasClass = function(el, className) {
	if (el.classList) return el.classList.contains(className);
	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};


Util.addClass = function(el, className) {
	var classList = className.split(' ');
 	if (el.classList) el.classList.add(classList[0]);
 	else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
 	if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};


Util.removeClass = function(el, className) {
	var classList = className.split(' ');
	if (el.classList) el.classList.remove(classList[0]);
	else if(Util.hasClass(el, classList[0])) {
		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
		el.className=el.className.replace(reg, ' ');
	}
	if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};


Util.toggleClass = function(el, className, bool) {
	if(bool) Util.addClass(el, className);
	else Util.removeClass(el, className);
};


Util.setAttributes = function(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};


// Misc
Util.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};



// ============================================
// Filters
// ============================================

(function() {


  var Filter = function(element) {
    this.element = element;
    this.html = document.getElementsByTagName('html')[0];
    this.filter = document.getElementsByClassName('filters')[0];
    this.trigger = document.querySelectorAll('[aria-controls="' + this.element.getAttribute('id') + '"]')[0];
    this.close = this.element.getElementsByClassName('filters__close')[0];
    this.continue = this.element.getElementsByClassName('filters__continue')[0];
    this.selectedTrigger = false;
    initFilter(this);
  };


  function initFilter(filter) {

    // Set initial state of filters
    filter.element.setAttribute('aria-hidden', 'true');

    // Event listeners
    filter.trigger.addEventListener('click', function() {toggleFilter(filter)});
    filter.close.addEventListener('click', function() {toggleFilter(filter)});
    filter.continue.addEventListener('click', function() {toggleFilter(filter)});
    window.addEventListener('keyup', function() {onKeyUp(filter)});

  };


  // Toggle filter
  function toggleFilter(filter) {

    var status = (filter.element.getAttribute('aria-hidden') == 'true') ? 'close' : 'open';

    if(status == 'close') {
      filter.element.setAttribute('aria-hidden', 'false');
      filter.html.classList.add('govuk-template--no-scroll');
    } else {
      filter.element.setAttribute('aria-hidden', 'true');
      filter.html.classList.remove('govuk-template--no-scroll');
    }

  };


  // Close on 'Esc' key press
  function onKeyUp(filter) {

    var status = (filter.element.getAttribute('aria-hidden') == 'true') ? 'close' : 'open';

    // Filter must be open initially for this to execute
    if (status == 'close') return;

    if ( event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {
      toggleFilter(filter, 'close');
    };

  };


  // Init object
  var filter = document.getElementsByClassName('filters');

  if( filter.length > 0 ) {
    for( var i = 0; i < filter.length; i++) {
      (function(i){
        new Filter(filter[i]);
      })(i);
    }
  }

})();



// ============================================
// Quantity check
// ============================================

function checkQuantity() {

  var button = document.querySelector('.filters__toggle');
  var facet = document.querySelectorAll('.govuk-facets__button').length;

  if (facet >= 1) {
    button.textContent = 'Show filter (' + facet + ')';
  } else {
    button.textContent = 'Show filter';
  }

};



// ============================================
// Business sector
// ============================================

function Sector(params) {
  this.container = params.container;
  this.checkboxes = this.container.querySelectorAll('input'); // Store NodeList in array
  this.facets = document.getElementById('facets');
  this.selected = facets.querySelector('.filters__selected-content');
  this.filtersToggle = document.querySelector('.filters__toggle');
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
    checkbox.addEventListener('change', this.onCheckboxChange.bind(this, checkbox), false);
  }.bind(this));

};


// Checkbox change handler
Sector.prototype.onCheckboxChange = function(checkbox) {

  event.preventDefault();

  if (checkbox.checked) {
    this.addFacet(checkbox);
    this.initCheckboxes();
  } else {
    this.removeFacet(checkbox);
    this.initCheckboxes();
  }

  checkQuantity();

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

  this.selected.appendChild(button);

};


// Checkbox click handler
Sector.prototype.onButtonClick = function(checkbox, e) {

  var button = e.target;
  var checkboxValue = button.getAttribute('aria-controls');

  button.remove(); // Remove button

  checkQuantity();

  if (checkboxValue) {
    var checkbox = document.querySelector("input[value='" + checkboxValue + "']")

    if (checkbox) {
      checkbox.checked = false; // Uncheck checkbox
    }
  }

  var multipleResultsList = document.querySelector(".filters__selected button");

  if (multipleResultsList == null) {
    document.querySelector('.filters__selected').classList.remove('filters__selected--is-visible');
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
    this.facets.classList.add('filters__selected--is-visible'); // If at least 1 checkbox is selected show container
  } else {
    this.facets.classList.remove('filters__selected--is-visible'); // If no checkboxes are selected hide container
  }

};



// ============================================
// Accordion
// ============================================

(function() {


  var Accordion = function(element) {
    this.element = element;
    this.items = element.getElementsByClassName('js-accordion__item');
    this.showClass = 'accordion__item--is-open';
    this.initAccordion();
  };


  Accordion.prototype.initAccordion = function() {

    // Set initial ARIA attributes
    for( var i = 0; i < this.items.length; i++) {
      var button = this.items[i].getElementsByTagName('button')[0],
        content = this.items[i].getElementsByClassName('js-accordion__panel')[0],
        isOpen = Util.hasClass(this.items[i], this.showClass) ? 'true' : 'false';
      Util.setAttributes(button, {'aria-expanded': isOpen, 'aria-controls': 'accordion-content-'+i, 'id': 'accordion-header-'+i});
      Util.addClass(button, 'js-accordion__trigger');
      Util.setAttributes(content, {'aria-labelledby': 'accordion-header-'+i, 'id': 'accordion-content-'+i});
    };

    // Listen for events
    this.initAccordionEvents();

  };


  Accordion.prototype.initAccordionEvents = function() {

    var self = this;

    this.element.addEventListener('click', function(event) {
      var trigger = event.target.closest('.js-accordion__trigger');

      // Check index to make sure the click didn't happen inside a children accordion
      if( trigger && Util.getIndexInArray(self.items, trigger.parentElement) >= 0) self.triggerAccordion(trigger);
    });

  };


  Accordion.prototype.triggerAccordion = function(trigger) {

    var self = this;
    var bool = (trigger.getAttribute('aria-expanded') === 'true');

    this.toggleAccordion(trigger, bool);

  };


  Accordion.prototype.toggleAccordion = function(trigger, bool) {
    var self = this;
    var item = trigger.closest('.js-accordion__item');
    var content = item.getElementsByClassName('js-accordion__panel')[0];
    var ariaValue = bool ? 'false' : 'true';

    if (!bool) Util.addClass(item, this.showClass);
    trigger.setAttribute('aria-expanded', ariaValue);
    self.resetContentVisibility(item, content, bool);

  };


  Accordion.prototype.resetContentVisibility = function(item, content, bool) {
    Util.toggleClass(item, this.showClass, !bool);
  }


  // Initialize the Accordion objects
  var accordions = document.getElementsByClassName('js-accordion');

  if( accordions.length > 0 ) {
    for( var i = 0; i < accordions.length; i++) {
      (function(i) {
        new Accordion(accordions[i]);
      })(i);
    }
  }


})();
