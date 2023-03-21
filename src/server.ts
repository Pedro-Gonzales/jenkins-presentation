import { app } from "./app";
import "express-async-errors";

const port = process.env.PORT;


app.listen(port, ()=> console.log(`Server up and running on port ${port}`));