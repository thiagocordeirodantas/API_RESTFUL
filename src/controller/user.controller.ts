import { Body, Controller, Post } from "@nestjs/common";
import UsuarioRepository from "./user.repository";

@Controller('/usuarios')
export default class UsuarioController {
    
    private usuarioRepository = new UsuarioRepository()
    @Post()
    async criaUsuario (@Body()dadosUsuario){
        this.usuarioRepository.salvar(dadosUsuario);
        return dadosUsuario
    }
}


