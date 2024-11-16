// import esbuild from 'esbuild';
const esbuild = require("esbuild");
const scripts = [
    { entry: "./public/javascripts/login.js", outfile: "./public/javascripts/loginBundle.js" },
    { entry: "./public/javascripts/signup.js", outfile: "./public/javascripts/signupBundle.js" },
];

scripts.forEach(script => {
    esbuild.build({
        platform: "browser",
        entryPoints: [script.entry],
        outfile: script.outfile,
        bundle: true,
        target: ["chrome60", "firefox60", "safari11", "edge20"],
        sourcemap: "inline",
    }).catch(() => process.exit(1));
});
