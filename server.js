const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)


const NODE_ENV = process.env.NODE_ENV || 'development';


const STATIC_DIR = path.join(__dirname, 'static');
const TEMPLATES_DIR = path.join(__dirname, 'templates');

const server = express();

server.set('view engine', 'pug')
server.set('views', path.join(TEMPLATES_DIR));

if(NODE_ENV === 'development') {  

    const webpack = require('webpack');
    const clientConfig = require('./build/webpack.client.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const compiler = webpack(clientConfig);

    server.use(webpackDevMiddleware(compiler, {
        publicPath: '/static/',
        stats: {
            colors: true,
        },
    }));

    server.use(webpackHotMiddleware(compiler));

    server.use('/static/img', express.static(path.join(STATIC_DIR, 'img')));
    server.use('/static/fonts', express.static(path.join(STATIC_DIR, 'fonts')));
}
else {
    server.use('/static', express.static(STATIC_DIR));  
}

server.use(bodyParser.json())

server.get("/", (req, res) => {

    // console.log(req.method)


    res.render('index', { title: 'My File' });

});


if(module.hot) {
    console.log("It's very hot")
}
else {
    console.log("It's not hot")
}

const PORT = process.env.PORT || 8080;

server.listen(PORT, ()=>{
    console.log(`listening to port ${PORT} (${NODE_ENV})\n`);
});


