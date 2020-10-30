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
<<<<<<< HEAD
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
=======
  router.get('/quote/:id', (req, res) => {

    // Declare our ID
    const id = req.params.id;
    
    // getting a quote on the page using the id for the english quote
    db.getEnglishById(id)
    .then(english => {
      const viewData = {
        id: english.id,
        maoriId: english.maoriId,
        author: english.author,
        engQuote: english.quote,
        maoriQuote: english.maoriQuote
      }
      console.log(english)
      console.log(english.maoriQuote)
      res.render('quoteview', viewData)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR ' + err.message)
    })   
  })
>>>>>>> 76c75be930335eff1af616396603b84ff104f622
