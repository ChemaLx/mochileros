/**
 * @description en esta seccion se definen las estructuras de datos para las salidas de la API
 *
 * @author jose.maria.lara, PowerX Lab
 * @version 1.0.0, 24/11/2021
 */

import { Document } from 'mongoose'
interface Product extends Document{
    readonly name: string
    readonly description: string
    readonly imageURL: string
    readonly price: number
    readonly createdAt: Date
}
interface Image extends Document {
    title: string
    description: string
    imagePath: string
}
export { Product, Image }