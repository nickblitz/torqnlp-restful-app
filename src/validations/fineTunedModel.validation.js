const Joi = require('joi');

const getModels = {
  query: Joi.object().keys({}),
};

const createCompletion = {
  body: Joi.object().keys({
    prompt: Joi.string().required(),
  }),
  params: Joi.object().keys({
    modelId: Joi.string().required(),
  }),
};

const createModel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    dataSetFile: Joi.string().required(),
  }),
  params: Joi.object().keys({
    modelId: Joi.string().required(),
  }),
};

const deleteModel = {
  params: Joi.object().keys({
    modelId: Joi.string().required(),
  }),
};

module.exports = {
    getModels,
    createCompletion,
    createModel,
    deleteModel,
};
