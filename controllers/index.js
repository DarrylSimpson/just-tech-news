const router = require('express').Router();
const apiRoutes = require('./api');
const homeroutes = require('./home-routes.js');

router.use('/', homeroutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
