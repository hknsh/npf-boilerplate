import { NestFactory } from "@nestjs/core";
import {
	FastifyAdapter,
	NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({ logger: true }),
	);

	const config = new DocumentBuilder()
		.setTitle("Boilerplate")
		.setDescription("A NestJS + Fastify + Prisma + Swagger boilerplate")
		.setVersion("1.0")
		.addTag("Example")
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup("/", app, document);

	await app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST);
}
bootstrap();
