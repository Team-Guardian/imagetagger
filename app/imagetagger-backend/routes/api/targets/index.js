const mongoose = require('mongoose');
const router = require('express').Router();
const Target = mongoose.model('Target');


// POST /api/targets
router.post('/', (req, res) => {
    Target.findOneAndUpdate(
        {url: req.body.id},
        {
            $set: {
                x: req.body.x,
                y: req.body.y,
                w: req.body.w,
                h: req.body.h
            }
        },
        {
            upsert: true,
            new: true
            
        })
        .then((target) => {
           res.json(target);
        })
        .catch((err) => {
            res.send({err: err});
        });
});

// GET /api/targets
router.get('/', (req, res) => {
    Target.find()
        .then((targets) => {
            res.json({
                targets: targets,
                targets_count: targets.length
            });
        })
        .catch((err) => {
            res.send({err: err}); 
        });
});

// GET /api/targets/:id
router.get('/:id', (req, res) => {
    Target.findOne({url: req.params.id})
        .then((target) => {
            res.json({target: target});
        })
        .catch((err) => {
            res.send({err: err});
        });
});

// DELETE /api/target/:id
router.delete('/:id', (req, res) => {
    Target.findOneAndRemove({url: req.params.id})
        .then((target) => {
            res.json(target);
        })
        .catch((err) => {
            res.send({err: err});
        })
});

module.exports = router;