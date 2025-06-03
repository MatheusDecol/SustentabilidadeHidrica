import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class UsuarioEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 50})
    nome: string;

    @Column({type: 'varchar', length: 50})
    email: string;

    @Column({type: 'varchar', length: 255})
    senha: string;
/*
    @OneToMany(() => UsuarioEquipeEntity, usuarioEquipe => usuarioEquipe.usuario)
    usuarioEquipes: UsuarioEquipeEntity[];
*/
    constructor(
        nome: string,
        email: string,
        senha: string,
     
    ) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    
    }
}