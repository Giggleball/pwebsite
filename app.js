// Necessary dependencies
const express = require( 'express' )

const app 	  = express( )


//static will become default and overwrite /home
app.use( express.static( 'public' ) )


// which visual template you'll be using 
app.set( 'view engine', 'pug' )

app.set( 'views', __dirname + '/views' )


// Route
app.get( '/', ( req, res ) => {
	console.log('Viewing webpage')
	res.render( 'index' )
})


// Server request
app.listen( 8880, ( ) => {
	console.log( 'server running' )
})






// cookie test

// create express server

// say welcome / welcome back to (new) users

// set cookie name to visited {value:true}