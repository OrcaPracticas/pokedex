/**
 * Configuracion para configurar un DLL.
 *
 * @package React-Practica
 * @subPackage webapck.
 *
 * @uthor Jmendez <jorge.mendez.ortega@gmail.com>
 */
const PATH = require("path");
const WEBPACK = require("webpack");

/**
 * Inicio de configuracion.
 */
const CONFIG = {
    entry: {
        modules: [
            "react",
            "react-dom",
            "prop-types",
        ],
    },
    output: {
        path: PATH.resolve(__dirname, "../public/js"),
        filename: "[name].js",
        library: "pokedex",
    },
    plugins: [
        new WEBPACK.DllPlugin({
            name: "pokedex",
            path: PATH.join(__dirname, "../public/js/[name]-manifest.json"),
        }),
    ],
};

module.exports = CONFIG;