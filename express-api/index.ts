import express from 'express';

const app = express()
const port:number = 3000;


app.get('/', (req, res) => {

  res.status(201).json({
    ok:true,
    msg: 'Nuevo id 12112'
  })

  res.json({
      ok:true,
      msg:'Todo Salio Bien'
  })
})

app.listen()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})