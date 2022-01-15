import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

import { MongooseModule } from '@nestjs/mongoose';
import { FormsAddController } from './forms-add/cotrollers/forms-add.controller';

@Module({
  imports: [ProductsModule, 
            MongooseModule.forRoot('mongodb://localhost/crud-nest'),
          ],
  controllers: [AppController, FormsAddController],
  providers: [AppService],
})
export class AppModule {}
 