'use strict'

var express = require('express')

module.exports = {
  getBooks: function (req, res, next) {
    res.send("'<h1>Express RESTful API</h1>'")
  }
}
