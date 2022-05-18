const multer = require("multer");
const imageFilter = (req, file, cb) => {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var uploadFile = multer({ storage: storage, fileFilter:imageFilter});
module.exports = uploadFile;