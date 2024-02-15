import { Controller, Delete, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags("Example")
@Controller("/posts")
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@ApiOperation({ summary: "Returns a post" })
	getPost() {}

  @Post()
  @ApiOperation({ summary: "Creates a post" })
  createPost() {}

  @Delete()
  @ApiOperation({ summary: "Deletes a post" })
  deletePost() {}
}
