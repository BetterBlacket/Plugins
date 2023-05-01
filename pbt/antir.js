/**
 * @name AntiRemove
 * @authorId 3324853
 * @version 1.0.0
 * @description I cannot be removed.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/pbt
 */

setInterval(() => {
  document.querySelectorAll('.plugin').forEach(a => a.remove());
}, 100);
