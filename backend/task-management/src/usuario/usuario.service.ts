import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsuarioMapper } from "./usuario.mapper";
import * as jwt from 'jsonwebtoken';
import { UsuarioEntity } from "./entity/usuario.entity";
import { Usuario } from "./domain/usuario.domain";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async cadastrar(novoUsuario: Usuario): Promise<Usuario> {
        const email = novoUsuario.getEmail;
        const senha = novoUsuario.getSenha;

        const resultado = await this.usuarioRepository.findOne({ where: { email } });

        if (resultado) {
            throw new HttpException("Usuário já cadastrado", HttpStatus.CONFLICT);
        }

        return UsuarioMapper.entityToDomain(
            await this.usuarioRepository.save(UsuarioMapper.domainToEntity(novoUsuario))
        );
    }

    async login(email: string, senha: string): Promise<string> {
        const usuario = await this.buscarPorEmail(email);

        // Corrigido para getId
        if (usuario.getSenha !== senha) {
            throw new HttpException("Senha errada", HttpStatus.UNAUTHORIZED);
        }

        const token = this.gerarToken(usuario.getEmail, usuario.getid);
        return token;
    }

    private tokensInvalidos: Set<string> = new Set();

    async invalidarToken(token: string): Promise<void> {
        this.tokensInvalidos.add(token);
    }

    isTokenInvalido(token: string): boolean {
        return this.tokensInvalidos.has(token);
    }

    async buscarPorEmail(email: string): Promise<Usuario> {
        const user = await this.usuarioRepository.findOne({ where: { email } });
        if (!user) {
            throw new HttpException("Email não encontrado", HttpStatus.NOT_FOUND);
        }
        return UsuarioMapper.entityToDomain(user);
    }

    async buscarPorId(id: number): Promise<Usuario> {
        const user = await this.usuarioRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
        }
        return UsuarioMapper.entityToDomain(user);
    }

    async deletarUsuario(id: number) {
        await this.usuarioRepository.delete(id);
    }

    private gerarToken(email: string, id?: number): string {
        const payload = { email, id };
        const segredo = 'G7@!pX8$uM^3kN2&rL6*qV1#tFzJ9zA';
        const opcoes = { expiresIn: '1h' };
        return jwt.sign(payload, segredo, opcoes);
    }
}