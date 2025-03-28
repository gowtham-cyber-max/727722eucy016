const { prime } = require('../external/externalController');
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
async function addUser(req,res){
    try{
        const user=new numberModel(req.body);
        const result=await user.save();
        res.json(user);
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
}
async function replace(id,number){
    try{
        const user=await numberModel.findOne({user_id:id});
        user.number=number;
        await user.save();
        return user.number;
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}

async function change(req, res) {
    try {
        const { query } = req.query;
        if (!query || typeof query !== "string") {
            return res.status(400).json({ error: "Invalid query" });
        }

        const type = query.charAt(0).toLowerCase();
        const prevState = await getNumber(1);
        let newNumbers = [];

        switch (type) {
            case 'e':
                newNumbers = await prime();
                break;
            case 'r':
                newNumbers = await prime();
                break;
            case 'f':
                newNumbers = await prime();
                break;
            case 'p':
                newNumbers = await prime();
                break;
            default:
                return res.status(400).json({ error: "Invalid type" });
        }

        const newNumberAvg = newNumbers.length ? newNumbers.reduce((a, b) => a + b, 0) / newNumbers.length : 0;
        let curState = [...new Set([...prevState, ...newNumbers])];

        if (curState.length > 10) {
            curState = curState.slice(-10);
        }

        await replace(1, curState);

        return res.json({
            windowPrevState: prevState,
            windowCurState: curState,
            numbers: newNumbers,
            avg: newNumberAvg
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports={addUser,getNumber,change}