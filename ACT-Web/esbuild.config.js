// import esbuild from 'esbuild';
const esbuild = require("esbuild");
const scripts = [
    { entry: "./public/javascripts/login.js", outfile: "./public/javascripts/loginBundle.js" },
    { entry: "./public/javascripts/signup.js", outfile: "./public/javascripts/signupBundle.js" },
    { entry: "./public/javascripts/AICode.js", outfile: "./public/javascripts/AICodeBundle.js", platform: "node" },
];

scripts.forEach(script => {
    esbuild.build({
        platform: script.platform || "browser",
        entryPoints: [script.entry],
        outfile: script.outfile,
        bundle: true,
        target: ["chrome60", "firefox60", "safari11", "edge20"],
        sourcemap: "inline",
    }).catch(() => process.exit(1));
});
