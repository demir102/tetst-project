// import { Bot, Context, InlineKeyboard, Keyboard } from "grammy";
// import {writeFile,createWriteStream} from "fs";
// import { Readable } from "stream";


//  bot.command("start", (ctx) => ctx.reply("пожалуста прешли мне свой mil."));

//  bot.on("message", async (ctx) => {
//      const message = ctx.message;

//      console.log(message)
//    })

// bot.command("test", async (ctx) => {
//     console.log(ctx)
// });
// bot.hears("привет", async (ctx) => {ctx.reply("привет")});

// bot.hears("ping", async (ctx) => {
    
//     await ctx.reply("*pong*", {
     
//       reply_parameters: { message_id: ctx.msg.message_id },
//       parse_mode: "MarkdownV2"
//     });
//   })

//   bot.hears("ping", async (ctx) => {
    
//     await ctx.reply("<strong>pong</strong>", {
     
//       reply_parameters: { message_id: ctx.msg.message_id },
//       parse_mode: "HTML"
//     });
//   })

//   bot.command("for", async (ctx) => {
//     await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
//       // Make Telegram clients automatically show a reply interface to the user.
//       reply_markup: { force_reply: true },
//       reply_markup: inlineKeyboard
//     });
//   });

//   bot.on("edited_message", async (ctx) => {
//     // Get the new, edited, text of the message.
//     const editedText = ctx.editedMessage.text;
//     console.log(editedText)
//   });
//   const inlineKeyboard = new InlineKeyboard()
//   .text("1", "2024")
//   .text("3", "2020")
//   .text("4", "2220")
//   .text("5", "2015")
//   .row()
//   .text("31","1999");

//   bot.hears("опросник", async (ctx) => {
//     ctx.reply("какой сечас год", {
     
//       reply_markup: inlineKeyboard
//     });
//   })

    // bot.on("callback_query:data",async (ctx) =>{
    //   if(ctx.callbackQuery.data == "1"){
    //     ctx.reply("правилно")

    //   }
    //   else{
    //     ctx.reply("не правильно") 
    //   }
    // })
  
//   const keyboard = new Keyboard()
//   .text("2023")
//   .text("2024")  
//   .text("2022")
//   .resized()
//   .persistent();

//   bot.hears("опросник", async (ctx) => {
//     ctx.reply("какой сечас год", {
     
//       reply_markup: keyboard
//     });
//   });

//   bot.on("message:text", (ctx) =>{
//     if(ctx.msg.text == "2024"){
//       ctx.reply("правилно")
//     }
//     else{
//       ctx.reply("не правильно") 
//     }
//   });

//   bot.on("message:photo", (ctx) => {
//    ctx.reply("счет : 0 лир");
//   //  console.log(ctx)
//    console.log(ctx.Context.update.massage.photo);
//   })

//   bot.hears("привет", async (ctx) => {
//     ctx.reply("привет".replace(/привет/i, "пока"));
//   })
//  bot.api.setMyCommands([
//     { command: "start", description: "Start the bot" },
//     { command: "help", description: "Show help text" },
//     { command: "settings", description: "Open settings" },
//     { command: "set", description: "Open settings" },
//   ]);
//   let url;

//   bot.on("message:voice", async (ctx) => {
//     const voice = ctx.msg.voice;
  
//     const duration = voice.duration; // in seconds
//     await ctx.reply(`Your voice message is ${duration} seconds long.`);
  
//      const fileId = voice.file_id;
//      await ctx.reply("The file identifier of your voice message is: " + fileId);
  
//     const file = await ctx.getFile(); // valid for at least 1 hour
//     const path = file.file_path; // file path on Bot API server
//     // await ctx.reply("Download your own file again: " + path);
//     url = 'https://api.telegram.org/file/bot6992413948:AAH61ybdY3OyrmgKw0rhFxJawVoXq2ksTnw' + path;

//     // ctx.replyWithDocument(fileId);

//     let response = await fetch(url);
//     Readable.fromWeb(response.body).pipe(createWriteStream('./test/' + path.split('/')[1]))

//   });
  

//    bot.hears(/^[a-zA-Z0-9]+@[a-z].[a-z]/i, async (ctx) => {
//      ctx.reply("все правильно");
//    })

