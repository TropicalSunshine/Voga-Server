const express = require("express");
const cors =  require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

//handle cors errors
app.use(cors());

app.use(bodyParser.json());

//client page
app.use('/', express.static(path.join(__dirname + '/static/build')));

const axios = require("axios");



app.post("/translate", (req, res, next) => {
    res.header("content-type", "application/json");
    console.log("/translate request");
    console.log(req.body.word);
    console.log(req.body.language);
    axios({
        method: 'post',
        url: 'http://ec2-54-226-178-32.compute-1.amazonaws.com:8080/translate',
        data: {
            "word" : req.body.word,
            "language": req.body.language
        }
      })
    .then(response => {
        console.log(response.data)
        res.status(200).json({
            "result": response.data
        });
    }).catch(error => {
        res.status(404).json({
            message: "no data",
            data: null
        })
    });
});

app.get("/getall", (req, res, next) => {
    res.header("content-type", "application/json");
    console.log("/get all request");
    axios({
        method: 'get',
        url: 'http://ec2-54-226-178-32.compute-1.amazonaws.com:8080/getall',
        data: null
      })
    .then(response => {
        console.log("data", response.data)
        res.status(200).json({
            "result": response.data
        });
    }).catch(error => {
        res.status(404).json({
            message: "no data",
            data: null
        })
    });
});


//if no routes are found
app.use((req, res, next) => {
    res.writeHeader(404, {
        "Content-Type" : "text/plain"
    })
    res.status(404).end("No Route Found");
})

module.exports = app; 