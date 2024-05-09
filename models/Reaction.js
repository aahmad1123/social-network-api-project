const {Schema, Types, model} = require('mongoose')
const dayjs = require('dayjs')

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new ObjectId(),
        },
         reactionBody: {
            type: String,
            required: true,
            max_length: 280
         },
         username:{
            type: String,
            required: true
         },
         createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => dayjs(timestamp).format("MM/DD/YYYY")
            //double check dayjs format
         }
    },
    {
       toJSON: {
        getters: true
       } 
    }
)

module.exports = reactionSchema