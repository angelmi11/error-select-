module.exports = {
    index: function (req, res) {
        res.render('default/index')
    },

    getLogin: function (req, res) {
            res.render('default/login')
    },

    postLogin: function (req, res) {

    },
    getRegister: function (req, res) {
        res.render('default/register');
    },

    postRegister: function (req, res) {

    }


}