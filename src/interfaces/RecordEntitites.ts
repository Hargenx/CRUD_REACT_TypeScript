export interface Records {
    id?: number;
}

export interface Pessoa extends Records{
    id?: number;
    nome: string;
    idade: number;
    periodo: string;
    tipo_curso: string;
}