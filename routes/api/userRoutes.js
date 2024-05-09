const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userControllers.js');

router.route('/').get(getAllUsers).post(createUser);

router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router      
    .route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend)
module.exports = router;
