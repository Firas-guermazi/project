const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
{   title: { type: String,required: true},
    description: { type: String,required: true },
    day: {   type: String,
    
    },
    duration: { type: Number, min: 0 }, 
    intencity: { type: String},
    image: { type: String}

}
);

module.exports = mongoose.model('Training', courseSchema)