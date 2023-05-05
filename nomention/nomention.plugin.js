/**
 * @name NoMention
 * @authorId 3324853
 * @version 1.0.0
 * @description Prevents chat mentions.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/nomention
 */

(function nomention1() {
  if (location.pathname !== '/chat') return;

  try {
    if (blacket && blacket.appendChat) {
      setInterval(() => {
        document.querySelectorAll('.styles__chatMessageMention___2Z1ZU-camelCase').forEach(n => {
          n.classList.remove('styles__chatMessageMention___2Z1ZU-camelCase');
          n.classList.add('styles__chatMessage___2Z1ZU-camelCase');
        });
      }, 50);
      
      let aud = window.Audio;
      window.Audio = function (url) {
        if (url === '/content/mention.ogg') return;
        return new aud(url);
      };
    } else setTimeout(nomention1, 1000);
  } catch {
    setTimeout(nomention1, 1000);
  }
});
