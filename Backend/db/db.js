const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect("mongodb+srv://bhavay:bhavay12345@cluster0.fvcyxit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}


module.exports = connectToDb;