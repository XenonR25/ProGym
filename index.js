import express from "express";
import path from "path";
const app = express();
const port = 80;

// Express Specific Stuff
app.use('/static',express.static('static'))


// Endpoints
app.get('/',(req,res)=>{
    res.status(200).render('base.html');

})


app.listen(port,()=>{
    console.log(`The application started successgully on  port ${port}`)
})