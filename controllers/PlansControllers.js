const Plans = require('../models/plans');
const PlansUser = require('../models/userPlans');


class PlansController {
    static async insertPlan(req, res) {
        let body = req.body;

		let plan = new Plans();

        plan.nome = body.nome;
        plan.valueToSpend = body.valueToSpend;
        plan.price = body.price;
        plan.imageName = body.imageName;
        plan.imageFile = body.imageFile;
        plan.descr = body.descr;

        await plan.save();

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: [plan]
		});
    }

    static async getPlans(req, res) {
        let plans = new Plans();

        plans = await Plans.find();

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: plans
		});
    } 

    static async addPlanUser(req, res) {
        let body = req.body;

		let planUser = new PlansUser();

        planUser.plan_id = body.plan_id;
        planUser.user_id = body.user_id;
        planUser.valueToSpend = body.valueToSpend;

        await planUser.save();

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: [planUser]
		});
    }

    static async getPlansByUser(req, res) {
        let user = req.params;
        let plansUser = new PlansUser();

        plansUser = await PlansUser.find({ 
            user_id : user
        });

        if(plansUser.length == 0 ){
            return res.status(404).json({
                success: false,
                message: 'not found plan for this user',
                payload: []
            });
        }

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: plans
		});
    } 

    static async putPlansSpendUser(req, res) {
        let body = req.body;

        let planUser = new PlansUser();

        planUser = await PlansUser.find({ 
            user_id : body.user_id,
            plan_id : body.plan_id,
        });

        if(planUser.length == 0 ){
            return res.status(404).json({
                success: false,
                message: 'not found user or plan',
                payload: []
            });
        }

        planUser.valueToSpend = body.valueToSpend;

        await planUser.save();

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: planUser
		});

    }

}

module.exports = PlansController;
