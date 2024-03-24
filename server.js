
const express = require("express");
const cors = require('cors');
/* CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. */
const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());

/* An OPTIONS handler is added to handle preflight requests. */
/* 
This part of the code is handling the OPTIONS requests for all routes using the app.options() method. */
/* The OPTIONS method is a part of the HTTP protocol and is often used in conjunction with Cross-Origin Resource Sharing (CORS) */
app.options('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,OPTIONS');
    res.header('Access-Control-Allow-Headers','Authorization,Content-Length,X-Requested-With');
    res.send(200);
}); 

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
/* So, in your case, when you see ::1 as the IP address in your console output, it means that the request is originating from the same machine where the server is running, i.e., it's a request from localhost. This is quite common during development when testing applications locally. */

app.use(express.static('public'));
app.use(express.static('css'));
//express will look at these in the order they are provided so 'public'take precedence over 'css' but if the  file we are looking for not in 'public' then it will look in the 'css'folder
 
/* Routes Handlers */
const timeRoutes = require("./routes/time");
const nameRoutes = require("./routes/name");
const jsonRoutes = require("./routes/json");
const echoAllRoutes = require("./routes/echoall");

  /* Routing using express Router() */
app.use('/routes/time' ,timeRoutes);
app.use('/routes/name' ,nameRoutes);
app.use('/routes/json' ,jsonRoutes);
app.use('/routes/echoall',echoAllRoutes);

app.get('/',(req,res)=>{

    res.sendFile(__dirname + "/views/index.html")
});
app.get('/form',(req,res)=>{

    res.sendFile(__dirname + "/views/form.html")
});

app.get('/:id/echo',(req,res)=>{
      res.json({"message":req.params.id});
})
//parameter starts with colon 

app.all("*",(req,res)=>{
    res.send("Invalid route");
})

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));