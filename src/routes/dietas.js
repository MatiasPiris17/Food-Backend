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
//   try {

//     res.status(200).send();
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error.message);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     res.status(200).json();
//   } catch (error) {
//     console.log(error);
//     return res.status(400).send("Error al eliminar el personaje de favoritos");
//   }
// });

module.exports = router;