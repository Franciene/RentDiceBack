const Users = require('../models/users');

class UsersController {
    static async insertUser(req, res) {
        let body = req.body;

		let user = new Users();

        let findUser = await Users.findOne({
            email : body.email
        });

        if(findUser !== null){
            return res.status(403).json({
                success: false,
                message: 'User already exist',
                payload: []
            });
        }

        user.nome = body.nome;
        user.email = body.email;
        user.senha = body.senha;

        await user.save();

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: [user]
		});
    }

    static async getUserByEmail(req, res) {
        let email = req.params;

        let findUser = await Users.findOne({
            email : email
        });

        if(findUser == null){
            return res.status(404).json({
                success: false,
                message: 'User not found',
                payload: []
            });
        }

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: [user]
		});
    }

    static async login(req, res) {
        let body = req.body;

        let user = await Users.findOne({
            email : body.email
        });

        if(user == null){
            return res.status(404).json({
                success: false,
                message: 'User not found',
                payload: []
            });
        }

        if(user.senha == body.senha){
            return res.status(200).json({
                success: true,
                message: 'Success',
                payload: [user]
            });
        }else{
            return res.status(403).json({
                success: false,
                message: 'Password not match',
                payload: []
            });
        }
    }

}

module.exports = UsersController;
