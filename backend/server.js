import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is Ready');
});

app.get('/quotes', (req, res) => {
    const quotes = [
        { "id": 1, "title": "Inspiration", "content": "Believe you can and you're halfway there." },
        { "id": 2, "title": "Motivation", "content": "The secret of getting ahead is getting started." },
        { "id": 3, "title": "Wisdom", "content": "Do what you can, with what you have, where you are." },
        { "id": 4, "title": "Perseverance", "content": "Fall seven times, stand up eight." },
        { "id": 5, "title": "Success", "content": "Success is not final, failure is not fatal: It is the courage to continue that counts." }
      ];
    res.send(quotes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});