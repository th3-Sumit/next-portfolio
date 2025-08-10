import mongoose from "mongoose";

export default async function connect(){
    try {
        mongoose.connect(process.env.MONGOOSE_URL)
        const connection = mongoose.connection;

        connection.on('connect', () => {
            console.log('MongoDB Connected successfully');
        })

        connection.on('error', (error) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running.' + error);
            process.exit();
            
        })
    } catch (error:any) {
        console.log('Something went wrong. Plz try again.');        
    }
}