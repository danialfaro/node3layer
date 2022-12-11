const express = require( "express" );
const path = require("path")
const app = express();
const port = 3050; // default port to listen

const routes = require("./routes")
const apiRoutes = require("./api")

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.use(routes)
app.use("/api", apiRoutes)

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );