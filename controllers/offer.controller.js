const offerSchema =require('../models/offer')


// adding new trainig
exports.offer =async (req, res) => {
    const {email, phone,fullname} = req.body;
    try {
    const personChooseOffer = new offerSchema(req.body)
    await personChooseOffer.save();
    res.status(200).send({msg: ' person who choose an offer added successfully'})
    } catch (error) {  res.status(400).send({msg:"could not SAVE"})
}
    }
    


exports.displayPersons =  async (req,res)=>{
    try {
    const Persons =  await offerSchema.find();
        res.status(200).send({msg:"list",Persons});
    } catch (error) {
        res.status(500).send({msg:"could not list"})
    }
}

exports.deletePersons =  async (req,res)=>{
    const {ID} = req.params
    try {
    const removedPerson = await offerSchema.findByIdAndDelete(ID)
    res.status(200).send({msg:'successfully removed contact', removedPerson})
    } catch (error) {
    res.status(500).send({msg:'cannot be removed', error}) 
    }
    }