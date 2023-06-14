import { Module } from "@nestjs/common";
import { EmailValidator } from "src/controller/User/Validator/email-unico.validator";
import { UsuarioController } from "src/controller/User/user.controller";
import { UsuarioRepository } from "src/controller/User/user.repository";

    @Module({
        controllers:[UsuarioController],
        providers: [UsuarioRepository, EmailValidator]
    })

    export class UsuarioModule {

    }