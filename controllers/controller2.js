const { Tool } = require('../models');

const getAllTools = async (req ,res) => {
    try {
        const tools = await Tool.find()
        res.json(tools)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getToolsById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const tools = await Tool.findById(id);
        if (tools) {
            return res.json(tools);
        }
        return res.status(404).send('Tools not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createTools = async (req, res) => {
    try {
        const tools = await new Tool(req.body);
        await tools.save();
        return res.status(201).json({tools,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateTools = async (req, res) => {
    try {
        let { id } = req.params;
        let tools = await Tool.findByIdAndUpdate(id, req.body, { new: true })
        if (tools) {
            return res.status(200).json(tools)
        }
        throw new Error("Tools not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTools = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tool.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Tools deleted");
        }
        throw new Error("Tools not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTools,
    getToolsById,
    createTools,
    updateTools,
    deleteTools
}