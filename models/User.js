const {Schema, Types, model} = require('mongoose')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match : [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Valid Email not found']
        },

        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thoughts'
        }],

        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    {
        toJSON:{
            virtuals: true
        }
    }
)

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const User = model('user', userSchema)

module.exports = User
