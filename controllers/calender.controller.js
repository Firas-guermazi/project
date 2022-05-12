const calenderSchema=require('../models/calender')

// adding new calender for coach

exports.addNewCalender =async (req, res) => {
    const {users, day, trainingSession} = req.body;
    try {
    const find = await calenderSchema.findOne({userID:userID});
    if (find){
    res.status(400).send({msg:"this user already booked"})
    }
    const calender = new calenderSchema(req.body)
    await calender.save();
    res.status(200).send({msg: 'added successfully', token})
    } catch (error) {
    }
    }