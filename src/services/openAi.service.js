/**
 * Service to interact with OpenAI completion API.
 */

const { openAi: openAiConfig } = require('../config/config');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: openAiConfig.apiKey,
});
const openai = new OpenAIApi(configuration);

const DEFAULT_MODEL = 'text-davinci-003';

const getCompletions = async (prompt, model) => {
    return await openai.createCompletion({
        prompt,
        model,
        max_tokens: 5,
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = {
    getCompletions,
    DEFAULT_MODEL,
};
