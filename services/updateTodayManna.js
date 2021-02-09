const { TodayManna } = require('../models');
const { getTodayManna } = require('./getTodayManna_v2');
const { logger } = require('../config/winston');

async function updateTodayManna() {
  try {
    const today_manna = await getTodayManna();
    if (today_manna) {
      await TodayManna.create({
        verse: today_manna.verse,
        contents: today_manna.contents,
      });
      return true;
    } else {
      return false;
    }
  } catch (err) {
    logger.error(err);
  }
}

module.exports.updateTodayManna = updateTodayManna;
