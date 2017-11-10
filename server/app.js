'use strict'

// Main modules
const morgan = require('morgan')
const express = require('express')

// App modules
const app = express()

// Middlewares
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

module.exports = app
