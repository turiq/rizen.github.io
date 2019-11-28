require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    let menu = require('./parts/menu.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js');

    menu();
    form();
    slider();


});