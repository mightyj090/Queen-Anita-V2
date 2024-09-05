//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349024953323";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1B0amIxV0g1RGJWMTZ4N29JbkowOEF2c01HTXJEY09WV0dxRWpyVkszST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTThtN3Rhc0xlSWJXZlNXajZsY2xDMkNyZWR0Y1ZjY0I1L0FlZkRicWlYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QWt0TXpsczh5VDNVclFSeDJzMURSVlpta3ZnREZQUHhLQ1RHZ2JyVUU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3VzlMUjhCWUxHWHFPQiswVWd1Tmp3ZzBrWGFZS2k1NnNQeDdGSmk0Q2dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCcXZqSzh1Wk1vNCtJaVdFZmNjclZsaGVGT3NsZk9QWXdNUk1xSTdQbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNM2RJeTljbjlQRi9oY0IwQ0pPbmsrdGtoNVhpajNsYVVDam55aFFJbUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pBMnVlQWRuN0VSd2tzN2YrQnM2S0Iyb05PRW9GcW1qNVdXenRIQm9Gaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dySjM4YnhwVGtPZXZMbzhLc2dlbW9uN2dEaXJwWDNTcDZtYzNKemRUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIxbXYxMzIyOHdiYS9wZHY5K1VSd1ZMbmIwMytacDJxbVlmaERxWHJLYWg3RFR0U1dBNnRPMVR0WGVMNUtMNnlRb2ttait5MGhScUN0K21oV1VBRmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IlhUeVVhemZMQ2U3b2JQN25hQmNNcWNxSmx3TUt1ZDdac2IvMXV3YTJWUk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAyNDk1MzMyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRDIyQzg3NkY3OEMwQkJGMERGMzU4Rjg3MzU3RDY1QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NTM3NDI3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZZWI4TXNHRlQzNnhlYnhTODg4VE1RIiwicGhvbmVJZCI6IjJjZDExMzE5LWE2Y2UtNDBmMi1iMDU1LWQ3ZTY2Mjc2ZWM1YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TnpmTDNHdGVEcm1uVzJTZGlzeUZIU2F5NWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2NQZTUzdGNUaThlM3MyVVhMMThBVGRHaXhzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY3WVZBUUVGIiwibWUiOnsiaWQiOiIyMzQ5MDI0OTUzMzIzOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im1pZ2h0eWp0diJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlNGdkpRR0VJTzU1cllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieVVYSHBRMm1BMVRLR2c4MkNYNnhKaGxyeTNHMFFHeE1mUnQ1c2ZIQngzTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibE9ZUDEyZ1YvYmpsQ3c2WWtoNG5xYkhiOG9ZbUNRa1RuTUptYWpOMUh1UzNWV0orV1FzditzcldtZTA2cnRSUkIyL2JrZStFbTRHMGNqcW44Y3E4QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1WanlzTDg1YWJLeG40S0thdkFBL0JKOFpWVkN4UlNXL2UyUGpwWExWcnMxOTlyQ0RDV2RnV0VMUGNvd2RtMVV5WXh6OVoyM0pEWWJLcEhSNS8zbGdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyNDk1MzMyMzoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbEZ4NlVOcGdOVXlob1BOZ2wrc1NZWmE4dHh0RUJzVEgwYmViSHh3Y2R6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTM3NDIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJvayJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
