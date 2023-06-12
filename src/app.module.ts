import { Module } from '@nestjs/common';
import  UsuarioController  from "./controller/User/user.controller";
import { UsuarioModule } from './modules/user.module';


@Module({
  imports: [UsuarioModule],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
