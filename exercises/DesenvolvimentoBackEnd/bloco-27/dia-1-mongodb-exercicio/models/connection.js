const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let db = null;

const connection = () => {
    return MongoClient
        .connect(MONGO_URL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(con => con.db('model_example'))
        .catch(err => {
            console.log(err);
            process.exit();
        });
};

module.exports = connection;