const mongoose = require('mongoose');

const homePageContentSchema = new mongoose.Schema({
    section: { type: String, required: true }, // e.g., 'scrollable_images', 'counters', 'updates', 'top_performers', 'testimonials', 'quotes'
    data: { type: mongoose.Schema.Types.Mixed, required: true }, // Flexible JSON for the section content
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HomePageContent', homePageContentSchema);
