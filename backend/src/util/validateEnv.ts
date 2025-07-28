// imports
import { cleanEnv, port, str } from "envalid";

// exporting cleanEnv call (cleaning and sanitising env variables)
export default cleanEnv(process.env, {
    MONGO_CONN: str(),
    PORT: port(),
    SOURCE_EMAIL_ADD: str(),
    SOURCE_EMAIL_PASS: str(),
});

// End of Document --------------------------------------------------------------------------------