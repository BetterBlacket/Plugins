/**
 * @name OldBadge
 * @authorId 3324853
 * @version 1.0.1
 * @description Revert Blacket badges to how they were before.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/oldbadge
 */

$(function oldbadge1() {
  const repAll = (oldsrc, newsrc) => {
    a = Array.from(document.querySelectorAll('img'));
    a = a.filter(a => a.src === 'https://blacket.org' + oldsrc);
    a.forEach(a => a.src = newsrc);
  };
  
  setInterval(() => {
    repAll('/content/badges/Plus.png', 'https://cdn.discordapp.com/emojis/1055535856754118716.webp?size=240&quality=lossless');
    repAll('/content/badges/Owner.png', 'https://cdn.discordapp.com/emojis/1055535750608867478.webp?size=240&quality=lossless');
    repAll('/content/badges/Artist.png', 'https://cdn.discordapp.com/emojis/1055535734611775498.webp?size=240&quality=lossless');
    repAll('/content/badges/Ankh.png', 'https://cdn.discordapp.com/emojis/1055535729339531324.webp?size=240&quality=lossless');
    repAll('/content/badges/Booster.png', 'https://cdn.discordapp.com/emojis/1055535739644940349.webp?size=240&quality=lossless');
    repAll('/content/badges/Verified.png', 'https://cdn.discordapp.com/emojis/1055535852018733056.webp?size=240&quality=lossless');
    repAll('/content/badges/Verified%20Bot.png', 'https://cdn.discordapp.com/emojis/1087450670694682624.webp?size=240&quality=lossless');
    repAll('/content/badges/Tester.png', 'https://cdn.discordapp.com/emojis/1055535846654230618.webp?size=240&quality=lossless');
    repAll('/content/badges/Staff.png', 'https://cdn.discordapp.com/emojis/1055535841528778854.webp?size=240&quality=lossless');
    repAll('/content/badges/OG.png', 'https://cdn.discordapp.com/emojis/1055535745407914004.webp?size=240&quality=lossless');
    repAll('/content/badges/Big%20Spender.png', 'https://cdn.discordapp.com/emojis/1087450629577904189.webp?size=240&quality=lossless');
  }, 25);
});
