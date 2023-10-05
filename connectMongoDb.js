import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect( "mongodb+srv://dineshpandiyand07:OSYM25s1tIWFrFk9@stackoverflow.hnocwju.mongodb.net/?retryWrites=true&w=majority"
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;
