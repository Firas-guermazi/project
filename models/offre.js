const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new mongoose.Schema(
{
fullname:{type: String, required: true, unique: true},
email:{type: String, required: true, unique: true},
phone: { type:Number},
}
);

module.exports = mongoose.model('offer', offerSchema)
