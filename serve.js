const fs = require("fs");
const path = require("path");
const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 3000;

const PATH = __dirname;
const NODE_ENV = process.env.NODE_ENV || "production";
const HOT_RELOAD = process.env.HOT_RELOAD == "1";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(PATH, "templates"));

server.use(bodyParser.json());

server.use("/static", express.static(path.join(PATH, "static")));
// make files like images acceptable
server.use("/static", express.static(path.join(PATH, "assets")));
server.use("/media", express.static(path.join(PATH, "media")));

const asyncHandler = (fn) => {
    return function asyncUtilWrap(...args) {
        const fnReturn = fn(...args);
        const next = args[args.length - 1];
        return Promise.resolve(fnReturn).catch(next);
    };
};

server.use(
    cors({
        origin: function (origin, callback) {
            // this should be changed according to the project
            callback(null, true);
        },
    })
);

if (NODE_ENV == "development") {
    const webpack = require("webpack");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");

    const clientConfig = require("./webpack.config");
    const compiler = webpack(clientConfig);
    server.use(
        webpackDevMiddleware(compiler, {
            publicPath: "/hstatic/",
        })
    );
    server.use(webpackHotMiddleware(compiler));
} else {
    server.use("/static", express.static(path.join(PATH, "dist")));
}

server.get("/api/items/", (req, res) => {
    return res.json({ items: [{ name: "item 1" }, { name: "item 2" }] });
});

server.get(
    "*",
    asyncHandler(async (req, res) => {
        const options = {
            hot_static_url: HOT_RELOAD ? "/hstatic" : "/static",
            hot_reload: HOT_RELOAD,
            isdebug: NODE_ENV == "development",
            scripts: [],
            styles: [],
        };

        req.HOST = `${req.protocol}://${req.hostname}:${PORT}`;

        let manifest = {};

        if (HOT_RELOAD) {
            const host = `http://${HOST}:${PORT}`;

            try {
                manifest = await axios
                    .get(`${host}/hstatic/json/vue-client-manifest.json`)
                    .then((r) => r.data)
                    .catch((e) => {
                        return {};
                    });
            } catch (e) {
                console.log(e);
                return res.json({});
            }
        } else {
            manifest = JSON.parse(
                fs.readFileSync(
                    path.join(PATH, "dist/json/vue-client-manifest.json"),
                    "utf-8"
                )
            );
        }

        options.scripts = manifest["all"]
            .filter((e) => /\.js/.test(e))
            .map((e) => `/${e}`);
        options.styles = manifest["all"]
            .filter((e) => /\.css/.test(e))
            .map((e) => `/${e}`);

        return res.render("index", options);
    })
);

server.listen(PORT, HOST, () => {
    console.log(`\nlistening to port ${PORT}\n`);
});
