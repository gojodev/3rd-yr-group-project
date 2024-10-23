// import esbuild from 'esbuild';
const esbuild = require("esbuild");
esbuild.build({
    platform: "browser",
    entryPoints: ["./public//javascripts/login.js"],
    outfile: "./public/javascripts/bundle.js",
    bundle: true,
    target: ["chrome60", "firefox60", "safari11", "edge20"],
    sourcemap: "inline",
}).catch(() => process.exit(1));