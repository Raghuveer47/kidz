const HomeService = require('./home.service');
const { asyncHandler } = require('../middleware/errorHandler');

class HomeController {
  static getPublic = asyncHandler(async (req, res) => {
    const data = await HomeService.getPublic();
    res.status(200).json(data);
  });

  static listSections = asyncHandler(async (req, res) => {
    const items = await HomeService.listSections();
    res.status(200).json({
      success: true,
      data: {
        items,
        allowedSections: HomeService.allowedSections()
      }
    });
  });

  static updateSection = asyncHandler(async (req, res) => {
    const updated = await HomeService.updateSection(req.params.section, req.body.data);
    res.status(200).json({
      success: true,
      message: 'Section updated',
      data: updated
    });
  });
}

module.exports = HomeController;
