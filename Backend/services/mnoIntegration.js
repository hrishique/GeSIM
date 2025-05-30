const axios = require('axios');

const MNO_BASE_URL = process.env.MNO_BASE_URL;
const API_KEY = process.env.MNO_API_KEY;

exports.activateEsim = async (planId) => {
  try {
    const response = await axios.post(`${MNO_BASE_URL}/activate-esim`, {
      planId,
    }, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("MNO Activation Error", err);
    throw new Error("Failed to activate eSIM");
  }
};
