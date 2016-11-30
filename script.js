function setColor(element, pedalSelector, cssSelector) {
  let pedal = document.querySelector(pedalSelector);
  let colorValue = document.querySelector(cssSelector + " code");
  let value = element.value;

  pedal.style.setProperty('--pedal-background', value);
  colorValue.textContent = colorValue.textContent.replace(/: #[0-9a-fA-F]*/g, ': ' + value);
}

function setSize(element, pedalSelector, cssSelector, property) {
  let pedal = document.querySelector(pedalSelector);
  let colorValue = document.querySelector(cssSelector + " code");
  let value = element.value;

  pedal.style.setProperty(property, value+"px");
  colorValue.textContent = colorValue.textContent.replace(new RegExp(`${property}: [0-9]*px`), `${property}: ${value}px`);
}
