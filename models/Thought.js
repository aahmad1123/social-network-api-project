const {Schema, Types, model} = require('mongoose')
const reactionSchema = require('./Reaction')
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
            virtuals: true,
            getters: true
        }
    }
)

thoughtSchema.virtual('reactionCount').get(function (){
    return thoughtSchema.reactions.length
})
//if thoughtSchema.reactions.length doesn't work, change thoughtSchema to this

const Thought = model('thoughts', thoughtSchema)

module.exports = Thought