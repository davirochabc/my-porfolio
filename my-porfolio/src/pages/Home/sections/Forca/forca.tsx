import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.6)",
        zIndex: 1000,
      }}
    >
      <Card
        sx={{
          width: "400px",
          borderRadius: 3,
          boxShadow: 5,
        }}
      >
        <CardContent>
          {/* Botão fechar */}
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="h5" align="center" gutterBottom>
            🎮 Jogo da Forca
          </Typography>

          {/* Palavra */}
          <Typography
            variant="h4"
            align="center"
            letterSpacing={2}
            sx={{ mb: 2 }}
          >
            {palavraOculta}
          </Typography>

          <Typography align="center" sx={{ mb: 2 }}>
            Erros: <b>{erros}</b> / {MAX_TENTATIVAS}
          </Typography>

          {/* Input */}
          <Box
            component="form"
            onSubmit={handleInput}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <TextField
              variant="outlined"
              size="small"
              type="text"
              inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
              value={entrada}
              onChange={(e) => setEntrada(e.target.value.toUpperCase())}
              disabled={venceu || perdeu}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={venceu || perdeu}
            >
              Chutar
            </Button>
          </Box>

          {/* Status final */}
          {venceu && (
            <Typography
              align="center"
              color="success.main"
              fontWeight="bold"
              sx={{ mt: 2 }}
            >
              🎉 Você venceu!
            </Typography>
          )}
          {perdeu && (
            <Typography
              align="center"
              color="error.main"
              fontWeight="bold"
              sx={{ mt: 2 }}
            >
              ❌ Você perdeu! A palavra era {palavra}.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
