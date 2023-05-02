/**
 * @name Amoled Plugin
 * @authorId 3324853
 * @version 1.0.0
 * @description A plugin required for the Amoled theme to function.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/amoled
 */

$(function amoled_1() {
  try {
    let rall = (elem, css, value) => {
      setInterval(() => 
        if (document.querySelector(elem)) document.querySelector(elem).style[css] = value;
      }, 25);
    };
    
    rall('input', 'backgroundColor', 'transparent')
  } catch {
    setTimeout(amoled_1, 1)
  }
});
