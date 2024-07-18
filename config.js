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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708418073";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_39_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzMXlzaDk5eG0wOGFmTk53OTRGM0RwTitwT1dVQTlKNVI3SVVGRHBFNklZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLWlVGbzEtM1IxQ21oeHNTUnRnTHR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1NzM3ZTBmLTFkYzUtNDljMy1hMmQ4LTMxNTI1MjMxNmMzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAxOTksXG4gICAgICAyNDcsXG4gICAgICA1NSxcbiAgICAgIDE4NSxcbiAgICAgIDIxNCxcbiAgICAgIDE5MCxcbiAgICAgIDEwMixcbiAgICAgIDQ5LFxuICAgICAgODEsXG4gICAgICA5NyxcbiAgICAgIDg0LFxuICAgICAgMjAsXG4gICAgICAxNjksXG4gICAgICAxNjMsXG4gICAgICAxNjgsXG4gICAgICAyNDgsXG4gICAgICAyMDUsXG4gICAgICAyMjQsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAyNDgsXG4gICAgICAxODYsXG4gICAgICAxOTEsXG4gICAgICAzMixcbiAgICAgIDIxNyxcbiAgICAgIDEzMixcbiAgICAgIDE5LFxuICAgICAgMTU0LFxuICAgICAgMTY2LFxuICAgICAgMTkxLFxuICAgICAgMTI2LFxuICAgICAgMjQsXG4gICAgICAyMyxcbiAgICAgIDEzNSxcbiAgICAgIDE3LFxuICAgICAgMTcsXG4gICAgICAyMDAsXG4gICAgICAxNTgsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCR0RLOVlZM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA4NDE4MDczOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHJvamFuXCIsXG4gICAgXCJsaWRcIjogXCIyMDk2OTM1MDcwNzIxNDk6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lUazg4REVNZSszclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMXR5VVZwSG84NVlCa2ZGVjFHSHZXN3Y4SXRleVJtdStUWGNLWHJjL2pFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZWd0s3cnNMcklFTlE5V0d0alltYzJqTHNqUjdTTGpQTjNxSC9EMmgzaGNISGxTM1JNTkJsZFdBUkRqV2ZDZFpjTytqbHVvcy9jbjA1VkFzZ1dZRkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImp3eTg0WGtYV1ZWM09XTmxvT05rLzFmbEQ3YVJxZDl1bGhLZVpmRWsyUDRORlREKzQwMGJkM0ord2k0MW5nbkxMWTFSU2NERFFvVklTWUlURENCWkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODQxODA3MzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIxMjc0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUo2MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjYyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmVkMXAwRlU3bEZVbWtOTFIyMmQ2MFVTY0J6ZVhPR04wMGpQd1cybUN2TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzEyOTUyMDYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3Njc3MzA1NjBcIn0iCn0"
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
