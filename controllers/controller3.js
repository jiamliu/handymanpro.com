const { Handyman } = require('../models');

const getAllHandyman = async (req ,res) => {
    try {
        const handyman = await Handyman.find()
        res.json(handyman)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getHandymanById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const handyman = await Handyman.findById(id);
        if (handyman) {
            return res.json(handyman);
        }
        return res.status(404).send('Handyman not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createHandyman = async (req, res) => {
    try {
        const handyman = await new Handyman(req.body);
        await handyman.save();
        return res.status(201).json({handyman,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateHandyman = async (req, res) => {
    try {
        let { id } = req.params;
        let handyman = await Handyman.findByIdAndUpdate(id, req.body, { new: true })
        if (handyman) {
            return res.status(200).json(handyman)
        }
        throw new Error("Handyman not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteHandyman = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Handyman.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Handyman deleted");
        }
        throw new Error("Handyman not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllHandyman,
    getHandymanById,
    createHandyman,
    updateHandyman,
    deleteHandyman
}