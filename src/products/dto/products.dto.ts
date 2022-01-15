/**
 * @description en este archivo se definen las entradas de los datos
 *
 * @author jose.maria.lara, PowerX Lab
 * @version 1.0.0, 24/11/2021
 */
class CreateProductDTO{
    readonly name: string
    readonly description: string
    readonly imageURL: string
    readonly price: number
    readonly createdAt: Date
}
export { CreateProductDTO }