const express = require('express');
const docsRoute = require('./docs.route');
const fineTunedModelRoute = require('./fineTunedModel.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/fineTunedModel',
    route: fineTunedModelRoute,
  },
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
