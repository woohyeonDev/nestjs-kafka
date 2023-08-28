import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { TelexModule } from './telex/TELEX.module';

@Module({
	imports: [
		UsersModule,
		TelexModule,
		MongooseModule.forRoot('mongodb://localhost:27017/nest'),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
