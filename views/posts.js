const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('All posts page')
});
router.get('/new', (req,res)=>{
    res.send("Create a new post")
})
module.exports = router;