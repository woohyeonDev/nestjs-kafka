import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
@ApiTags('user api')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Get('/all')
	@ApiOperation({ summary: 'get all user api', description: 'get all user' })
	@ApiCreatedResponse({
		description: 'all user return',
	})
	async getAll(): Promise<User[]> {
		return this.userService.getAll();
	}

	@Get('/:username')
	getOne(@Param('username') username: string): Promise<User> {
		return this.userService.getOne(username);
	}

	@Delete('/:username')
	deleteOne(@Param('username') username: string): Promise<User> {
		return this.userService.deleteOne(username);
	}

	@Post('/create')
	createOne(@Body() user: User): Promise<User> {
		return this.userService.createOne(user);
	}

	@Put('/:id')
	updateOne(@Body() user: User) {
		return this.userService.updateOne(user.username, user);
	}
}
