const connection = require('./connection');
const { ObjectId } = require('mongodb');

const serialize = (author) => ({
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name
});

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
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

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    return true;
};

const create = async (firstName, middleName, lastName) =>
    connection()
        .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
        .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));


module.exports = {
    getAll,
    getById,
    create,
    isValid
};