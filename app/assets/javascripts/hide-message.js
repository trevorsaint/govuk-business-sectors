function HideMessage(params) {
  this.container = params.container;
  this.button = this.container.querySelector('.govuk-transition-alert__hide');
  this.setupHideMessage();
}


HideMessage.prototype.setupHideMessage = function() {
  this.button.addEventListener('click', this.onButtonClick.bind(this), false);
};


HideMessage.prototype.onButtonClick = function() {
  this.hideContent();
};


HideMessage.prototype.hideContent = function() {
  this.container.style.display = "none";
};
