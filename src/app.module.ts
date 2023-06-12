import { Module } from '@nestjs/common';
import  UsuarioController  from "./controller/user.controller";


@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
