const express = require("express");
const Ninja = require("../models/ninja")

// setup router
const router = express.Router();

// dont need to add /api/

// get a list of ninjas
router.get("/ninjas", (req, res, next) => {

  const lng = parseFloat(req.query.lng);
  const lat = parseFloat(req.query.lat);
  Ninja.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [lng, lat]
        },
        distanceField: "distance",
        maxDistance: 300000, // 300 KM
        spherical: true
      }
    }
  ])
    .then(ninjas => {
      if (ninjas.length === 0) {
        return res.send({
          message: "maxDistance is too small, or your query params {lng, lat} are incorrect."
        });
      }
      res.send(ninjas);
    })
    .catch(next);
});

// add new ninjas

router.post("/ninjas", (req, res, next) => {
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja)
  }).catch(next);
});

// update a nijas in the db

router.put("/ninjas/:id", (req, res, next) => {
  const id = req.params.id;
  Ninja.findByIdAndUpdate(id, req.body).then(() => {
    Ninja.findOne({ _id: id }).then((ninja) => {
      res.send(ninja);
    })
  }).catch(next);
});

// delete
router.delete("/ninjas/:id", (req, res, next) => {
  const id = req.params.id; // get id
  Ninja.findByIdAndDelete(id).then((ninja) => {
    res.send(ninja);
  }).catch(next);

});

module.exports = router;
