// Node JS core modules
const path = require('path');

// NPM modules
const express = require('express');
const hbs = require('hbs');

// Custom javascript files
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

// Home page
app.get('', (req, res) => {
    res.render('home', {
        title: 'Weather'
    });
});

// About page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

// Help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    });
});

// Accessing and sending weather data
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Enter Location'
        });
    }
    
    geocode(req.query.address)      // getting coordinates from geocode.js
        .then(({ longitude, latitude }) => {
            forecast(latitude, longitude)       // getting weather from forecast.js
              .then(weatherData => {
                res.send(weatherData);
              })
              .catch((err) => {
                res.send({error: "Weather Not Found"});
              });
        })
        .catch((err) => {
            res.send({error: "Location Not Found"});
        });
});

// 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404'
    });
});

// Start the server
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});