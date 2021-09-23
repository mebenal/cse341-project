//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const data = require('../util/data.js')

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

router.get('/addUser', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Add User',
    path: '/ta02/addUser',
  })
})

router.post('/addUser', (req, res, next) => {
  data.users.push({
    fName: req.body.firstName,
    lName: req.body.lastName,
    position: req.body.position,
    status: req.body.status,
    age: req.body.age,
  })
  res.redirect('/ta02')
})

router.get('/deleteUser', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Delete User',
    path: '/ta02/deleteUser',
  })
})

router.post('/deleteUser', (req, res, next) => {
  let keys = Object.keys(req.body)
  match = data.users.filter((obj) => {
    isMatch = true
    keys.forEach(key => {
      if (req.body[key] != obj[key]) {
        isMatch = false
      }
    });
    return isMatch
  })
  if (match.length > 0) {
    data.users.splice(data.users.indexOf(match[0]), 1)
  }
  res.redirect('/ta02')
})

module.exports = router;
