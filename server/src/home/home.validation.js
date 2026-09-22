const { z } = require('zod');
const { validate } = require('../auth/auth.validation');
const { ALLOWED_SECTIONS } = require('./home.repository');

const updateSectionSchema = z.object({
  params: z.object({
    section: z.enum(ALLOWED_SECTIONS)
  }),
  body: z.object({
    data: z.any()
  })
});

module.exports = { updateSectionSchema, validate };
