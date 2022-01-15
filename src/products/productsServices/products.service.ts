import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../interfaces/product.interface'; //lo que llega
import { CreateProductDTO } from '../dto/products.dto'; // lo que sale

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private _productModel: Model<Product>) {
    }
    async getProducts(): Promise<Product[]>{
        const products = await this._productModel.find()
        return products
    }
    async getProduct(productID: string): Promise<Product>{
        const product = await this._productModel.findById(productID)
        return product
    }
    async createProduct(createProductDTO: CreateProductDTO){
        const product = new this._productModel(createProductDTO)
        return await product.save()
    }
    async updateProduct(productID: string, newData: CreateProductDTO): Promise<Product>{
        const upProduct = await this._productModel.findByIdAndUpdate(productID, newData, { new: true })
        return upProduct
    }
    async deleteProduct(productID: string): Promise<Product>{
        const delProduct = await this._productModel.findByIdAndDelete(productID)
        return delProduct
    }
}
