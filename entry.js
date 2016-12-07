// Here you write everything you want to show on the html
 
// if you hve multiple scripts/files you want you use, require them all in this one, because this is the one which is linked to the html document
// They will be output in bundle ( a file which collects all the files and bundles them up together )
// That mean that you'll only call on bundle.js to access all the files

// Test //
//document.write('it works');
//require("./style.css");
//document.write(require("./content.js"));

// main.scss

// look up autoprefixer-loader !!!
// do you have to do something when usng webpack and pug?
// how to include jquery in webpack as an external?

var $ = require( 'jquery' )

require( './public/css/index.scss' )
require( './public/bootstrap/js/bootstrap.min.js' )
require( './public/js/main.js' )