const connection = require('./connection');

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
const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors');
return authors.map(serialize).map(getNewAuthor);
};

const getById = async (id) => {
    const [ author ] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?',
        [id]
        );
    if(author.length === 0) return null;
    const {firstName, middleName, lastName} = serialize(author[0]);

    return getNewAuthor({id, firstName, middleName, lastName});
};

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    return true;
};

const create = async (firstName, middleName, lastName) => {
    const createAuthor = await connection.execute(
        'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
        [firstName, middleName, lastName]
    );
    return createAuthor;
};



module.exports = {
    getAll,
    getById,
    isValid,
    create
};