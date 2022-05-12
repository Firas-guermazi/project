const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calenderSchema = new mongoose.Schema(

{ date: { type: String, required: true },
trainingSession: { type: Schema.Types.ObjectId, ref: 'Training', required: true },
users: [{ type: Schema.Types.ObjectId, ref: "User", required: true }]
}
);

module.exports = mongoose.model('calender', calenderSchema)