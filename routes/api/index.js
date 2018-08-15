const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const profilesRoutes = require("./profiles");
const postsRoutes = require("./posts");



// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/profiles", profilesRoutes);
router.use("/posts", postsRoutes);



module.exports = router;
