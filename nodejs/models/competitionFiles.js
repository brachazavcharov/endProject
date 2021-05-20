const mongoose = require("mongoose");
const competitionFilesSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 15,
        lowercase: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
        lowercase: true,
        trim: true
    },
    prize: {
        type: String,
        minLength: 2,
        maxLength: 15,
        lowercase: true,
        trim: true
    },
    winningRecipeId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Recipe",
        required: true
    },
    endDate: {
        type: Number
    }
})
const CompetitionFiles = mongoose.model("CompetitionFiles", competitionFilesSchema);
module.exports = CompetitionFiles;