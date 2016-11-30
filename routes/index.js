// cookie test
const express = require( 'express')
const app = express()

app.use( express.static(__dirname +'/static') )

app.listen( 8000, ( ) => {
	console.log( 'server running')

})






// create express server

// say welcome / welcome back to (new) users

// set cookie name to visited {value:true}
