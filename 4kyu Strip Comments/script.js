

function solution( input, markers ){
    input = input.split( /\n/ );
    var i,
        ilength = input.length,
        n,
        nlength = markers.length,
        found;
  
    for ( i = 0; i < ilength; i++ ) {
      for ( n = 0; n < nlength; n++ ) {
        found = input[ i ].indexOf( markers[ n ] );
        if ( found >= 0 ) {
          input[ i ] = input[ i ].substr( 0, found );
        }
      }
  
  //Whitespace Trim
      input[i] = input[ i ].replace( /\s+$/, '' );
    }
  
    return input.join( '\n' );
  }
  
  console.log( solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]) );
  
  
  
  