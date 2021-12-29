const index = (req, res) => {
    res.send('User index');
};

const show = (req, res) => {
    res.send('User show');
};

const create = (req, res) => {
    let userData = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    };

    const keys = Object.keys(userData);

    for(let key of keys) {
        if (req.body[key] == "")
            return res.send("Por favor, preencha todos os campos!");
    }

    return res.send(userData);
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
