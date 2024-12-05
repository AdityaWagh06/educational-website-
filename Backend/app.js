import express from 'express'
import userRoutes from './routes/userRoutes.js'
import errorMiddleware from './MiddleWares/errormiddleware.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
 

const app=express()
app.use(cors({
    origin:'*',
    credentials:true
    }) 
)


app.use(express.json())
app.use(cookieParser())
app.use('/api/user',userRoutes)
//app.use(useAuthentication())



app.use(errorMiddleware)

export default app