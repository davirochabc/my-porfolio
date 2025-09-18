import { Button, Container,  styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import Avatar from "../../../../assets/images/images.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }))

  const StyledImg = styled("img")(() => ({
    borderRadius: "50%",
    width: "100%"
  }))


  return (
    <>
      <StyledHero>
        <Container>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid item xs={8}>
              <Typography color="primary" variant="h1" textAlign="center"> Davi Rocha </Typography>
              <Typography color="primary" variant="h2" textAlign="center"> Desenvolvedor Fullstack! </Typography>
              <Button variant="outlined" >
                <DownloadIcon />
                Download CV
              </Button>
              <Button variant="outlined">
                <EmailIcon />
                Contato
              </Button>
            </Grid>
          </Grid>
        </Container>


      </StyledHero>

    </>
  )
}

export default Hero