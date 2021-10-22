/* eslint-disable no-console */

/**
 * Generic Logger
 *
 * console.log/warn/error in dev mode, logs to Rollbar in production.
 *
 * In Quasar boot.js:
 *    import Logger from 'src/library/utils/logger'
 *    window.Logger = Logger
 *
 * Then anywhere in your code, use like console
 *    Logger.info("someVar ", myVar)
 *    Logger.error("someError ", error)
 *    Logger.warn("someWarning ", warning)
 *
 * */
const log = (consoleMethod, RollbarMethod, ...logItems) => {
  // disable logging when running Jest;
  // if (process.env.JEST_WORKER_ID) return;

  /**
       * determines production server by domain, change check to process.env if needed.
       * only logs warn and error to Rollbar to avoid burning through quota.
       * */
  if (window.location.href.includes('vanoord.com') && ['warn', 'error'].includes(RollbarMethod)) {
    window.Rollbar[RollbarMethod](...logItems);
  } else {
    console[consoleMethod](...logItems);
  }
};

export default {
  info(...logItems) {
    log('log', 'info', ...logItems);
  },
  error(...logItems) {
    log('error', 'error', ...logItems);
  },
  warn(...logItems) {
    log('warn', 'warning', ...logItems);
  },
};
