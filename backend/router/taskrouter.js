const express = require('express');

const router = express.Router();

const {createtask,gettasks,getsingle,update,deletetask} = require("../controlles/taskcontrolles")

router.post('/',createtask);
router.get('/',gettasks)
router.get('/:id',getsingle)
router.patch('/:id',update)
router.delete('/:id',deletetask)
module.exports = router;