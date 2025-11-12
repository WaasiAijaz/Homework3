const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) =>{
    console.log('Here');
    res.render("index", {post:"Posts"});
    
});
app.listen(3030);