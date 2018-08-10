const router = require("express").Router();
const deceasedController = require("../../controllers/deceasedController");

// Matches with "/api/books"
router.route("/")
    
  .get(deceasedController.findAll)
  .post(deceasedController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(deceasedController.findById)
  .put(deceasedController.update)
  .delete(deceasedController.remove);

module.exports = router;
