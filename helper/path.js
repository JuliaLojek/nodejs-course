const path = require('path');

// this will return the path to the main process file (app)
module.exports = path.dirname(require.main.filename);