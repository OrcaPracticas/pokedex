/**
 * Configuracion para un entorno de desarrollo.
 *
 * @package React-Practica
 * @subPackage webapck.
 *
 * @uthor Jmendez <jorge.mendez.ortega@gmail.com>
 */
const PATH = require("path");
const EXTRACT_TEXT_PLUGIN = require("extract-text-webpack-plugin");
const WEBPACK = require("webpack");
const MANIFEST = require("../public/js/modules-manifest.json");

/**
 * Inicio de configuracion.
 */
const CONFIG = {
    entry: {
        pokedex: PATH.resolve(__dirname, "../src/app"),
    },
    output: {
        path: PATH.resolve(__dirname, "../public/js"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015",
                            "react",
                            "stage-2",
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: EXTRACT_TEXT_PLUGIN.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: { minimize: true },
                        },
                        {
                            loader: "sass-loader",
                            options: { minimize: true },
                        },
                    ],
                }),
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        fallback: "file-loader",
                        name: "img/[name].[ext]",
                    },
                },
            },
        ],
    },
    plugins: [
        new EXTRACT_TEXT_PLUGIN({ filename: "../css/[name].css" }),
        new WEBPACK.DllReferencePlugin({
            manifest: MANIFEST, // se importa el manifiesto
        }),
    ],
};

module.exports = CONFIG;
