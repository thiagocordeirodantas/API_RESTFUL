import { Module } from "@nestjs/common";
import UsuarioController from "src/controller/User/user.controller";

    @Module({
        controllers:[UsuarioController]
    })

    export class UsuarioModule {

    }