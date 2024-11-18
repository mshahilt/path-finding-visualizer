const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const path = require('path');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'defaultSecret', // Use an environment variable for production
    resave: false,
    saveUninitialized: false,
  })
);

const pathfindingRoutes = require('./routes/pathfindingRoutes'); // Example route file
app.use('/pathfinding', pathfindingRoutes);

app.get('/', (req, res) => {
  res.render('index', { title: 'Pathfinding Visualizer' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
