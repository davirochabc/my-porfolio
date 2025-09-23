import { Button, Container, Grid, styled, Typography } from "@mui/material"
import { useState } from "react";

import Avatar from "../../../../assets/images/images.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Forca from "../Forca/forca";


const StyledHero = styled("div")(() => ({
  backgroundColor: "gray",
  height: "100vh",
}))

const StyledImg = styled("img")(() => ({
  borderRadius: "50%",
  width: "100%"
}))
const Hero = () => {
  const [showForca, setShowForca] = useState(false);

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
              <Grid container display="flex" justifyContent="center">
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
                  <Button variant="outlined" onClick={() => setShowForca(true)}>
                    <VideogameAssetIcon />
                    Jogo da Velha
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {showForca && <Forca onClose={() => setShowForca(false)} />}
        </Container>


      </StyledHero>

    </>
  )
}

export default Hero