const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getSingleThought,
    // updateThought,
    // deleteThought,
} = require('../../controllers/thoughtControllers.js');

router.route('/').get(getAllThoughts).post(createThought);

router
    .route('/:ThoughtId')
    .get(getSingleThought)
    // .put(updateThought)
    // .delete(deleteThought);

module.exports = router;