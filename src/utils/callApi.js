const axios = require("axios");
const { PORT } = require("../config/config");

module.exports = async (method, path, providedData = null) => {
  try {
    const res = await axios[method](
      `http://localhost:${PORT}/api${path}`,
      providedData
    );
    return {
      status: res.status,
      data: res.data
    };
  } catch (error) {
    console.error(error);
  }
};
