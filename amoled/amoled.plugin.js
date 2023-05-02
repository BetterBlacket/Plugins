/**
 * @name Amoled Plugin
 * @authorId 3324853
 * @version 1.0.0
 * @description A plugin required for the Amoled theme to function.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/amoled
 */

let rall = (elem, css, value) => {
  setInterval(() => {
    if (document.querySelectorAll(elem).length) {
      Array.from(document.querySelectorAll(elem)).forEach(t => t.style[css] = value);
    };
  }, 25);
};
    
rall('input', 'backgroundColor', 'transparent');
rall('.styles__front___vcvuy-camelCase', 'backgroundColor', '#222222');
rall('.styles__edge___3eWfq-camelCase', 'backgroundColor', '#111111');
rall('.styles__front___vcvuy-camelCase', 'color', '#727272');
rall('.sexycontainer3', 'backgroundColor', '#242424');
rall('.sexycontainer', 'backgroundColor', '#222222');
rall('.snipegui', 'backgroundColor', '#242424');
rall('.snipegui', 'border', 'none');
rall('#chatDiv', 'backgroundColor', '#242424');
rall('#chatDiv', 'border', 'none');
