const express = require('express');
const index = express();
const port = 7001;
const path = require('path');




index.get('/', (req, res) => {
    res.sendFile('/Users/bektasalbayrak/WebstormProjects/bambly/public/index.html', path.join(__dirname))
})


index.listen(port, "192.168.1.14",() => {
    console.log(`Server listening on http://localhost:${port}`)
})