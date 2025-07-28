// imports
import mongoose from 'mongoose';
import app from './app';
import env from './util/validateEnv';

// constants/variables
const port = env.PORT;

// Connect to MongoDB
mongoose.connect(env.MONGO_CONN)
    .then(() => {
        console.log("Mongoose connected")
        app.listen(port, () => {
            console.log('Server is running on port: ' + port);
        });
    })
    .catch(console.error);

// End of Document --------------------------------------------------------------------------------