const express=require("express");
const bodyparser=require("body-parser");
const app= express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
  // res.sendFile(__dirname);
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res)
{
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1 + num2;
  res.send("the result is"+result);
});
app.get("/bmicalculator",function(req,res){

  res.sendFile(__dirname+"/bmiCalculator.html");

})
app.post("/bmicalculator",function(req,res)
{
  var h=parseFloat(req.body.height);
  var w=parseFloat(req.body.weight);
  var rest=w/(h*h);
  res.send("The result is "+rest);


});
app.listen(3000,function(){
  console.log("server started in 3000");
}) ;
