const { User, Thought } = require('../models')

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            console.log(thoughts);
            res.json(thoughts)
            
        } catch (err) {
            res.status(500).json(err);
            console.log(err)
        }
    },

    async getSingleThought(req, res) {
        try{
            const thought = await Thought.findOne({ _id: req.params.userId })
            
            res.json(thought)
        } catch (err){
            res.status(500).json(err);
        }
    },

    async createThought(req, res){
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}