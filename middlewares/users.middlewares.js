const { User } = require('../models/user.models');


const userExists = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id } });

        if (!user) {
            return res.estatus(404).json({
                status: 'error',
                message: 'User not found given that id'
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log(error);

    }
}

module.exports = { userExists };