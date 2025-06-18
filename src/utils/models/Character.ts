
export interface Habilidade {
  nome: string;
  custoFoco: number;
  descricao: string;
  tipoAcao: 'Principal' | 'Livre' | 'Movimento';
}

export interface Pericia {
  nome: string;
  valor: number;
  bonus?: number;
}

export interface Item {
  nome: string;
  tipo: 'arma' | 'consumivel' | 'equipamento' | 'chave';
  peso: number;
  quantidade: number;
}

export interface Personagem {
  nome: string;
  vida: number;
  vidaMax: number;
  foco: number;
  focoMax: number;
  sanidade: number;
  sanidadeMax: number;
  defesa: number;
  armadura: string;
  movimento: number;
  condicao: string;
  essenciaDaAlma: number;
  atributos: Record<string, number>;
  pericias: Pericia[];
  proficiencias: Record<string, number>;
  habilidades: Habilidade[];
  inventario: Item[];
  pesoTotal: number;
  carteira: number;
}
