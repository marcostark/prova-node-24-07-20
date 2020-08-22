import mongoose, { Document, Schema } from 'mongoose'

type User = Document & {};

const UserSchemma = new Schema(
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

export default mongoose.model<User>('User', UserSchemma);