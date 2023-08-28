import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async getAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	async getOne(username: string): Promise<User | null> {
		return this.userModel.findOne({ username }).exec();
	}

	async createOne(user: User): Promise<User> {
		const createdUser = new this.userModel(user);
		return createdUser.save();
	}

	async deleteOne(username: string): Promise<User | null> {
		const deletedUser = await this.userModel.findOneAndDelete({ username });
		return deletedUser;
	}

	async updateOne(username: string, user: User): Promise<User | null> {
		const updatedUser = await this.userModel.findOneAndUpdate(
			{ username },
			user,
			{ new: true },
		);
		return updatedUser;
	}
}
