const express = require('express');
const {
  getProfile,
  updateProfile,
  setProfilePrivacy,
  listPublicProfiles,
  viewProfile
} = require('../controllers/profileController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getProfile);
router.put('/', verifyToken, updateProfile);
router.put('/privacy', verifyToken, setProfilePrivacy);
router.get('/public', listPublicProfiles);
router.get('/:userId', verifyToken, viewProfile);

module.exports = router;
