import express from "express"
import http from "http"

const app = express();
const session = require("express-session");
const QRCode = require("qrcode");
const bodyParser = require("body-parser");
//nodeJS
app.set('view engine', 'pug');//view 엔진을 pug로 설정
app.set('views', __dirname + '/views');//Express 템플릿 설정(views 폴더에 뷰에 해당하는 css js 가 들어감)
app.use('/public', express.static(__dirname + '/public'));//public url을 생성해 유저에게 공유(frontend 에서 보여줄 js)
/*
app.use(session({
    secret: "AREX7685!@#$",
    resave: false,
    saveUninitialized: true
}));
*/

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res) => res.render('home'));//route handler('/'로 접속하면 home 화면으로 다이렉트)
//app.get('/*', (req, res) => res.redirect('/'));//어떤 경로로 접속하던 / -> home 으로

app.post("/qr", (req, res) => {
    let str = req.body.encrypt
    console.log(str);
    QRCode.toDataURL(str, function(err, imgData){
        if (err) console.log(err);
        res.json({
            "img": imgData
        })
    });
});

const handleListen = () => console.log(`Listening on http://localhost:7685 or http://192.168.0.6:7685`);

const server = http.createServer(app);//http 서버 생성

server.listen(7685, handleListen);
