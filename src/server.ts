require("dotenv").config();

import app from './app';



const PORT = process.env.PORT || 3000;
console.log('DATABASE_URL:', process.env.DATABASE_URL);
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não foi definida no .env!');
}

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


