const { default: connectDB } = require("@/db")
import Hotel from '@/models/hotel-model'
const handler = async (req, res) => {
    connectDB();
    if (req.method === "POST") {
        const newHotel = new Hotel(req.body);
        const result = await newHotel.save();
        
        res.status(201).json({ msg: "Hotels Added", result })
    }


};
export default handler;