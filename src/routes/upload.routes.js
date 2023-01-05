import { Router } from "express";
import multer from "multer";

const router = Router()

const almacenar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})

export const upload = multer({ storage: almacenar})

export const uploads = upload.single('MyFile')

export const uploadFile = async (req, res) => {
    res.send({ data: 'Archivo Enviado' })

}

router.post( '/', uploads, uploadFile)

router.get('/:img', function(req, res){
    res.sendFile( process.cwd()+`/upload/${req.params.img}` );
}); 

export default router