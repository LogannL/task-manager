const express = require('express');
const hbs = require('hbs');
const http = require('http');
const path = require('path');

// INIT SERVER
const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3000;

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res, next) => {
    res.render('index')
})

server.listen(port, () => {
    console.log('Server is up on port : ' + port);
})