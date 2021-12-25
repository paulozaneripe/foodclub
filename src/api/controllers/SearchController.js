const index = (req, res) => {
    res.send('User index');
};

const show = (req, res) => {
    res.send('User show');
};

const create = (req, res) => {
    res.send('User create');
};

const edit = (req, res) => {
    res.send('User edit');
};

const update = (req, res) => {
    res.send('User update');
};

const remove = (req, res) => {
    res.send('User remove');
};

export default { index, show, create, edit, update, remove };
