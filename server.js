const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


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
        hot: true,
        stats: {
            colors: true,
        },
    }));

    server.use(webpackHotMiddleware(compiler));
}
else {
    server.use('/static', express.static(STATIC_DIR));  
}

server.use(bodyParser.json())

server.get("/", (req, res) => {

    console.log(req.method)


    res.render('index', { title: 'My File' });

});




const PORT = process.env.PORT || 8080;

server.listen(PORT, ()=>{
    console.log(`\nlistening to port ${PORT} (${NODE_ENV})`);
    console.log(`quit the server with ctrl+c\n`);
});


/*
[19/Oct/2017 08:46:40] "GET / HTTP/1.1" 200 6485
[19/Oct/2017 08:46:40] "GET /static/css/font-awesome.min.css HTTP/1.1" 200 31000
[19/Oct/2017 08:46:40] "GET /static/js/lib/jquery.min.js HTTP/1.1" 200 86659
[19/Oct/2017 08:46:40] "GET /static/css/sb-admin.css HTTP/1.1" 200 3421
[19/Oct/2017 08:46:40] "GET /static/css/bootstrap.min.css HTTP/1.1" 200 121200
[19/Oct/2017 08:46:40] "GET /static/css/style.css HTTP/1.1" 200 1799
[19/Oct/2017 08:46:40] "GET /static/js/lib/bootstrap.min.js HTTP/1.1" 200 37045
[19/Oct/2017 08:46:40] "GET /static/js/script.js HTTP/1.1" 200 0
[19/Oct/2017 08:46:40] "GET /static/js/lib/vue.js HTTP/1.1" 200 253304
[19/Oct/2017 08:46:40] "GET /static/js/post-listing.vue.js HTTP/1.1" 200 1008
[19/Oct/2017 08:46:40] "GET /static/fonts/fontawesome-webfont.woff2?v=4.7.0 HTTP/1.1" 200 77160
[19/Oct/2017 08:46:40] "GET /static/fonts/glyphicons-halflings-regular.woff2 HTTP/1.1" 200 18028
[19/Oct/2017 08:46:40] "GET /api/blog/ HTTP/1.1" 200 1095
[19/Oct/2017 08:46:41] "GET /static/img/fav.ico HTTP/1.1" 200 100922
*/