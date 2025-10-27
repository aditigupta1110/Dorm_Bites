const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://varun:varun321@cluster0.g6l4vte.mongodb.net/database1?retryWrites=true&w=majority' 
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        
        if (err) console.log("---" + err)
        else {
            
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("food_cat");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            
        }
    })
};
