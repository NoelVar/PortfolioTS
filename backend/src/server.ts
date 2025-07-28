// imports
import mongoose from 'mongoose';
import app from './app';
import env from './util/validateEnv';

// constants/variables
const port = env.PORT;

// Start server immediately
const server = app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

// Connect to MongoDB in background
mongoose.connect(env.MONGO_CONN)
    .then(() => console.log("Mongoose connected"))
    .catch(console.error);

// End of Document --------------------------------------------------------------------------------