const express = require ('express');
const bodyParser = require('body-parser');
const fs = require ('fs')
const path = require ('path');
const loginRouters = require ('./routes/login');

const read=path.join(__dirname,'/loginUser.txt');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRouters)
app.get('/', (req, res, next) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<body>');
    res.write('<form action="/" method="POST">');
    res.write(`<input type="text" name="message" id="messageInput">`);
    res.write(`<button type="submit" id="btn">Send</button>`)

    fs.readFile('loginUser.txt', 'utf-8', (err, data) => {
        if (!err) {
   
            res.write(`<p>${data}:</p>`);
        }
        res.write('</form>');
        res.write('</body>');
        res.end(); 
    });
});



app.post('/',(req,res,next)=>{
    const userMessage=req.body.message+' ';
   
    fs.appendFile('loginUser.txt',userMessage,(err)=>{
        if (err){
            console.log(err);
        }
    });

    res.redirect('/');
})


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(4000);
