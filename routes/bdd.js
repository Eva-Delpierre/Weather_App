var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}


mongoose.connect(process.env.MONGO_DB,
    options,
    function(err){
        console.log(err);
    }
)

var citySchema = mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    temp_min: Number,
    temp_max: Number,
})

var cityModel = mongoose.model('cities', citySchema)

module.exports = cityModel;