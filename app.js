const express= require('express')
const app = express()
const port=5500

const dbConnection=require("./db/dbconfig")
//user routes middleware file

const userRoutes= require("./routes/userRoutes")


app.use(express.json())
app.use("/api/users",userRoutes)


async function start(){
    try{
       const result=  await dbConnection.execute("select 'test' ")
       app.listen(port)
       console.log("connected to db")
       console.log(`listen on ${port}`)

    }catch(error){
        console.log(error.message)
    }
    
}
start()





// app.listen(port,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(port+"listen")
//     }
// })