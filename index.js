var express = require('express');
var app = express();

// app.use(express.urlencoded());
app.use(express.static('Public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "public/index.html");
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/" + "public/about.html");
})

app.get('/diet', function (req, res) {
    res.sendFile(__dirname + "/" + "public/diet.html");
})

app.get('/exercises', function (req, res) {
    res.sendFile(__dirname + "/" + "public/exercises.html");
})
app.post('/process_get', function (req, res) {
    console.log(req.body);
    response1 = {
        Name: req.body.Name,
        Email: req.body.Email,
        Contact: req.body.contact,
        Age: req.body.age,
        Gender: req.body.gender,
        Address: req.body.address,


    }

    console.log(JSON.stringify(response1));
    res.send("<h1>THANK YOU</h1>");//this can also work
    // res.sendFile(__dirname + "/" + "Public/ThankYou.html");

})

app.listen(3000, () => {
    console.log("The App Started");
});


