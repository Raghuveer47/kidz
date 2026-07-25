const mongoose = require('mongoose');

const curriculumSchema = new mongoose.Schema({
    classLevel: { type: Number, required: true }, // e.g., 1 to 10
    category: {
        type: String,
        enum: ['COMPUTER BASICS', 'CREATIVE TOOLS', 'PROGRAMMING', 'INTERNET', 'AI'],
        required: true
    },
    topics: [{ type: String }],
});

module.exports = mongoose.model('Curriculum', curriculumSchema);
