const express = require('express');
const router = express.Router();
const Training = require('../../models/training.model');

// PUT /api/training
const trainingBatch = async (req, res) => {
    try {
        const { efficiencies } = req.query;

        if (!efficiencies) {
            return res.status(400).json({ message: 'Missing "efficiencies" parameter in query' });
        }

        console.log("Received efficiencies:", efficiencies);

        let parsed;
        try {
            parsed = JSON.parse(efficiencies);
        } catch (err) {
            return res.status(400).json({ message: 'Invalid JSON format for efficiencies' });
        }

        if (!Array.isArray(parsed) || parsed.length === 0) {
            return res.status(400).json({ message: 'Efficiencies must be a non-empty array' });
        }

        const efficiency = parsed[0];  // chỉ lưu phần tử đầu tiên (hoặc lặp nếu cần)

        const result = await Training.create({ Efficiency: efficiency });

        return res.status(200).json({ message: 'Saved successfully', data: result });

    } catch (error) {
        console.error('Error saving batch training data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { trainingBatch };
