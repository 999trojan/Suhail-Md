const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_49_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhXTk1ab0dEWUh4Y2VKWUZDNEt2allRY3BmLytscXZwSUpjYisxbDF6SUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndqZTRzRkt1UmhLclBDX2h6ZGdTVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDYyNTY1NDYtZGRmZS00MGI3LWE3NTQtZDFiM2ZjOTk4YThmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMTQwLFxuICAgICAgMTYwLFxuICAgICAgOTksXG4gICAgICAzOCxcbiAgICAgIDEzOSxcbiAgICAgIDE2MyxcbiAgICAgIDIwMyxcbiAgICAgIDE3MyxcbiAgICAgIDEwOSxcbiAgICAgIDkwLFxuICAgICAgOTksXG4gICAgICAyMDMsXG4gICAgICAxMDksXG4gICAgICAxODUsXG4gICAgICAyMzQsXG4gICAgICAyNDcsXG4gICAgICAxNjgsXG4gICAgICAxODQsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDIwNixcbiAgICAgIDEyMSxcbiAgICAgIDUzLFxuICAgICAgMjUzLFxuICAgICAgMjI4LFxuICAgICAgNDEsXG4gICAgICAyMTgsXG4gICAgICAyNixcbiAgICAgIDQ2LFxuICAgICAgMTI1LFxuICAgICAgNjEsXG4gICAgICAyMzUsXG4gICAgICAxMCxcbiAgICAgIDE0NCxcbiAgICAgIDE4NSxcbiAgICAgIDY5LFxuICAgICAgMjM2LFxuICAgICAgMTc3LFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFYM1A0RUxWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDg0MTgwNzM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUcm9qYW5cIixcbiAgICBcImxpZFwiOiBcIjIwOTY5MzUwNzA3MjE0OToyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYVRrODhERUplZHZyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImExdHlVVnBIbzg1WUJrZkZWMUdIdlc3djhJdGV5Um11K1RYY0tYcmMvakU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNy8rbjYxeUJHZ2NSYndLa2dTcUQ3NmhTUTVJM2JFOXZQMitqanl1NWdMaVVndFpXcitNaEs3QmdUVm5PY2o4R2ZJOWpkRGdaRVVBQ3FhTXo3U1FnQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSElsZS9tK0R5Yk9PRUJtVmE2VzBRdEd0OGxiTE5FUDFUbXEwbzVLam01OTVmMnRvdTEvQzlOSldiczdnUEFDczFLT3MrMWU0ZVJvdWVHL0ZFYTZ6Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA4NDE4MDczOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjg0MTg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjZ6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1NlpKcDE4eTluamxmVGxUckZGTndXWks0RmdxMFBja2UrU254VGxlWmg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3MTI5NTIwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjg0MTkyMTUwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
