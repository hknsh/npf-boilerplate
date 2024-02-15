import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppService {
	constructor(private readonly prisma: PrismaService) {}

	async createPost() {}

	async deletePost() {}

	async getPost() {}
}
