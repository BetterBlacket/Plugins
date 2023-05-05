/**
 * @name NoMention
 * @authorId 3324853
 * @version 1.1.1
 * @description Prevents chat mentions.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/nomention
 */

$(function nomention1() {
  if (location.pathname !== '/chat') return; // minichat doesn't have mention support

  try {
    if (blacket && blacket.appendChat) {
      addCSS(`
        .styles__chatMessageMention___2Z1ZU-camelCase {
          background-color: transparent;
        }
      `); // this is a native betterblacket function
      
      let aud = unsafeWindow.Audio; // create a clone of the audio constructor.
      unsafeWindow.Audio = function (url) {
        if (url === '/content/mention.ogg') return {
          play: () => null // send false function to client
        };
        return new aud(url); // using the clone of the audio constructor.
      };
    } else setTimeout(nomention1, 1000);
  } catch {
    setTimeout(nomention1, 1000);
  }
});
