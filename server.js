var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title:'Article-One|Amarnath',
        heading:'Article-One',
        date:'20Mar2018',
        content:`Hello Everone There! This IS Article OnE Of This WebPage!Hello Everone There! This IS Article OnE Of     ThisWebPage!HelloEverone There! This IS Article OnE Of This WebPage!Hello Everone There! This IS Article OnE Of This  WebPage!`
    },
    
    'article-two' : {
        title:'Article-Two|Amarnath',
        heading:'Article-Two',
        date:'20Mar2018',
        content:`Hello Everone There! This IS Article Two Of This WebPage!`
    }
};

function createtemp(d){
    var title=d.title;
    var heading=d.heading;
    var date=d.date;
    var content=d.content;
    var htmlcontent=`<!DOCTYPE html>
    <html>
        <head>
            <title>
                 ${titile}
            </title>
            <link href="/ui/style.css" rel="stylesheet"/>
            <meta name="viewport" content="width-device-width,initial-scale=1" /> 
         </head>
         <body>
            <div class="container" >
                <div>
                    <a href='/'>home </a>
                </div>
                
                <div>
                    <h2>
                        ${heading}
                    </h2>
                    <hr/>
                    <h3>
                        ${date}
                    </h3>
                    
                </div>
                <div>
                    <p>
                        ${content}
                    </p>
                </div>
            </div>
        </body>
    </html>
    `    
    return htmlcontent;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
  res.send(createtemp(atricles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
