import mongoose from "mongoose";

const Connection = async (URL) => {

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;