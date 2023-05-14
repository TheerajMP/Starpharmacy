const express = require('express');
const router = express.Router();
const userController=require('../controller/usercontroller')
const auth=require('../auth')


router.post('/createUser',userController.createUser)

router.post('/login',userController.Login)

router.get('/fetchuser/:id',auth,userController.fetchUser)
router.post('/postmedicine',userController.postMedicine)
router.post('/postsup',userController.postSup)
router.get('/display',userController.display)
// router.post('/applyjob',userController.applyJob)
router.get('/disp',userController.disp)
router.post('/postmed',userController.postMed)
router.get('/displayy',userController.displayy)
router.delete('/postmedicine/:id/',userController.deleteUser)
router.patch('/postmedicine/:id/',userController.updateUser)

router.get('/allPostMed',userController.allPostMed)
router.put('/updateStatus/:id',userController.updateStatus)

router.put('/updateExpiry/:id',userController.updateExpiry)

// router.get('/fetchCurrentUser',userController.fetchCurrentUser)

module.exports = router;