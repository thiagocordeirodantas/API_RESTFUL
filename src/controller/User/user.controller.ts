import { Body, Controller, Post, Get } from "@nestjs/common";
import UsuarioRepository from "../user.repository";

@Controller('/usuarios')
export default class UsuarioController {
    
    private usuarioRepository = new UsuarioRepository()
    @Post()
    async criaUsuario (@Body()dadosUsuario){
        this.usuarioRepository.salvar(dadosUsuario);
        return dadosUsuario
    }

    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listar();
    }
}


