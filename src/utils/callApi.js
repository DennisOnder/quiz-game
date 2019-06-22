const axios = require("axios");
const { PORT } = require("../config/config");

module.exports = async (method, path, providedData = null, isLocal = true) => {
  const callPath = isLocal ? `http://localhost:${PORT}/api${path}` : path;
  try {
    const res = await axios[method](callPath, providedData);
    return {
      status: res.status,
      data: res.data
    };
  } catch (error) {
    console.error(error);
  }
};
