import multer from 'multer';


export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../frontend/public/uploads');
    },
    filename: (req, file, cb) => {
      cb(null, String(Math.ceil(Math.random() * 999999999 + 9999))+'.'+file.originalname.split('.').at(-1));
    }
  });
  
  export const upload = multer({
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024 // 4MB limit per file
    }
  });