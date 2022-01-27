const login = (req, res) => {
    res.send('User index');
};

const logout = (req, res) => {
    res.send('User index');
};


const forgot = (req, res) => {
    res.send('User create');
};

const reset = (req, res) => {
    res.send('User reset');
};

export default { login, logout, forgot, reset };
