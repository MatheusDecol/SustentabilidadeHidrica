import { Body, Controller, Post, HttpStatus, HttpCode, HttpException, Delete, Param } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioDto } from "./dto/usuario.dto";
import { UsuarioMapper } from "./usuario.mapper";
import { LoginUsuarioDto } from "./dto/loginUsuario.dto";

@Controller("usuario")
export class UsuarioController {
    constructor(
        private usuarioService: UsuarioService
    ) { }

    @Post("")
    @HttpCode(HttpStatus.CREATED)
    async cadastrar(@Body() novoUsuario: UsuarioDto) {
        const usuarioRegistrado: UsuarioDto = UsuarioMapper.domainToDto(
            await this.usuarioService.cadastrar(UsuarioMapper.dtoToDomain(novoUsuario))
        );

        return {
            statusCode: HttpStatus.CREATED,
            message: "Usuário cadastrado com sucesso",
            data: usuarioRegistrado,
        };
    }

    @Post("login")
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginUsuarioDto: LoginUsuarioDto) {
        const token = await this.usuarioService.login(loginUsuarioDto.email, loginUsuarioDto.senha);

        return {
            statusCode: HttpStatus.OK,
            message: "Login realizado com sucesso",
            data: token
        };
    }

    @Post("logout")
    @HttpCode(HttpStatus.OK)
    async logout(@Body() token: string) {
        try {
            await this.usuarioService.invalidarToken(token);
            return {
                statusCode: HttpStatus.OK,
                message: "Logout realizado com sucesso",
            };
        } catch (error) {
            throw new HttpException(
                "Erro ao realizar logout",
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Delete(':id')
    async deletarUsuario(@Param('id') id: number) {
        await this.usuarioService.deletarUsuario(id);

        return {
            statusCode: HttpStatus.OK,
            message: "Usuário deletado com sucesso."
        };
    }
}