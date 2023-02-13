const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { fineTunedModelService, openAiService } = require('../services');
const modelListMock = require('../mock/modelList');


const getModels = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'role']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    // const result = await fineTunedModelService.queryModels(filter, options);
    res.send(modelListMock);
});

const createModel = catchAsync(async (req, res) => {
    const model = await fineTunedModelService.createModel(req.body);
    res.status(httpStatus.CREATED).send(model);
});

const deleteModel = catchAsync(async (req, res) => {
    await fineTunedModelService.deleteModelById(req.params.modelId);
    res.status(httpStatus.NO_CONTENT).send();
});

const createCompletion = catchAsync(async (req, res) => {
  // TODO: Replace with modelId from req.params.modelId
  const openAiCompletionResult = await openAiService.getCompletions(req.body.prompt, openAiService.DEFAULT_MODEL);
  res.status(httpStatus.OK).send({result: openAiCompletionResult.data});
});


module.exports = {
  getModels,
  createModel,
  deleteModel,
  createCompletion,
};