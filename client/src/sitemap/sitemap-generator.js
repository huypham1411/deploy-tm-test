const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
//Import our routes
const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  const pathsConfig = {
    '/Products/:id': [
        {
            id: products._ids
        }
    ]
};
  return (
  new Sitemap(router())
  .applyParams(pathsConfig)
  .build("https://uncle-veggies.herokuapp.com/")
 //Save it wherever you want
  .save("../../public/sitemap.xml")
  );
}
generateSitemap();