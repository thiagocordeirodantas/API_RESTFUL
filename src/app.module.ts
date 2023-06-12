import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/User/user.controller';
import { UsuarioModule } from './modules/users/user.module';
import { UsuarioRepository } from './controller/User/user.repository';



@Module({
  imports: [UsuarioModule],
  controllers: [UsuarioController],
  providers: [UsuarioRepository]
})
export class AppModule {}
