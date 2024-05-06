const { User, Thought } = require('../models')

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find()
            console.log(users);
            res.json(users)
            
        } catch (err) {
            res.status(500).json(err);
            console.log("you are hitting an error")
        }
    },

    async getSingleUser(req, res) {
        try{
            const user = await User.findOne({ _id: req.params.userId })
            
            res.json(user)
        } catch (err){
            res.status(500).json(err);
        }
    },

    async createUser(req, res){
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try{
            const user = await User.findOneAndRemove({ _id:req.params.userId });
            res.json(user);
            return 1
        }catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    async updateUser(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.studentId },
                { username: req.body.username},
                { new: true }
            )
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user)
            return 1
        } catch (err){
            console.log(err);
            return res.status(500).json(err);
        }
    }
}