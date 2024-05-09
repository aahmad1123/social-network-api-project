const {Schema, Types, model} = require('mongoose')
const reactionSchema = require('./Reaction')
const dayjs = require('dayjs')
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dayjs(timestamp).format("MM/DD/YYYY")
        },

        username: {
            type: String,
            required: true
        },

        reactions: [
            reactionSchema
        ]
    },
    {
        toJSON: {
            getters: true
        
        },
        id: false
    }
)

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length
})
//if thoughtSchema.reactions.length doesn't work, change thoughtSchema to this

const Thought = model('thoughts', thoughtSchema)

module.exports = Thought