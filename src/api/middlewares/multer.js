import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import s3 from '../config/awsS3';

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, next) => {
            next(null, path.join(__dirname, '../../assets/images/uploads'));
        },
        filename: (req, file, next) => {
            next(null, `${Date.now()}-${file.originalname}`);
        }
    }),
    s3: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, next) => {
            next(null, `${Date.now()}-${file.originalname}`);
        }
    })
};

const fileFilter = (req, file, next) => {
    const isAccepted = ['image/png', 'image/jpg', 'image/jpeg']
        .find(acceptedFormat => acceptedFormat == file.mimetype);

    if (isAccepted) {
        return next(null, true);
    }

    return next(new Error("Tipo de imagem inválida!"));
};

export default multer({
    storage: storageTypes[process.env.STORAGE_TYPE],
    fileFilter
});
