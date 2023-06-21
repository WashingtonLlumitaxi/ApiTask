const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)

    },
    filename: function (req, file, cb) {
        //genera nombres aleatoreos para que nunca se repitan los nombres
        //TODO: mi-cv.pdf mi-foto-png mi-video.mp4
        const ext = file.originalname.split('.').pop(); //TODO: ["name","png"]  pop agrarra el ultimo valor del array a diferencia de shift
        const filename = `file-${Date.now()}.${ext}`; //asigna el nombre al archivo
        cb(null, filename)
    },
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;