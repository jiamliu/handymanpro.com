const { Pns } = require('../models');

const getAllPns = async (req ,res) => {
    try {
        const pns = await Pns.find()
        res.json(pns)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getPnsById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const pns = await Pns.findById(id);
        if (pns) {
            return res.json(pns);
        }
        return res.status(404).send('Problem and Solution not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPns = async (req, res) => {
    try {
        const pns = await new Pns(req.body);
        await pns.save();
        return res.status(201).json({pns,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updatePns = async (req, res) => {
    try {
        let { id } = req.params;
        let pns = await Pns.findByIdAndUpdate(id, req.body, { new: true })
        if (pns) {
            return res.status(200).json(pns)
        }
        throw new Error("Problems and Solution not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePns = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Pns.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Problem and Solution deleted");
        }
        throw new Error("Problem and Solution not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPns,
    getPnsById,
    createPns,
    updatePns,
    deletePns
}