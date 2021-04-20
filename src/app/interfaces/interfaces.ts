

export interface RootObject {
    data: Datum[];
    status: string;
  }
  
  export interface Datum {
    id: number;
    nombre: string;
    categoria: string;
    codigo: number;
  }