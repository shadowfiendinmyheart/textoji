import readline from "readline";
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { NewMessage } from "telegram/events";
import { _parseMessageText } from "telegram/client/messageParse";

import { transformText } from "./src/main";
import { sanitizedConfig } from "./src/config";

const config = sanitizedConfig;

const apiId = Number(config.API_ID);
const apiHash = config.API_HASH;
const stringSession = new StringSession(config.STRING_SESSION); // fill this later with the value from session.save()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () =>
      new Promise((resolve) => rl.question("Please enter your number: ", resolve)),
    password: async () =>
      new Promise((resolve) => rl.question("Please enter your password: ", resolve)),
    phoneCode: async () =>
      new Promise((resolve) =>
        rl.question("Please enter the code you received: ", resolve),
      ),
    onError: (err) => console.log(err),
  });

  console.log("You should now be connected.");
  console.log(client.session.save()); // Save this string to avoid logging in again

  client.addEventHandler(
    async (event) => {
      try {
        const inputChat = await event.getInputChat();

        const oldMessage = event.message.message;
        const messageId = event.message.id;
        const [newMessage, entities] = await _parseMessageText(
          client,
          transformText(oldMessage),
          "markdownv2",
        );
        await client.invoke(
          new Api.messages.EditMessage({
            peer: inputChat, // @thedawnisyourenemy
            id: messageId,
            message: newMessage,
            entities: entities,
          }),
        );
      } catch (error) {
        console.log("err", error);
      }
    },
    new NewMessage({ outgoing: true }),
  );
})();
