/**
 * @description en esta seccion se crean los esquemas que se ocupan en mongo
 *
 * @author jose.sanchez, PowerX lab
 * @version 1.0.0, 24/11/2021
 */
import { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ImageSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
})

const LugarSchema = new Schema({
    cuidad: String,
    estado: String,
    descripcion: String,
    rating: Number,
    costoPromedio: Number,
    ambienteFamiliar: Number,
    lgbtFriendly: Number,
    puebloMagico: Boolean,
    semáforoCovid: Number,
    saturacionTuristica: Number,
    serviciosBasicos: Boolean,
    temporadaParaViajar: String,
    tiempoParaConocer: Number,
    seguridadParaMujeres: Number,
    cobertura: String,
    wifi: Boolean,
    ratingExtranjeros: Number,
    gastronomia: String,
    calidaddAire: Number,
    pros: [String],
    contras: [String],
    costoDia: Number,
    costoMes: Number,
    costoHospedaje: Number, 
    imageURL: String,
})
const ParqueSchema = new Schema({
    cuidad: String,
    nombre: String,
    ubicacion: String,
    descripcion: String,
    rating: Number,
    costoPromedio: Number,
    ambienteFamiliar: Number,
    mascotasFriendly: Number,
    seguridad: String,
    saturacionTuristica: Number,
    actividades: [String],
    imageURL: String,
})
const PlayasSchema = new Schema({
    cuidad: String,
    nombre: String,
    ubicacion: String,
    descripcion: String,
    rating: Number,
    costoPromedio: Number,
    ambienteFamiliar: Number,
    mascotasFriendly: Number,
    seguridad: String,
    saturacionTuristica: Number,
    actividades: [String],
    imageURL: String,
})
const ZonasArqueologicasSchema = new Schema({
    cuidad: String,
    nombre: String,
    ubicacion: String,
    descripcion: String,
    rating: Number,
    costoPromedio: Number,
    ambienteFamiliar: Number,
    mascotasFriendly: Number,
    seguridad: String,
    saturacionTuristica: Number,
    actividades: [String],
    imageURL: String,
})
const LocalComidaSchema = new Schema({
    cuidad: String,
    nombre: String,
    ubicacion: String,
    descripcion: String,
    rating: Number,
    costoPromedio: Number,
    ambienteFamiliar: Number,
    mascotasFriendly: Number,
    saturacionTuristica: Number,
    platosRecomendados: [String],
    wifi: Boolean,
    formasPago: [String],
    imageURL: String,
})
const BarSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    rating: Number,
    costoPromedio: Number,
    ambienteFamiliar: Number,
    lgbtFriendlyFriendly: Number,
    saturacionTuristica: Number,
    ambiente: Number,
    wifi: Boolean,
    formasPago: [String],
    imageURL: String,
})
const AntroSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    rating: Number,
    costoPromedio: Number,
    lgbtFriendlyFriendly: Number,
    saturacionTuristica: Number,
    ambiente: Number,
    wifi: Boolean,
    formasPago: [String],
    imageURL: String,
})
const PlazaComercialSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    rating: Number,
    costoPromedio: Number,
    lgbtFriendlyFriendly: Number,
    ambienteFamiliar: Number,
    mascotasFriendly: Number,
    saturacionTuristica: Number,
    wifi: Boolean,
    formasPago: [String],
    imageURL: String,
})
const MercadoSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    rating: Number,
    costoPromedio: Number,
    mascotasFriendly: Number,
    saturacionTuristica: Number,
    imageURL: String,
})

const HospedajeSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    rating: Number,
    costoPromedio: Number,
    mascotasFriendly: Number,
    lgbtFriendlyFriendly: Number,
    saturacionTuristica: Number,
    formasPago: [String],
    imageURL: String,
})

const GuiasTuristicosSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    rating: Number,
    costoPromedio: Number,
    mascotasFriendly: Number,
    lgbtFriendlyFriendly: Number,
    saturacionTuristica: Number,
    formasPago: [String],
    imageURL: String,
})

const ActividadesSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    rating: Number,
    costoPromedio: Number,
    mascotasFriendly: Number,
    saturacionTuristica: Number,
    formasPago: [String],
    imageURL: String,
})

const TransportePublicoSchema = new Schema({
    cuidad: String,
    nombre: String,
    descripcion: String,
    ubicacion: String,
    costoPromedio: Number,
    formasPago: [String],
    imageURL: String,
})


export { ProductSchema, ImageSchema }