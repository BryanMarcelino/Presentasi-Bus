// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var prism = require('bespoke-prism');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');
var backdrop = require('bespoke-backdrop');
var cube = require('bespoke-theme-cube');
var nebula = require('bespoke-theme-nebula');
var voltaire = require('bespoke-theme-voltaire');
var atomantic = require('bespoke-theme-atomantic');
var carousel = require('bespoke-theme-carousel');


// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
    classes(),
    nav(),
    scale(),
    bullets('.build, .build-items > *:not(.build-items)'),
    hash(),
    prism(),
    multimedia(),
    extern(bespoke),
    backdrop(),
    atomantic(),
    carousel()
]);
