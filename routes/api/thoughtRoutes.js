const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
} = require('../../controllers/thoughtControllers.js');

router.route('/').get(getAllThoughts).post(createThought);

router
    .route('/:ThoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)
router
    .route('/:thoughtId/reactions')
    .post(addReaction)



    // .route('/:thoughtId/reactions/:reactionId')

module.exports = router;