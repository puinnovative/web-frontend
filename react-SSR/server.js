const express = require('express')
const Home = require('./client/build/bundle')
const app = express()
app.use('/',(req, res) => {
  res.send(
    `
     <html>
       <head>
         <title>ssr</title>
       </head>
       <body>
         ${Home.default}
       </body>
     </html>
    `
  )
})

app.listen(3000, () => {
  console.log('服务器启动成功！')
})