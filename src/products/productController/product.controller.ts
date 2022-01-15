import { Controller, Post, Put, Delete, Get, Res, HttpStatus, Body, Req, Param, NotFoundException, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { of } from 'rxjs';
import { CreateProductDTO } from '../dto/products.dto';
import { saveImageToStorage } from '../helpers/image.storage';
import { ProductsService } from '../productsServices/products.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductsService) { }

    @Post('create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: "Poduct Succesfully created",
            product: product
        })
    }

    @Get('products')
    async getProducts(@Res() res) {
        const product = await this.productService.getProducts()
        return res.status(HttpStatus.OK).json({
            message: "received",
            product: product
        })
    }

    @Get('products/:id')
    async getProduct(@Res() res, @Param() params) {
        const product = await this.productService.getProduct(params.id)
        if (!product) throw new NotFoundException("Product doesn't exists")
        return res.status(HttpStatus.OK).json({
            message: "received",
            product: product
        })
    }

    @Delete('products/')
    async delProduct(@Res() res, @Query('id') id) {
        const product = await this.productService.deleteProduct(id)
        if (!product) throw new NotFoundException("Product doesn't exists")
        return res.status(HttpStatus.OK).json({
            message: "product deleted successfully",
            product: product
        })
    }

    @Put('products')
    async putProduct(@Res() res, @Query('id') id, @Body() newData) {
        const product = await this.productService.updateProduct(id, newData)
        if (!product) throw new NotFoundException("Product doesn't exists")
        return res.status(HttpStatus.OK).json({
            message: "product update successfully",
            product: product
        })
    }

    /* -------------------------- images ------------------------- */
    /**
     * @description funcion que guarda una imagen png/jpg/jpeg en ./uploads
     *
     * @author jose.maria.lara, PowerX Lab
     * @version 1.0.0, 24/11/2021
     * @param file 
     * @returns 
     */
    @Post('photo')
    @UseInterceptors(FileInterceptor('file', saveImageToStorage))
    async uploadedFile(@UploadedFile() file: Express.Multer.File) {
        const isFileCorrect = file?.filename
        if(!isFileCorrect){
            return of({error: 'el archivo debe ser pngo o jpg/jpeg'})
        } else {
            console.log(file)
            return {
                originalname: file.originalname,
                filename: file.filename,
                estado: 'recibido'
            }
        }
    }

}
