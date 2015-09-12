// -----------------------------------------------------
// Here is the starting point for your own code.
// All stuff below is just to show you how it works.
// -----------------------------------------------------

// Browser modules are imported through new ES6 syntax.

var React = require('react');
import MainComponent from './poutine/MainComponent';

// Node modules are required the same way as always.
var os = require('os');

// window.env contains data from config/env_XXX.json file.
var envName = window.env.name;


React.render(
  React.createElement(MainComponent),
  document.getElementById('main')
);
