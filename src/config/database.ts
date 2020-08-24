import * as mongoose from 'mongoose'
class Database {
    
    private baseUrl = 'mongodb://127.0.0.1/db-user'
    private connection

    construct(){}

    createConnection(){
        mongoose.connect(this.baseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        this.logger(this.baseUrl)
    }
    

    logger(uri) {
        this.connection = mongoose.connection
        this.connection.on('connected', () => console.log("Database connection successfully established"))
        this.connection.on('error', err => console.error.bind(console, "Error connecting to database: " + err))
    }
}

export default Database