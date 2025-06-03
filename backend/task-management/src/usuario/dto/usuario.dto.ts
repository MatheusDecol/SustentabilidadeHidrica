import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UsuarioDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}