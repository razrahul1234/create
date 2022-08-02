const express = require('express');
const router = express.Router();
const app = express();

const port = process.env.PORT || 8000;
// const baseUrl = `http://localhost:${port}`;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.get('/', (req, res) => {
   res.status(200).send('hello world! Create microservice!');
});

router.get('/getUser', (req, res) => {
    res.send({name:"rahul",id:1});
 });

 router.post('/createBlog', (req, res) => {
     console.log(req.body);
    res.status(201);
    res.json({author: req.body.author, title:req.body.title,  body:req.body.body });
 });

 app.use("/", router);

// Server
module.exports = app;