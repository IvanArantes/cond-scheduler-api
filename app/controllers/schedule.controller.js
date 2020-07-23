var express = require('express')
const router = express.Router();
var service = require('../services/scheduleService');


router.post('/', (req, res) => {
    console.log(req.body);
    
    let saved = service.save(req.body);
    res.send(saved);
  });

router.get('/', async (req, res) => {
   const list = await service.findAll();
   console.log(list);
    res.send(list);
})


module.exports = router;