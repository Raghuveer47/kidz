const multer = require('multer');
const { asyncHandler } = require('../middleware/errorHandler');
const { uploadImage } = require('../utils/cloudinary');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'), false);
  }
});

class UploadController {
  static uploadSingleImage = [
    upload.single('image'),
    asyncHandler(async (req, res) => {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: { message: 'No image file provided' }
        });
      }

      const folder = req.body.folder || 'kidscodingai/uploads';
      const result = await uploadImage(req.file.buffer, {
        folder,
        transformation: [{ quality: 'auto' }, { fetch_format: 'auto' }]
      });

      res.status(200).json({
        success: true,
        message: 'Image uploaded successfully',
        data: result
      });
    })
  ];

  static uploadBase64Image = asyncHandler(async (req, res) => {
    const { image, folder } = req.body;
    if (!image) {
      return res.status(400).json({
        success: false,
        error: { message: 'No image data provided' }
      });
    }

    const result = await uploadImage(image, {
      folder: folder || 'kidscodingai/uploads',
      transformation: [{ quality: 'auto' }, { fetch_format: 'auto' }]
    });

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: result
    });
  });
}

module.exports = UploadController;
