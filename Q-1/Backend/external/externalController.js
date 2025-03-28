const axios=require('axios')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });


const prime = async (req, res) => {
  try {
    const response = await axios.get(process.env.API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    console.log(response.data.numbers);
    return response.data.numbers;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports={prime}