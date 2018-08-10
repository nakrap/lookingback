const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const deceasedRoutes = require("./deceased");
const postsRoutes = require("./posts");



// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/deceased", deceasedRoutes);
router.use("/posts", postsRoutes);



module.exports = router;
