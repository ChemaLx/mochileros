/**
 * @description se definen las validaciones para guardar las imagenes entrantes
 *
 * @author jose.maria.lara, PowerX Lab
 * @version 1.0.0, 24/11/2021
 */
import { diskStorage } from "multer";
import { v4 as uuidv4 } from "uuid";

const fs = require('fs')
/* const fileType = require('file-type') */

import path = require('path');

type validFileExtension = 'png' | 'jpg' | 'jpeg'
type validMimeType = 'image/png' | 'image/jpg' | 'image/jpeg'

const validFileExtensions: validFileExtension[] = ['png', 'jpg', 'jpeg']
const validMimeTypes: validMimeType[] = ['image/png', 'image/jpg', 'image/jpeg']

export const saveImageToStorage = {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const fileExtension: string = path.extname(file.originalname)
            const fileName: string = uuidv4() + fileExtension
            cb(null, fileName)
        }
    }),
    fileFilter: (req, file, cb) => {
        const allowedMime: validMimeType[] = validMimeTypes
        allowedMime.includes(file.mimetype) ? cb(null, true) : cb(null, false)
    }
} 