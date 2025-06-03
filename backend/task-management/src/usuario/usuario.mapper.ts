import { Usuario } from "./domain/usuario.domain";
import { UsuarioEntity } from "./entity/usuario.entity";
import { UsuarioDto } from "./dto/usuario.dto";

export class UsuarioMapper {
    // Entity → Domain
    static entityToDomain(entity: UsuarioEntity): Usuario {
        return new Usuario(
            entity.id,         // id
            entity.nome,
            entity.email,
            entity.senha
        );
    }
    // Domain → Entity
    static domainToEntity(domain: Usuario): UsuarioEntity {
        // Não passe o ID no construtor, pois ele é gerado pelo banco.
        const entity = new UsuarioEntity(
            domain.getNome,
            domain.getEmail,
            domain.getSenha
        );
        // Se for atualizar, pode setar entity.id = domain.getId;
        return entity;
    }
    // DTO → Domain
    static dtoToDomain(dto: UsuarioDto): Usuario {
        return new Usuario(
            dto.id,       // ou dto.id, se padronizar
            dto.nome,
            dto.email,
            dto.senha
        );
    }
    // Domain → DTO
    static domainToDto(domain: Usuario): UsuarioDto {
        return new UsuarioDto(
            domain.getid,
            domain.getNome,
            domain.getEmail,
            domain.getSenha
        );
    }
}