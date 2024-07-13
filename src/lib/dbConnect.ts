import mongoose from "mongoose"

//typescript logic
type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to database")
        return
    }

    try {
        const db = await mongoose.connect("mongodb+srv://rex027:5Zf1ps38hYuhOXaP@cluster0.e7nswyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Portfolio-Contact" || "", {})
        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1)
    }
}

export default dbConnect;