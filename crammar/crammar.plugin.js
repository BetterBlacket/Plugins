/**
 * @name Chat Grammar
 * @authorId 3324853
 * @version 1.0.0
 * @description Autocorrects grammar sent in chat.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/crammar
 */

(function crammar1() {
  try {
    if (blacket && blacket.socket) {
      blacket.fix = async (text) => {
        return text;

        let resp = await fetch("https://orthographe.reverso.net/api/v1/Spelling", {
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            autoReplace: true,
            generateRecommendations: false,
            generateSynonyms: false,
            getCorrectionDetails: true,
            interfaceLanguage: "en",
            language: "eng",
            locale: "Indifferent",
            origin: "interactive",
            text
          }),
          method: "POST"
        }).then((r => r.json()));
        return resp.text || text;
      };
    } else setTimeout(crammar1, 1);
  } catch {
    setTimeout(crammar1, 1);
  }
});

(function crammar2() {
  try {
    if (blacket && blacket.socket && document.body.onkeydown) {
      document.body.removeEventListener('keydown');
      document.body.addEventListener("keydown", async (event) => {
        if (event.key !== "Enter") return;
        if (unsafeWindow.blacket.chat.timeout > Date.now()) return;

        let message = document.getElementById("#sms").value;
        if (!message || message === '' || message.length < 1) return;

        if (localStorage.getItem("chatColor")) unsafeWindow.blacket.socket.emit("chat", `${message.includes("<") || message.includes(">") ? message : `<${localStorage.getItem("chatColor")}> ${await unsafeWindow.blacket.fix(message)} </${localStorage.getItem("chatColor")}>`}`);
        else unsafeWindow.blacket.socket.emit('chat', await unsafeWindow.blacket.fix(message));

        if (unsafeWindow.blacket.user.perms.includes("*") || unsafeWindow.blacket.user.perms.includes("bypass_delay")) unsafeWindow.blacket.chat.timeout = Date.now();
        else unsafeWindow.blacket.chat.timeout = Date.now() + 1000;

        document.getElementById("#sms").value = "";
      })
    } else setTimeout(crammar2, 1);
  } catch {
    setTimeout(crammar2, 1);
  }
});
