import React, { useState } from "react";

const palavras = ["REACT", "TYPESCRIPT", "JOGO", "PROGRAMAR"];

const MAX_TENTATIVAS = 6;

export default function Forca() {
  const [palavra] = useState(
    palavras[Math.floor(Math.random() * palavras.length)]
  );
  const [tentativas, setTentativas] = useState<string[]>([]);
  const erros = tentativas.filter((l) => !palavra.includes(l)).length;

  const handleChute = (letra: string) => {
    if (!tentativas.includes(letra) && erros < MAX_TENTATIVAS) {
      setTentativas([...tentativas, letra]);
    }
  };

  const palavraOculta = palavra
    .split("")
    .map((l) => (tentativas.includes(l) ? l : "_"))
    .join(" ");

  const venceu = palavraOculta.replace(/ /g, "") === palavra;
  const perdeu = erros >= MAX_TENTATIVAS;

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="flex flex-col items-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold">Jogo da Forca</h1>

      <p className="text-xl tracking-widest">{palavraOculta}</p>
      <p>Erros: {erros} / {MAX_TENTATIVAS}</p>

      <div className="grid grid-cols-7 gap-2 max-w-md">
        {alfabeto.map((letra) => (
          <button
            key={letra}
            className="p-2 border rounded disabled:opacity-50"
            onClick={() => handleChute(letra)}
            disabled={tentativas.includes(letra) || venceu || perdeu}
          >
            {letra}
          </button>
        ))}
      </div>

      {venceu && <p className="text-green-600 font-bold">🎉 Você venceu!</p>}
      {perdeu && (
        <p className="text-red-600 font-bold">
           Você perdeu! A palavra era {palavra}.
        </p>
      )}
    </div>
  );
}
