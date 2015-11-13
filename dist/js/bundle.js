(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * File:    main.js
 * Author:  @juancarlosfarah
 * Date:    12/11/15
 */

"use strict";

$(document).ready(function () {
    valignCenterAll();
});

/** LOGGER **/

/**
 * This Logger is designed to work on most browsers. If for any reason
 * it is not able to log, it will not cause the application to crash.
 * @constructor
 */
function Logger() {}

Logger.prototype.error = function (obj) {
    if (typeof console !== "undefined" && console) {
        if (typeof console.error === "function") {
            console.error('[ERROR]: ' + obj);
        }
    } else {
        this.log(obj);
    }
};

Logger.prototype.debug = function (obj) {
    if (typeof console !== "undefined" && console) {
        if (typeof console.debug === "function") {
            console.debug('[DEBUG]: ' + obj);
        }
    } else {
        this.log(obj);
    }
};

Logger.prototype.log = function (obj) {
    if (typeof console !== "undefined" && console) {
        if (typeof console.log === "function") {
            console.log('[INFO]: ' + obj);
        }
    }
};

Logger.prototype.info = function (obj) {
    if (typeof console !== "undefined" && console) {
        if (typeof console.log === "function") {
            console.log('[INFO]: ' + obj);
        }
    }
};

var logger = new Logger();

/**
 * GOOGLE ANALYTICS CODE
 * =====================
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34778154-1']);
_gaq.push(['_setDomainName', 'boxagon.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');ga.type = 'text/javascript';ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga, s);
})();

function valignCenterAll(callback) {
    logger.debug('Vertically center-aligning elements...');
    $('.bxg-vertically-aligned').each(function () {
        var elemHeight = $(this).outerHeight();
        var containerHeight = $(this).closest('.bxg-valign-ctr-container').height();
        var marginTop = (containerHeight - elemHeight) / 2;
        marginTop = Math.floor(marginTop);
        if (marginTop > 0) {
            $(this).css('margin-top', marginTop);
        }
        $(this).css('visibility', 'visible');
    });
    if (typeof callback === 'function') {
        callback();
    }
}

/**
 * FUNCTION: positionFooter
 * ========================
 * This function positions the footer at the bottom of the window if the
 * window is larger than the <body> and elongates the body in order to
 * fill the gap between the footer and the body's content. Otherwise it
 * places it within its normal flow.
 */
function positionFooter() {
    var $footer = $('footer'),
        $body = $('body'),
        $window = $(window);

    $footer.css({ 'position': 'static', 'bottom': 'auto', 'width': 'auto' });
    $body.css({ 'height': 'auto' });

    if ($body.height() < $window.height()) {
        $footer.css({ 'position': 'fixed', 'bottom': 0, 'width': '100%' });
        $body.height($window.height() - $footer.height());
    }
    $('#bxg-footer').show();
}

},{}]},{},[1]);
