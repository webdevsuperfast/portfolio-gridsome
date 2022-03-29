const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  WP_SITE_URL: process.env.WP_SITE_URL,
  CF7_API_URL: process.env.CF7_API_URL,
};
