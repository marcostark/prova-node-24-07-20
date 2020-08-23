import * as mongoose from 'mongoose'
import { UserModel } from '../models/UserModel';

type User = mongoose.Document & {};

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