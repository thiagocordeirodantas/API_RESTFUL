import { IsEmail, MinLength, IsNotEmpty } from "class-validator";


export class criaUsuarioDTO {

    @IsNotEmpty({message: 'O nome nao pode ser vazio'})
    nome: string;

    @IsEmail(undefined,{message: 'O email informado esta invalido'})
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres'})
    senha: string;
}