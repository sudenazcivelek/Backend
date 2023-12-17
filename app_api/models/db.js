var mongoose =require('mongoose');
var dbURI ='mongodb+srv://yusuf4132:4545834.Yusuf@mekanbul.i1ndxvm.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){console.log(dbURI+" adresine bağlandı");});
mongoose.connection.on("error",function(){console.log("Bağlantı Hatası Oldu");});
mongoose.connection.on("disconnected",function(){console.log("Bağlantı Kesildi");});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Uygulama Kapatıldı");
    process.exit(0);

});
require("./venue");