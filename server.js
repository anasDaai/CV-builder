const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var pdf = require('html-pdf')
const fs= require('fs')
//var ch = (fs.readFileSync('./documents/index.txt','utf-8'))
const PORT = process.env.PORT || 5000;
const pdfTemplate = require("./documents");
const app = express();
app.use(bodyParser.json());
const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get("/api/resume", (req, res) => {
    res.getHeader('200',{ContentType:'application/json'})
    const file = `${__dirname}/resume.pdf`;
	res.download(file);
  });

app.post('/api',(req,res)=>{

    pdf.create(pdfTemplate(req.body),options).toFile('resume.pdf', (err) => {
		if (err) {
			console.log(err);
			res.send(Promise.reject());
		} else res.send(Promise.resolve());
	});
})
