export class Usuario{
    private _id: number;
    private _nome: string;
    private _email: string;
    private _senha: string;
   

    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string,
       
    ) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._senha = senha;
       
    }

    //Métodos
    validarSenha(senha: string): boolean{
        const temMaiusc: boolean = senha.match(/[A-Z]/) !== null;
        const temMinusc: boolean = senha.match(/[a-z]/) !== null;
        const temNumero: boolean = senha.match(/[0-9]/) !== null;

        if (senha.length >= 8 && temMaiusc && temMinusc && temNumero){
            return true;
        }else{
            return false;
        }
    }


    //GETTERs
    get getid(): number {
        return this._id;
    }

    get getNome(): string {
        return this._nome;
    }

    get getEmail(): string {
        return this._email;
    }

    get getSenha(): string {
        return this._senha;
    }

    //SETTERs
    set setNome(nome: string) {
        this._nome = nome;
    }

    set setEmail(email: string) {
        this._email = email;
    }

    set setSenha(senha: string) {
        this._senha = senha;
    }

}