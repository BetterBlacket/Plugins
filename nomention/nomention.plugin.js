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
      blacket.appendChat = async (data, mentioned) => {
        let isatt = false;

        message = message.replace(/(?:http|https):\/\/([^";' ]+(\/|)|[^";' ]+\.(jpeg|jpg|png|webp|gif|mp4|webm|mov))/, (match, url) => {
          var ext = match.split('.')[match.split('.').length - 1];
          if ((ext === 'jpg') || (ext === 'jpeg') || (ext === 'png') || (ext === 'webp') || (ext === 'gif')) {
            isatt = true;
            return `<img style="margin: 10px; display: flex; break-after: always; line-break: anywhere; transform: translateY(7px); max-height: 20vh; max-width: auto;" src="/worker/proxy/${btoa(`https://${url}`)}" onerror="this.remove();">`
          } else if ((ext === 'webm') || (ext === 'mp4') || (ext === 'mov')) {
            isatt = true;
            return `<video style="margin: 10px; display: flex; break-after: always; line-break: anywhere; transform: translateY(7px); max-height: 40vh; max-width: auto; border: none; outline: none;" src="/worker/proxy/${btoa(`https://${url}`)}" onerror="this.parentElement.remove();" controls/>`
          } else return `<a style="color: lightblue;" href="${match}" target="_blank">${match}</a>`;
        });
        message = message.replace(/&lt;(gradient=\[(?:up|down|left|right|\d{1,3}deg)(?: |):(?: |)(?:(?:(?:black|lime|white|brown|magenta|cyan|turquoise|red|orange|yellow|green|blue|purple|\#[0-9a-fA-F]{6})(?:, |,| ,| , |)){2,7})\]|black|lime|white|brown|magenta|cyan|turquoise|red|orange|yellow|green|blue|purple|(\#[0-9a-fA-F]{6}))&gt;(.+?)&lt;\/([^&]+?)&gt;/g, (...args) => {
          if (args[1].split('=')[0] === 'gradient') {
            let grad = args[1].split('=')[1].slice(1, -1).split(',').join(', ').split(' ,').join(', ').split(' , ').join(', ').replaceAll(' ', '').slice(',');
            let colors = grad.split(':')[1].trim();
            let direction = grad.split(':')[0].trim();
            return `<span style="background: linear-gradient(${direction === 'up' ? 'to top' : direction === 'down' ? 'to bottom' : !direction.endsWith('deg') ? 'to ' + direction : direction}, ${colors}); display: inline-block; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">${args[3]}</span>`;
          } else return `<span style="color: ${args[1]};">${args[3]}</span>`;
        });
        message = message.replace(/\*\*\*([^\*]+)\*\*\*/g, (match, text) => {
          return `<b><i>${text}</i></b>`;
        });
        message = message.replace(/\*\*([^\*]+)\*\*/g, (match, text) => {
          return `<b>${text}</b>`;
        });
        message = message.replace(/\*([^\*]+)\*/g, (match, text) => {
          return `<i>${text}</i>`;
        });
        message = message.replace(/\~\~([^\~]+)\~\~/g, (match, text) => {
          return `<s>${text}</s>`;
        });
        message = message.replace(/\_\_([^\_]+)\_\_/g, (match, text) => {
          return `<u>${text}</u>`;
        });
        message = message.replace(/\[([^\]]+)\]/g, (match, blook) => {
          let lowerCaseBlooks = {};
          Object.keys(blacket.blooks).forEach((blook) => {
            lowerCaseBlooks[blook.toLowerCase()] = blacket.blooks[blook];
          });
          if (!lowerCaseBlooks[blook.toLowerCase()]) return match;
          return `<img loading="lazy" src="${lowerCaseBlooks[blook.toLowerCase()].image}" class="styles__chatEmoji___FT5aB-camelCase">`;
        });
        message = message.replace(/:(.+?):/g, (match, emoji) => {
          if (!blacket.emojis[emoji]) {
            for (let x of blacket.emojiNames)
              if ((':' + emoji + ':') === x.shortname) return x.emoji;
            return ':' + emoji + ':';
          }
          return `<img loading="lazy" src="${blacket.emojis[emoji].image}" class="styles__chatEmoji___FT5aB-camelCase">`;
        });
        try {
          message = twemoji.parse(message);
        } catch {}
        message = message.replace(/class="emoji"/g, 'class="styles__chatEmoji___FT5aB-camelCase"');
        chatContainer.maxScrollTop = chatContainer.scrollHeight - chatContainer.offsetHeight;
        var tem = document.querySelector('#chatContainer .styles__chatMessageContainer__G1Z4P-camelCase:last-child');
        if ((tem ? parseInt((tem.dataset || {
            userId: NaN
          }).userId) === data.user.id : true) && blacket.lastUser == data.user.id && blacket.lastTime + 1000 * 60 * 5 > data.time) {
          $(`#chatContainer .styles__chatMessageContainer__G1Z4P-camelCase:last-child`).append(`<text id="message-${data.id}" class="styles__chatMessage___2Z1ZU-camelCase">${message}</text>`);
          if (chatContainer.maxScrollTop - chatContainer.scrollTop <= chatContainer.offsetHeight) {
            let tempScrollInterval = setInterval(() => {
              chatContainer.scrollTop = chatContainer.scrollHeight
            }, 1);
            setTimeout(() => {
              clearInterval(tempScrollInterval)
            }, 250);
          }
          return;
        }
        blacket.lastUser = data.user.id;
        blacket.lastTime = data.time;
        let messageClass = "";
        let badges = "";
        if (data.user.badges.length > 0) {
          Object.keys(blacket.badges).forEach((badge) => {
            if (data.user.badges.includes(badge) || data.user.badges.includes("*")) badges += `<img src="${blacket.badges[badge].image}" class="styles__chatBadge___AZ1ZU-camelCase">`;
          });
        }
        if (data.user.color == "rainbow") messageClass = ` class="rainbow"`;
        let randomUsernameId = Math.random().toString(36).substring(2, 15);
        let randomAvatarId = Math.random().toString(36).substring(2, 15);
        $("#chatContainer").append(`<div class="styles__chatMessageContainer__G1Z4P-camelCase" data-user-id="${data.user.id}"><img id="${randomAvatarId}" class="styles__chatAvatar___RZQ83-camelCase" src="/content/blooks/Loading.png" onerror="this.onerror=null; this.src='/content/blooks/Error.png'"><text id="${randomUsernameId}" class="styles__chatName___F1Z4P-camelCase"><text${messageClass} style="filter: drop-shadow(0px 0px 10px); color: ${data.user.color};">${data.user.username} </text>${badges}</text><text id="message-${data.id}" data-user-id="${data.user.id}" style="margin-top: -32.5px;" class="styles__chatMessage${mentioned ? "Mention" : ""}___2Z1ZU-camelCase">${message}</text></div>`);
        $(`#${randomUsernameId}, #${randomAvatarId}`).click(() => {
          if (event.shiftKey) {
            $("#chatBox").val($("#chatBox").val() + `@${data.user.username} `);
            $("#chatBox").focus();
            return;
          }
          $("body").append(`<div class="arts__modal___VpEAD-camelCase"><div style="padding: 15px 100px 25px 17.5px; height: fit-content;" class="styles__container___3St5B-camelCase">
        <div id="closeButton" style="margin-right: 11.5px;right: 0;position: absolute; z-index: 15;" role="button" tabindex="0" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase">
            <div class="styles__shadow___3GMdH-camelCase"></div>
            <div class="styles__edge___3eWfq-camelCase" style="background-color: #1f1f1f;"></div>
            <div class="styles__front___vcvuy-camelCase styles__buttonInsideNoMinWidth___39vdp-camelCase" style="background-color: #1f1f1f;"><i class="fas fa-times" aria-hidden="true"></i></div>
        <div></div></div><div class="styles__headerLeft___1Hu3N-camelCase">
                <div class="styles__headerLeftRow___8vTJL-camelCase">
                    <div class="styles__headerBlookContainer___36zY5-camelCase" role="button" tabindex="0">
                        <div class="styles__blookContainer___36LK2-camelCase styles__headerBlook___DdSHd-camelCase"><img loading="lazy" src="${data.user.avatar}" style="filter: drop-shadow(0px 0px 5px);" draggable="false" class="styles__blook___1R6So-camelCase"></div>
                    </div>
                    <div class="styles__headerInfo___1oWlb-camelCase">
                        <div class="styles__headerBanner___3Uuuk-camelCase">
                            <img loading="lazy" src="${encodeURIComponent(data.user.banner)}" class="styles__headerBg___12ogR-camelCase" draggable="false">
                            <div class="styles__headerName___1GBcl-camelCase" style="color: ${data.user.color};">${data.user.username} </div>
                            <div class="styles__headerTitle___24Ox2-camelCase">${data.user.role}</div>
                        </div>
                    <div class="styles__levelBarContainer___1xi-9-camelCase">
                            <div style="background-color: #4f4f4f;" class="styles__levelBar___2SU0x-camelCase">
                                <div class="styles__levelBarInside___3FLAG-camelCase" style="transform: scaleX(0);"></div>
                            </div>
                            <div class="styles__levelStarContainer___7ABEf-camelCase">
                                <img loading="lazy" src="/content/levelStar.png" alt="Star" class="styles__levelStar___LHq_y-camelCase" draggable="false">
                                <div class="styles__levelStarText___2Myxg-camelCase">0</div>
                            </div>
                        </div></div>
                </div>
            </div></div></div>`);
          if (blacket.user.perms.includes("mute_users") || blacket.user.perms.includes("*")) $(".styles__container___3St5B-camelCase").append(`<div id="manageButton" style="margin-bottom: 20px;margin-right: 11.5px;right: 0;position: absolute; z-index: 15; bottom: 0;" role="button" tabindex="0" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase">
            <div class="styles__shadow___3GMdH-camelCase"></div>
            <div class="styles__edge___3eWfq-camelCase" style="background-color: #a21c19;"></div>
            <div class="styles__front___vcvuy-camelCase styles__buttonInsideNoMinWidth___39vdp-camelCase" style="background-color: #a21c19;"><i class="fas fa-users-cog" aria-hidden="true"></i></div>
        <div></div></div>`);
          $("#manageButton").click(() => {
            location = `/panel/users?name=${data.user.id}`;
          });
          let rainbow = false;
          let level = 0;
          let needed;
          let exp = data.user.exp;
          for (let i = 0; i <= 27915; i++) {
            needed = 5 * Math.pow(level, blacket.config.exp.difficulty) * level;
            if (exp >= needed) {
              exp -= needed;
              level++;
            }
          }
          if (data.user.color.toLowerCase() == "rainbow") $(".styles__headerName___1GBcl-camelCase").attr("class", `styles__headerName___1GBcl-camelCase rainbow`);
          else $(".styles__headerName___1GBcl-camelCase").attr("class", `styles__headerName___1GBcl-camelCase`);
          if (level >= 100) {
            if (!rainbow) $("body").append(`<style id="rainbow">.styles__levelBarInside___3FLAG-camelCase {background: linear-gradient(#fcd843, #fcd843 50%, #feb31a 50.01%, #feb31a);height: 100%;width: 100%;transform-origin: left center;animation: styles__levelBarRainbow___3FLAG-camelCase 2s linear infinite;}</style>`);
            rainbow = true;
          } else {
            $("#rainbow").remove();
            rainbow = false;
          }
          $(".styles__levelStarText___2Myxg-camelCase").html(level.toLocaleString());
          $(".styles__levelBarInside___3FLAG-camelCase").css("transform", `scaleX(${exp / needed})`);
          $("#closeButton").click(() => {
            $(".arts__modal___VpEAD-camelCase").remove();
          });
        });
        document.querySelector(`#message-${data.id}`).addEventListener("contextmenu", (e) => {
          e.preventDefault();

          $('body').append(`
            <div id="bb_contextmenu">
              <br>
              <br>
              <div class="mo" onclick="navigator.clipboard.writeText(document.querySelector('#message-${data.id}').innerHTML)">Copy Raw</div>
              <br>
              <br>
              <div class="mo" onclick="navigator.clipboard.writeText('${data.user.username}')">Copy Name</div>
              <br>
              <br>
              <div class="mo" onclick="blacket.socket.emit('request', Number('${data.user.id}'))">Send Trade</div>
            </div>
          `);

          $('#bb_contextmenu').css({
            fontFamily: `Nunito, sans-serif`,
            fontSize: `14px`,
            height: `40vh`,
            width: `15vw`,
            border: `4px solid rgb(38, 38, 38)`,
            backgroundColor: `rgb(47, 47, 47)`,
            position: `absolute`,
            borderRadius: `10px`,
            textAlign: `center`,
            color: `white`,
            overflow: `auto`,
            left: e.clientX,
            top: e.clientY,
            zIndex: `99999999`
          })

          addCSS(`
            .mo {
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 4vh;
              cursor: pointer;
              width: calc(10vw - 8px);
              height: 22px;
              background-color: #2f2f2f;
              /* border: 4px solid #2f2f2f;
              border-color: white;
              border-radius: 15px;*/
              color: white;
              line-height: 1px;
            }
          `)

          $('body').click((t) => {
            if (t.target.className === 'mo') return;
            $('body').unbind('click');
            $('#bb_contextmenu').remove();
          });
        });
        setTimeout(() => {
          $(`#${randomAvatarId}`).attr("src", data.user.avatar)
        }, 200);
        if (chatContainer.maxScrollTop - chatContainer.scrollTop <= chatContainer.offsetHeight) {
          let tempScrollInterval = setInterval(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight
          }, 1);
          setTimeout(() => {
            clearInterval(tempScrollInterval)
          }, 250);
        }
      };
    } else setTimeout(nomention1, 1000);
  } catch {
    setTimeout(nomention1, 1000);
  }
});
