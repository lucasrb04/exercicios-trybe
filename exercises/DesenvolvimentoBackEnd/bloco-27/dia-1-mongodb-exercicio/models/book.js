const connection = require('./connection');

const getNewBook = ({author_id, title, middleName, lastName}) => {
    const fullName = [firstName, middleName, lastName].filter(name => name).join(' ');
    return {
    id: _id,
    firstName,
    middleName,
    lastName,
    fullName
    };
};

const getAll = async () => {
    return connection()
        .then((db) => db.collection('books').find().toArray())
            .then((books) => books);
};

module.exports = {
    getAll
};