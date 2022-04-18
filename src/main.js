const express=require("express");
const app = express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;
 

const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath)

app.get("/",(req,res)=>{
    res.render('ind');
});

app.get("/abt",(req,res)=>{
    res.render("abt");
})

app.listen(port,()=>{
    console.log(`listening the port at ${port}`);
});