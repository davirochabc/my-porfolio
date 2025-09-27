import {
  Container,
  Grid,
  styled,
  Typography,
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import { useState } from "react";
import Avatar from "../../../../assets/images/images.jpg";
import Forca from "../Forca/forca";
import Navbar from "../Navbar/navbar";
import theme from "../../../../assets/theme/theme";

const StyledHero = styled("div")(() => ({
  backgroundColor: "#0D0D0D",
  height: "100vh",
  paddingTop: "64px",
}));

const StyledImg = styled("img")(() => ({
  borderRadius: "50%",
  width: "100%",
  transform: "scale(1.2)",
}));

const Hero = () => {
  const [showForca, setShowForca] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar onOpenForca={() => setShowForca(true)} />

      <StyledHero>
        <Container>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid  display="flex" justifyContent="center">
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>

            <Grid textAlign="center">
              <Typography color="primary" variant="h1">
                Davi Rocha
              </Typography>
              <Typography color="primary" variant="h2" gutterBottom>
                Desenvolvedor Fullstack!
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: 5, maxWidth: "500px", marginX: "auto" }}
              >
                Sempre tive um grande interesse pela área de tecnologia, algo que combina
                muito com minha nerdice e curiosidade em explorar como as coisas funcionam.
                Esse entusiasmo me levou a mergulhar no desenvolvimento de software, unindo
                criatividade e lógica para transformar ideias em realidade. Atualmente
                trabalho com diversas linguagens e ferramentas como <b>Java</b>, <b>Python</b>,
                <b>C</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>TypeScript</b>,
                <b>React</b> e <b>Spring Boot</b>.
              </Typography>

            </Grid>
          </Grid>

          {showForca && <Forca onClose={() => setShowForca(false)} />}
        </Container>

      </StyledHero>
    </ThemeProvider>
  );
};

export default Hero;
