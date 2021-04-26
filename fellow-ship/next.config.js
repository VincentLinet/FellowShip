const withCss = require("@zeit/next-css");

module.exports = withCss({
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/search": { page: "/search" },
      "/seances": { page: "/seances" },
      "/adventurer": { page: "/adventurer" }
    };
  }
});
