import { Button, Container, Grid, styled, Typography } from "@mui/material"

import Avatar from "../../../../assets/images/images.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
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

          <Grid container spacing={2} >
            <Grid  >
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid >
              <Typography color="primary" variant="h1" textAlign="center"> Davi Rocha </Typography>
              <Typography color="primary" variant="h2" textAlign="center"> Desenvolvedor Fullstack! </Typography>
              <Grid container display ="flex" justifyContent="center">
                <Grid  > 
                  <Button variant="outlined" >
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid >
                  <Button variant="outlined">
                    <EmailIcon />
                    Contato
                  </Button>
                </Grid>
                <Grid >
                  <Button variant="outlined">
                    <VideogameAssetIcon />
                    Jogo da Velha
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>


      </StyledHero>

    </>
  )
}

export default Hero