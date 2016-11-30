function setColor(element, pedalSelector, cssSelector) {
  let pedal = document.querySelector(pedalSelector);
  let colorValue = document.querySelector(cssSelector + " code");
  let value = element.value;

  pedal.style.setProperty('--pedal-background', value);
  colorValue.textContent = colorValue.textContent.replace(/: #[0-9a-fA-F]*/g, ': ' + value);
}
