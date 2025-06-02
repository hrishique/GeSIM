const logger = {
    info: (message, data) => {
      console.log(`[INFO] ${message}`, data || '');
    },
    error: (message, data) => {
      console.error(`[ERROR] ${message}`, data || '');
    },
    debug: (message, data) => {
      if (process.env.NODE_ENV === 'development') {
        console.debug(`[DEBUG] ${message}`, data || '');
      }
    },
  };
  
  module.exports = logger;
  