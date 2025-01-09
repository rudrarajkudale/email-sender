const http = require("http");
const nodemailer = require("nodemailer");
require('dotenv').config();

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });

    const receiver = {
        from : process.env.EMAIL,
        to : "kudalerudraraj@gmail.com",
        subject : "Node Js Mail Testing!",
        text : "Hello this is a task from the numerty technologies"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
});

server.listen(8080);