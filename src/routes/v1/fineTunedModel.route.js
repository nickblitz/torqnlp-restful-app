const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const fineTunedModelValidation = require('../../validations/fineTunedModel.validation');
const fineTunedModelController = require('../../controllers/fineTunedModel.controller');

const router = express.Router();

router
  .route('/')
  .get(validate(fineTunedModelValidation.getModels), fineTunedModelController.getModels);

router
  .route('/:modelId')
  .post(
    auth('manageFineTunedModels'), 
    validate(fineTunedModelValidation.createModel), 
    fineTunedModelController.createModel)
  .delete(
    auth('manageFineTunedModels'), 
    validate(fineTunedModelValidation.deleteModel), 
    fineTunedModelController.deleteModel);

router
  .route('/:modelId/completion')
  .post(
    // auth('canDoCompletions'), 
    validate(fineTunedModelValidation.createCompletion), 
    fineTunedModelController.createCompletion)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: FineTuendModels
 *   description: Fine-tuned models management and retrieval
 */

/**
 * @swagger
 * /fineTuendModels:
 *   get:
 *     summary: Get all users
 *     description: Only admins can retrieve all users.
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /fineTunedModels/{modelId}:
 *   post:
 *     summary: Create a fine-tuned model
 *     description: This will initiate the fine-tuning process. The fine-tuned model will 
 *                  be available after the process is complete.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: fineTunedModel id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               dataSetFile:
 *                 type: string
 *                 description: File name of the data set to use for fine-tuning
 *             example:
 *               name: My fine-tuned model
 *               dataSetFile: myDataSet.csv
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a fine-tuned model
 *     description: Delete a fine-tuned model.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: fineTunedModel id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
