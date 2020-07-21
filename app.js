const express = require("express");
const app = express();
var faker = require('faker');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/",function(req,res){
   res.render("home.ejs", { page_name: "home", companyName: faker.company.companyName(),
       email: faker.internet.email()
       
   });
   
});

app.get("/dna_profiling", function(req,res){
    res.render("dna_profiling.ejs", {page_name: "dna_profiling", companyName: faker.company.companyName(),
       email: faker.internet.email()
        
    });
    
});

app.get("/dna_sequencing", function(req,res){
    res.render("dna_sequencing.ejs", {page_name:"dna_sequencing", companyName: faker.company.companyName(),
       email: faker.internet.email()
        
    });
});

app.get("/genome_annotation", function(req,res){
    res.render("genome_annotation.ejs", {page_name:"genome_annotation", companyName: faker.company.companyName(),
       email: faker.internet.email()
        
    });
});

app.get("/reference", function(req,res){
    res.render("reference.ejs", {page_name: "reference", companyName: faker.company.companyName(),
       email: faker.internet.email()
        
    });
   
});

//app.listen("8080", "127.0.0.1", function() {
  //console.log("express server is running");
//});

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Running express server...");
});