const cloudinary = require('cloudinary').v2;
const { ErrorHandler } = require('../middleware/errorHandler');
const env = require('../config/env');

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET
});

/**
 * Upload image to Cloudinary from buffer, data URI, or URL.
 */
const uploadImage = async (file, options = {}) => {
  try {
    if (!env.CLOUDINARY_CLOUD_NAME || !env.CLOUDINARY_API_KEY || !env.CLOUDINARY_API_SECRET) {
      throw new ErrorHandler(
        500,
        'Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.'
      );
    }

    const uploadOptions = {
      folder: options.folder || 'kidscodingai/uploads',
      resource_type: 'image',
      ...options
    };

    let uploadResult;

    if (Buffer.isBuffer(file)) {
      const dataUri = `data:image/jpeg;base64,${file.toString('base64')}`;
      uploadResult = await cloudinary.uploader.upload(dataUri, uploadOptions);
    } else if (typeof file === 'string') {
      if (file.startsWith('data:') || file.startsWith('http://') || file.startsWith('https://')) {
        uploadResult = await cloudinary.uploader.upload(file, uploadOptions);
      } else {
        const dataUri = `data:image/jpeg;base64,${file}`;
        uploadResult = await cloudinary.uploader.upload(dataUri, uploadOptions);
      }
    } else {
      throw new ErrorHandler(400, 'Invalid file format. Expected buffer or base64 string.');
    }

    return {
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      width: uploadResult.width,
      height: uploadResult.height,
      format: uploadResult.format
    };
  } catch (error) {
    if (error instanceof ErrorHandler) throw error;
    throw new ErrorHandler(500, `Error uploading image to Cloudinary: ${error.message}`);
  }
};

module.exports = { uploadImage, cloudinary };
