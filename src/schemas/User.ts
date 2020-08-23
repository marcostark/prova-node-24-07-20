import * as mongoose from 'mongoose'

const UserSchemma = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        createdAt: {type: Date, default: Date.now}

    }
)

export default mongoose.model('User', UserSchemma);