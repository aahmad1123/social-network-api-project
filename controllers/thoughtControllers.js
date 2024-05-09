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
            const thought = await Thought.findOne({ thoughtId: req.params.thoughtId })
            console.log(thought)
            res.json(thought)

        } catch (err){
            console.log(err)
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            console.log(thought)
            
            const user = await User.findByIdAndUpdate(
                { _id: req.body.userId, },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            ).populate('thoughts');
    
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try{
            const thought = await Thought.findOneAndDelete({ thoughtId:req.params.thoughtId });
            res.json(thought);
            return 1
        }catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                { thoughtId: req.params.thoughtId },
                { thoughtText: req.body.thoughtText},
                { new: true }
            )
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
            return 1
        } catch (err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    async addReaction(req, res) {
        try{
            const reaction = await Thought.findOneAndUpdate(
                { thoughtId: req.params.thoughtId }
                
            )
        } catch (err){
            console.log(err);
            return res.status(500).json(err);
    }
    }
}