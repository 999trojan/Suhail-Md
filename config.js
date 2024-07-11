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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_21_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTU0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSW9wOVNKM21yMDNyWXVienhWL1I4WTkyQjRra2gxMlo4cHBEd1ZoTkI1dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ2RmTmYzT0dTcWlsVkRNbFFjMTBBZ1wiLFxuICBcInBob25lSWRcIjogXCIyMjUzZWY2Yy0wZWI2LTRmOGYtYjJmOC0wMjQ4YzUwZjFmNTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgOTQsXG4gICAgICAxMTMsXG4gICAgICAyMjEsXG4gICAgICAxNzgsXG4gICAgICA5NSxcbiAgICAgIDIyOCxcbiAgICAgIDI5LFxuICAgICAgNTgsXG4gICAgICAyMDIsXG4gICAgICAxODQsXG4gICAgICAxNzIsXG4gICAgICAyMTksXG4gICAgICAxMzUsXG4gICAgICAxMzIsXG4gICAgICAxNTMsXG4gICAgICAxODYsXG4gICAgICA4MyxcbiAgICAgIDkwLFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDk2LFxuICAgICAgMTI3LFxuICAgICAgMjQ3LFxuICAgICAgMzksXG4gICAgICA2MCxcbiAgICAgIDYzLFxuICAgICAgMTUsXG4gICAgICA0NyxcbiAgICAgIDI0NixcbiAgICAgIDE0LFxuICAgICAgMTU2LFxuICAgICAgNDYsXG4gICAgICAxOTUsXG4gICAgICAxMyxcbiAgICAgIDExOCxcbiAgICAgIDU3LFxuICAgICAgNDIsXG4gICAgICA3MixcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKRFo1M1lINFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA4NDE4MDczOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHJvamFuXCIsXG4gICAgXCJsaWRcIjogXCIyMDk2OTM1MDcwNzIxNDk6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NUazg4REVQMlB2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMXR5VVZwSG84NVlCa2ZGVjFHSHZXN3Y4SXRleVJtdStUWGNLWHJjL2pFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFsUW9XRjBiQUFLZUtQSDZQbm96b3BPSTFTWTlWblp0b1kyUStLb0FCVHZLa0RmUmdCMENGaUtwOUtQa3Nmb2hmTWVQZHU1THFBeDdXVVA3UGd0NENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInYzck51RXdCWDk2aGxyUitHT1lvcjRYQ3kvR3RiT2RVaTdGMVBFTGlmUWpIVTlFd2oyRy9hUE1uTVdScW52QjRNYS9ybnRvT0l0VmI4dG0wOEdMb0RnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODQxODA3MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY4MjQ5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxldlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGV2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibURmWFpLRlBBYll2T1UyMVo3VkFnY2dNbkVkU2M3UnphUnBHc1NJcmo4OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzEyOTUyMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY4MjUwMTQ1OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
