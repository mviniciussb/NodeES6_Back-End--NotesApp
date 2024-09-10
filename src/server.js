import express from "express"
import routes from "./routes/index.js"


const app = express()
app.use(express.json())

app.use(routes)




const port = 3000
app.listen(port, () => console.log(`O servidor foi iniciado na porta ${port}`))