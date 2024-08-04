const express = require('express');
const labtest = require('../models/labtest');
const Labtest = require('../models/labtest');

const router = express.Router();

//save labtests
router.post('/labtest/save', (req, res) => {
  let newLabtest = new Labtest(req.body);

  newLabtest.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: 'Labtest saved successfully',
    });
  });
});

//get labtests
router.get('/labtest', (req, res) => {
    Labtest.find().exec((err, labtest) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingLabtest: labtest,
    });
  });
});

//get a specific labtests
router.get('/labtest/:id', (req, res) => {
  let Labtest = req.params.id;

  labtest.findById(Labtest, (err, labtest) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      labtest,
    });
  });
});

//update labtests
router.put('/labtest/update/:id', (req, res) => {
  labtest.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: 'Updated Successfully',
      });
    }
  );
});
//delete labtests
router.delete('/labtest/delete/:id', (req, res) => {
  labtest.findByIdAndRemove(req.params.id).exec((err, deletedlabtest) => {
    if (err)
      return res.status(400).json({
        message: 'Delete unsuccessful',
        err,
      });
    return res.json({
      message: 'Delete successful',
      deletedlabtest,
    });
  });
});

module.exports = router;
