import { Bot, Context, InlineKeyboard, Keyboard } from "grammy";
import fs from "fs/promises"
import { writeFile, createWriteStream } from "fs";
import { Readable } from "stream";
import { callbackify } from "util";
import { join } from "path";



const bot = new Bot("6992413948:AAH61ybdY3OyrmgKw0rhFxJawVoXq2ksTnw");

bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "list", description: "shows the database" },
  { command: "add", description: "adds a note" },
]);


let numberindicator;
let notes;
let indicatorNumber;
let indicatoText;
let flag = 0;

bot.command("start", (ctx) => ctx.reply("дабро пожаловать что вы хотите сделать"));

async function getfiledatabase() {
  let fileContent = await fs.readFile('./test/database', { encoding: "utf-8" });
  return fileContent.split("\n");
}

async function indicator() {
  notes = await getfiledatabase();
  if (notes == '') {
    numberindicator = 1;
  }
  else {
    let id;
    id = notes.length;
    id = notes[id - 1];
    id = id.split(":")[0];
    numberindicator = +id[0] + 1;
    console.log(numberindicator);
  }
}


bot.command("list", async (ctx) => {
  notes = await getfiledatabase();
  //indicator();

  for (let i = 0; i < notes.length; i++) {
    let noteId = notes[i].split(":")[0];
    let noteText = notes[i].split(":")[1];
    const inlineKeyboard = new InlineKeyboard()
      .text("Delete", "D_" + noteId)
      .text("Edit", "E_" + noteId)

    await ctx.reply(`ваша заметка ${noteText}`, {
      reply_markup: inlineKeyboard
    });
  }
});

bot.on("callback_query:data", async (ctx) => {
  notes = await getfiledatabase();
  indicatorNumber = ctx.callbackQuery.data.split("_")[1];
  indicatoText = ctx.callbackQuery.data.split("_")[0];
  if(indicatoText == "D"){
    let noteId;
    for(let i = 0; i < notes.length; i++){
      noteId = notes[i].split(":")[0];
      noteId = +noteId;
      indicatorNumber = +indicatorNumber
      if(indicatorNumber == noteId){
        notes.splice(i, 1);
         fs.writeFile("./test/database", notes.join("\n"));
        ctx.reply("ok");
        ctx.deleteMessage()
        break;
      }
    }
  }
 if(indicatoText == "E"){
   ctx.reply("запишите новую заметку.");
   flag = 1
 }
  
})

bot.command("add", (ctx) => ctx.reply("запишите вашу заметку ", flag = 2))

bot.on("message", async (ctx) => {
  let text = ctx.msg.text;
  notes = await getfiledatabase();
  if(flag == 1){
    let noteId;
    for(let i = 0; i < notes.length; i++){
      noteId = notes[i].split(":")[0];
      if(+indicatorNumber == +noteId){
        let content = indicatorNumber+ ": " + text;
        notes.splice(i, 1, content);
        console.log(content);
        fs.writeFile("./test/database", notes.join("\n"));
        ctx.reply("ok");
        
      }
    }
  }
  if(flag == 2){
    await indicator(); 
    if(numberindicator == 1){
      fs.appendFile("./test/database/", `${numberindicator}: ${text}`)
    ctx.reply("ok");
     flag = 0;;
    }
    else{
    fs.appendFile("./test/database/", `\n${numberindicator}: ${text}`)
    ctx.reply("ok");
     flag = 0;;
    }
    }
})

bot.start(); 