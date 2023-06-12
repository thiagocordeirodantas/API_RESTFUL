import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsuarioRepository } from "./user.repository";
import { criaUsuarioDTO } from "./dto/createUser.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuario (@Body()dadosUsuario: criaUsuarioDTO){
        this.usuarioRepository.salvar(dadosUsuario);
        return dadosUsuario
    }   

    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listar();
    }
}


