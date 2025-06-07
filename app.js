// Showing how to load static assets
import express, { request, response } from 'express'
import { } from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'
import session from 'express-session'
import flash from 'connect-flash'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes)

// REGISTER VIEW ENGINE
// app.set('view engine', 'ejs')

// Define custom view folder
// app.use('views', 'public')

// Setup middleware before routes
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// required to create update delete

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}))
app.use(flash())



app.use('/', routes)


// app.use((req, res) => res.status(404).render('404', { title: 'Page Not Found' }))

// Using ejs
// create object manually
// pass object as parameter into our render method
// pass data into ejs file, pass title into ejs file
//  pass in employees object
//  In index.ejs file we use our template syntax <% and write javascript code.

// Use or value incase it can't read the env value
const PORT = process.env.PORT || 5000

// async/await
const init = async () => {
    try {
        // connect to db
        await connectDB(process.env.DB)
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}
init()
// run with
// npm run dev

// Express.js is a minimalist application framework that works in Node.js. Express can be used as middleware to make a server with many endpoints more manageable, which is known as routing. Proper routing allows us to make APIs that are more readable and easier to manage. Additionally, the functions used in the routing process are given their own file and exported to the routing file which is exported to the main app file.

// Request methods include params, query, header get(header), path, url, originalURL, and body (middleware option, or undefined). Response methods include send(body), status(code), json(object), and sendFile(path).

// Middleware has access to the response and request variables and the next middleware function, commonly denoted next(). It must either end the request response loop or call the next() function. During middleware code may be executed and the req or res parameters may be changed. Express may use application-level, router-level, error-handling, built-in, or third-party middlewares.

// In our example application about maintaining employee data we can only test one HTTP method in a web browser, the 'get'. The others have restricted use inside of a browser, and in order to test them we may use Postman to simulate server requests for 'post', 'patch', 'delete' and other methods.