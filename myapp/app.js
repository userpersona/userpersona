const express = require ('express' 4.18.1 )
const app = express ()
const port = 3000

app.get('/',(req, res) => {
    res.send ('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

