const mysql2 =require('mysql2')

const dbConnection = mysql2.createPool(
    {
        host:'localhost',
        user:process.env.USER,
        database:process.env.DATABASE,
        password:process.env.PASSWORD,
        connectionLimit:10,
            

    }
)

// dbConnection.execute("select 'test' ", (err,result)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(result)
//     }
// })

module.exports=dbConnection.promise()


