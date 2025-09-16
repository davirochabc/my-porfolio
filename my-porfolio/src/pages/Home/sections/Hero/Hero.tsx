import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/images.jpg"
const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }))

  const StyledImg = styled("img")(() => ({
    borderRadius: "50%",
    width: "80%"
  }))


  return (
    <>
      <StyledHero>
        <Container>

          <Grid container spacing={2}>
            <Grid size={4}>
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid size={8}>
              <Typography color="primary" variant="h1"> Davi Rocha </Typography>
              <Typography color="primary" variant="h2"> Desenvolvedor Fullstack! </Typography>
            </Grid>
          </Grid>
        </Container>/


      </StyledHero>

    </>
  )
}

export default Hero