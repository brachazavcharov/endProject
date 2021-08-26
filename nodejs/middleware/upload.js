const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const storage = new GridFsStorage({
    url: process.env.DB,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, res) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const fileName = `${Date.now()}-any-name-${file.originalName}`
            return fileName;
        }
        return {
            bucketName: 'photos',
            fileName: `${Date.now()}-any-name-${file.originalName}`
        };
    }
});
module.exports = multer({ storage });