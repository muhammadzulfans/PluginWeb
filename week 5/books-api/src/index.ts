import { PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";
import express from "express" ;

const app = express()

const port = process.env.PORT || 7777

app.use(express.json());

app.get("/ping", (_, res) => {
    res.status(200).json({message: "server running well"})
});

app.listen(port , () => {
    console.log(`Server run on port : ${port}`);
    
});
