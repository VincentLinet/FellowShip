const config = require("config");
const mongoose = require("mongoose");
const mongodbURI = config.get('databases.mongoDB.uri') || 'null';

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
    console.log('Connection to mongo database established.')
});

mongoose.connection.on('reconnected', () => {
    console.log('Connection to mongo database reestablished.')
});

mongoose.connection.on('disconnected', () => {
    console.log('Connection to mongo database disconnected.')
});

mongoose.connection.on('close', () => {
    console.log('Connection to mongo database closed.')
});

mongoose.connection.on('error', (error) => {
    console.error('ERROR: ' + error)
});

const mongoConnect = async (dbNAme) => {
    await mongoose.connect(mongodbURI + dbNAme, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

module.exports = {
    mongoConnect,
};
