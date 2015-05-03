module.exports = {
  modules: ["config", "desktop"],
  srcDir: "./src/",
  destDir: "./plugin/dist/",
  entryPointFile: {
    js: "index.coffee",
    css: "styles/index.scss"
  },
  pluginDir: "plugin",
  pluginKey: "" // ./keys/kintone-plugin.~~~.ppk
};
