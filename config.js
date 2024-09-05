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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0U4a3U5cVhaSjBydnBINmcvbG9pNmpzdk9iZGhPRm1TNU9KYnVDWnQwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2lrMG9ueC9ybXc5MlJMV1pvYUZpLzUzTWxHRzlzbUNmRjliVUpHTjUxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSkg0TTB6bmV2V2hHV0lGWVNsNTZSWnFBN093QU4vU2ZvdlpVV2xJVkZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMWkvYkpoNUNMTnlyVlNMTGIycHBEWWt3NngwQkdQejduS3UvVTJBaHlVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJS0N2T2s0ek9Sbld6U2R1bXpmbWR3ZkYrYytleVVKOHdBTGNwTTlma2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY1RW1mUHRRa3o2WjlZQm95ZzdzaU9uM1Bkb3Nqd1g4cXMrVDJoSHNVd0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0grcnpobHN3QkhVNjlHTzRETkk2dUpXb3dENlNCZUdLS3FvY2hCNUowMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFltY1E0SkIwZS9YcGlPM24yZVdPTjhmaWVPSHpWdnVoeTVXamlxWHZrOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill1NnlJRGlsTXc4N0NLVG4xMDNUQyt1aGRWb2FFTzYxVDN0WFpRb1E1bE0zZk5DOFBwcWFvdVBUVXN5UDFXUGxkSVBWTGxuVUNEdmpoajdGZy9BU0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiI5OThMYVdHNkxxWFRvSTdBMjNaTXBIZXlncmVDWkJRY29ZZXI0aWJMK09jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMjQ5NTMzMjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTZGQkM2RUIwODE2ODY1ODAxMzNGMDNFODAwNTBCNjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTU0NzMwNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZTJHSW5Dak9SYml2UUJuMkw4ZXlsdyIsInBob25lSWQiOiJlZDVjNzRkNC04ZDE4LTQ2NDItYTBkMi01NjY3NDBkMWY1YTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG52VkJHNEdkbXJtb3FDTlliK1B6cG9MeTFzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBoejV6MjNXT0NIcFNkUjBHeEUzek1HazdJTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMOTVCRFFSUCIsIm1lIjp7ImlkIjoiMjM0OTAyNDk1MzMyMzoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtaWdodHlqdHYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lRnZKUUdFSm1HNTdZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlVWEhwUTJtQTFUS0dnODJDWDZ4SmhscnkzRzBRR3hNZlJ0NXNmSEJ4M009IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFmL0FrZmxTL05KQ0pyUUdVZ0YyWVRoWXBDN0VRTWpOemw4aVVKWHVBYmpjZHFIbFMrRmxPU3NXZk5malRBNVQwRlVSWjFGNlR4K0h4Q2dCSGxzZkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0SkxiVTkxSzlPZkhJOE9LMDdUcFFOZ2RXVDZpNTJyLzROYjM1RmlyQ2NJTzRiTnRPT1g2TjZoTGVLbUFlblZiTjhKQ2R1L1pHZ0dLVFk3NktDQTZBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjQ5NTMzMjM6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2xGeDZVTnBnTlV5aG9QTmdsK3NTWVphOHR4dEVCc1RIMGJlYkh4d2NkeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTU0NzMwMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCb2sifQ=="
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
