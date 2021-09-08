const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewUser = ({id, firstName, middleName, lastName}) => {
    const fullName = [firstName, middleName, lastName].filter(name => name).join(' ');
    return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
    };
};

const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}

const getById = async (id) => {
    if(!ObjectId.isValid(id)) return null;

    const author = await connection()
        .then((db) => db.collection('authors').findOne(new ObjectId(id)));
    
    if(!author) return null;

    const { firstName, middleName, lastName } = author;

    return getNewAuthor({
        id,
        firstName,
        middleName,
        lastName,
    });
        
}

const isValid = (firstName, lastName, email, password) => {
    if (!firstName || typeof firstName !== 'string') throw new Error('First name is required');
    if (!lastName || typeof lastName !== 'string') throw new Error('Last name is required');
    if (!email || typeof email !== 'string') throw new Error('Email is required');
    if (!password || password.length < 6) throw new Error('Password is required or is too short');
    return true;
};

const create = async (firstName, lastName, email, password) =>
    connection()
        .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
        .then(result => getNewUser({ id: result.insertedId, firstName, lastName, email, password }));


module.exports = {
    getAll,
    getById,
    create,
    isValid
};