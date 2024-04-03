const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/terms', (req, res) => {
    res.json([
        { term: "Lit", definition: "Extremely fun or exciting." },
        { term: "Salty", definition: "To be upset or bitter about something." },
        
    ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
