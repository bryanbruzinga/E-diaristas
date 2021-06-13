import React from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = React.useState(""),
    cepValido = React.useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = React.useState(""),
    [buscaFeita, setBuscaFeita] = React.useState(false),
    [carregando, setCarregando] = React.useState(false),
    [diaristas, setDiaristas] = React.useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = React.useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, "")}`);
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("Cep não encontrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
