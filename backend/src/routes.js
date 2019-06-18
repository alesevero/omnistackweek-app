const express = require('express');
const multer = require('multer');
const uploadConfigs = require('./config/upload');
const PostController = require('./controller/PostController');
const LikeController = require('./controller/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfigs);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;