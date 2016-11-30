// cookie test

$( document ).ready( function( ) {
	// console.log( 'DOM loaded' )	
	if( !Cookies.get( 'visited' ) ) {
		$( '#container' ).html('welcome!') 
		Cookies.set('visited', 'true') 
	} else {
		$( '#container' ).html( 'Welcome back!!' )
		}
} )



 
	
