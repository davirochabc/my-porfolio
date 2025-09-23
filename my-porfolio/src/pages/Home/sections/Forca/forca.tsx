import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const palavras = [
  "REACT", "TYPESCRIPT", "JOGO", "PROGRAMAR", "DESAFIO", "COMPONENTE",
  "ESTADO", "PROPRIEDADE", "FUNCAO", "VARIAVEL", "OBJETO", "ARRAY",
  "STRING", "NUMERO", "BOOLEANO", "NAVEGADOR", "SERVIDOR", "BACKEND",
  "FRONTEND", "FULLSTACK", "DESENVOLVEDOR", "SOFTWARE"
];

const MAX_TENTATIVAS = 6;

interface ForcaProps {
  onClose: () => void;
}

export default function Forca({ onClose }: ForcaProps) {
  const [palavra] = useState(
    palavras[Math.floor(Math.random() * palavras.length)]
  );
  const [tentativas, setTentativas] = useState<string[]>([]);
  const [entrada, setEntrada] = useState("");
  const erros = tentativas.filter((l) => !palavra.includes(l)).length;

  const handleChute = (letra: string) => {
    letra = letra.toUpperCase();
    if (!tentativas.includes(letra) && erros < MAX_TENTATIVAS) {
      setTentativas([...tentativas, letra]);
    }
  };

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (entrada.trim() !== "") {
      handleChute(entrada[0].toUpperCase());
      setEntrada("");
    }
  };

  const palavraOculta = palavra
    .split("")
    .map((l) => (tentativas.includes(l) ? l : "_"))
    .join(" ");

  const venceu = palavraOculta.replace(/ /g, "") === palavra;
  const perdeu = erros >= MAX_TENTATIVAS;

  return (
    <div >
      {/* Botão fechar */}
      <button
        onClick={onClose}
      >
       X
      </button>

      <h1 >🎮 Jogo da Forca</h1>

      {/* Palavra */}
      <p >{palavraOculta}</p>
      <p >
        Erros: <span>{erros}</span> / {MAX_TENTATIVAS}
      </p>

      {/* Input para digitar letras */}
      <form onSubmit={handleInput} className="flex gap-2">
        <input
          type="text"
          maxLength={1}
          value={entrada}
          onChange={(e) => setEntrada(e.target.value.toUpperCase())}
          disabled={venceu || perdeu}
        />
        <button
          disabled={venceu || perdeu}
        >
          <SendIcon fontSize="small" /> 
        </button>
      </form>

      {/* Status final */}
      {venceu && <p >🎉 Você venceu!</p>}
      {perdeu && (
        <p>
          ❌ Você perdeu! A palavra era{" "}
          <span >{palavra}</span>.
        </p>
      )}
    </div>
  );
}
