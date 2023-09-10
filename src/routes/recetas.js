const router = require("express").Router();

router.get("/", async (req, res) => {
  try {

    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});


// router.post("/", async (req, res) => {
// });

// router.delete("/:id", async (req, res) => {
// });

module.exports = router;