const  swaggerAutogen  =  require ( 'swagger-autogen' ) ( ) ;

const  doc  =  { 
  info : { 
    title : 'API Rick and Morty ' , 
    descrição : 'Projeto 04 - modulo 03' , 
  } , 
  host : 'localhost:3001' , 
  esquemas : [ 'http' ] , 
} ;
const  outputFile  =  './src/swagger/swagger.json' ; 
const  endpointsFiles  =  [ './src/index.js' ] ;

swaggerAutogen(outputFile, endpointsFiles, doc);