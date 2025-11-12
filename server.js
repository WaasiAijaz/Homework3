const express = require('express');
const app = express();
const postRouter = require('./views/posts')
app.set('view engine', 'ejs')
app.use('/posts', postRouter);
app.get('/', (req, res) =>{
    res.send('Welcome to the Posts page!')
});
app.listen(3030);