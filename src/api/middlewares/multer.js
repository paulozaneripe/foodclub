import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, path.join(__dirname, '../../assets/images/uploads'));
    },
    filename: (req, file, next) => {
        next(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, next) => {
    const isAccepted = ['image/png', 'image/jpg', 'image/jpeg']
        .find(acceptedFormat => acceptedFormat == file.mimetype);

    if (isAccepted) {
        return next(null, true);
    }

    return next(new Error("Tipo de imagem inválida!"));
};

export default multer({
    storage,
    fileFilter
});
