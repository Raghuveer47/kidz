const express = require('express');
const router = express.Router();
const HomePageContent = require('../models/HomePageContent');

// Get all home page sections
router.get('/', async (req, res) => {
    try {
        const sections = await HomePageContent.find();
        // Transform into an object keyed by section name
        const data = sections.reduce((acc, current) => {
            acc[current.section] = current.data;
            return acc;
        }, {});
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Admin ONLY: update an individual section
// Authentication middleware can be added here
router.post('/:section', async (req, res) => {
    try {
        const { section } = req.params;
        const { data } = req.body;

        const updatedContent = await HomePageContent.findOneAndUpdate(
            { section },
            { data, updatedAt: Date.now() },
            { new: true, upsert: true }
        );
        res.json(updatedContent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
