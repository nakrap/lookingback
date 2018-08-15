const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/profiles"
router.route("/")
    
  .get(profilesController.findAll)
  .post(function(req, res) {
    let profile = profilesController.create(req, res);
    console.log(profile)
  });

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(profilesController.findById)
  .put(profilesController.update)
  .delete(profilesController.remove);

router.route("/:firstName/:lastName")
  .get(profilesController.searchProfiles);

module.exports = router;
