const numberModel=require('./model/numberModel')

async function getNumber(id){
    try{
        const user=await numberModel.find({user_id:id});
        return user.number;
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
async function addNumber(req,res){
    try{
        const user=new numberModel(req.body);
        const result=await user.save();
        res.json(user);
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
}

module.exports={addNumber,}