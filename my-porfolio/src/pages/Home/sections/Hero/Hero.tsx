import { Grid, styled } from "@mui/material"
import Avatar from "../../../../assets/images/images.jpg"
const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black"
  }))

  const StyledImg = styled("img")(() => ({
    borderRadius: "50%",
  }))


  return (
    <>
      <StyledHero>
        <Grid container spacing={2}>
          <Grid size={8}>
            size=8
         </Grid>
          <Grid size={4}>
            size=4
         </Grid>
          <Grid size={4}>
            size=4
         </Grid>
          <Grid size={8}>
            size=8
         </Grid>
        </Grid>

        <StyledImg src={Avatar} alt="Avatar" />
      </StyledHero>

    </>
  )
}

export default Hero