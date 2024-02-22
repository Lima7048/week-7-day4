import cors from "cors";
const app = express()
app.use(cors());
import dotenv from "dotenv";
dotenv.config();
import express from "express"
app.use(express.json())
import pg from "pg";
export const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});


const PORT = "8080";
app.listen(PORT, () => {
    console.log(`(/¯◡ ‿ ◡)/¯ ~ ┻━┻ Server started on PORT: ${PORT}`);
});
app.get("/", (request, response) => {
    response.send("Root route: Woohooo we is here");
});

app.get("/socials", async (request, response) => {
    const result = await db.query("SELECT * FROM socials");
    response.json(result.rows);
})