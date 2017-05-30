const express = require('express')
const app = express()

    .use(express.static(__dirname + '/public'))

app.get('/public/index.html', function (req, res, next) {
    res.send('onkey');
});



app.listen(9000, function () {
    console.log(' ok !')
})
