class PortfolioError extends Error {
  constructor(status, file, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PortfolioError);
    }
    this.name = 'PortfolioError';
    this.status = status;
    this.date = new Date();
    this.file = file;
  }
}

module.exports = PortfolioError;
