import { Selecao } from "./selecao.model";

export interface Jogo {
  placarB: any;
  placar: any;
  id?: number;
  selecaoA?: Selecao;
  selecaoB?: Selecao;
  criadoEm?: string;
}
