import { Module } from "@nestjs/common";
import { UsuarioController } from "src/controller/User/user.controller";
import { UsuarioRepository } from "src/controller/User/user.repository";

    @Module({
        controllers:[UsuarioController],
        providers: [UsuarioRepository]
    })

    export class UsuarioModule {

    }