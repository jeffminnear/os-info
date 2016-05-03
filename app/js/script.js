'use strict';



$(function () {
  
  const os          = require('os');
  const prettyBytes = require('pretty-bytes');

  $('.operating-system .platform').append('<span>' + os.platform() + '</span>');
  $('.operating-system .release').append('<span>' + os.release() + '</span>');
  $('.operating-system .arch').append('<span>' + os.arch() + '</span>');

  $('.cpu .model').append('<span>' + os.cpus()[0].model + '</span>');
  $('.cpu .cores').append('Number of CPU Cores: <span>' + os.cpus().length + '</span>');

  $('.memory .free').append('Available memory: <span>' + prettyBytes(os.freemem()) + '</span>');
  $('.memory .total').append('Total memory: <span>' + prettyBytes(os.totalmem()) + '</span>');
});
