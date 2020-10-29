const express = require('express')
const { getTasks } = require('./db.js')

const db = require('./db.js')

const router = express.Router()

module.exports = router

// Render for root route aka home.hbs
router.get('/', (req, res) => {
  res.render('home')
})

//  Render for quote route aka quoteview.hbs
router.get('/quote', (req, res) => {
  // getting a quote on the page using the id for the english quote
  // db.getEnglish()
  // .then(() => {
  //   const viewBoth = {
  //     english_quotes: englishQuotes,

  //   }

  //   // & te reo quotes table
  //   db.getTeReo()

  //   })
  res.render('quoteview')
})
