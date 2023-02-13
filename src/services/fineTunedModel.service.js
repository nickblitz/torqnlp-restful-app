const { firestore } = require('firebase-admin');

/**
 * Query for models
 * @param {Object} filter - filter
 * @returns {Promise<QueryResult>}
 */
const queryModels = async (filter, options) => {
    const models = await firestore().collection('model').get();
    return models;
};

module.exports = {
    queryModels,
};