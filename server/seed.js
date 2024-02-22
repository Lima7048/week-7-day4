import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
export const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTIONSTRING,
});


db.query(`CREATE TABLE IF NOT EXISTS socials(
    id SERIAL PRIMARY KEY,
    name VARCHAR (255),
    post VARCHAR (255),
    url TEXT
)`)

db.query(`INSERT INTO socials (name, post, url)
Values
('Lola', 'I think the new fenty beauty lip balm is a good purchase', 'https://pagesix.com/wp-content/uploads/sites/3/2024/01/baddest-lip-balm-there-74442236.jpg'),
('Rizwan', 'My new favourite song is Yucky Blucky Fruitcake by  Doechii I cant stop listening.', 'https://i1.sndcdn.com/artworks-hGUz6uiwrbC5yovw-CIZrGQ-t500x500.jpg'),
('Mpoh', 'i found this great spot! If you are a BTS army, this is a place to add to your to-do list. Cafe Hyuga is BTSs previous dorm recently renovated into a cozy cafe', 'https://i.ytimg.com/vi/_7sm4EIQW9Q/maxresdefault.jpg'),
('Kagiso', 'I dont know what to think about the new text to image Ai called sora. Some say it may be disruptive to the creative industry. Heck imagine that high def tech in the hands of the government. will we ever be able to discern truth from fiction? ', 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ql5CYZ1Z5f5d0rmsZPtZEA.jpeg')`);

//('', '', ''),