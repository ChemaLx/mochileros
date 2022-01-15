import { Module } from '@nestjs/common';
import { ProductController } from './productController/product.controller';
import { ProductsService } from './productsServices/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, ImageSchema } from './schemas/product.schema';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    MongooseModule.forFeature([ // crea un modelo para el schema de mongo
      { name: 'Product', schema: ProductSchema },
      { name: 'Images', schema: ImageSchema }
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductsService]
})
export class ProductsModule { }
