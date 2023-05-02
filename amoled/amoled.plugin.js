/**
 * @name Amoled Plugin
 * @authorId 3324853
 * @version 1.0.0
 * @description A plugin required for the Amoled theme to function.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/amoled
 */

let rall = (elem, css, value) => {
  setInterval(() => {
    if (document.querySelectorAll(elem).length) Array.from(document.querySelectorAll(elem)).forEach(t => t.style[css] = value);
  }, 25);
};
    
rall('input', 'backgroundColor', 'transparent');
