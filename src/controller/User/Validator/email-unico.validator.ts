import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, ValidatorOptions, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true })
export class EmailValidator implements ValidatorConstraintInterface{

    constructor(private usuarioRepository: UsuarioRepository){}

   async validate(value: any, validationArguments?: ValidationArguments):  Promise<boolean> {
      const usuarioComEmailExiste =  await this.usuarioRepository.emailExiste(value)
      return !usuarioComEmailExiste;
    }
    
}

export const emailUnico = (opcoesValidacoes: ValidatorOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacoes,
            constraints: [],
            validator: EmailValidator
        });
    }
}