import { styled, Box, } from '@mui/material';
import Slider from './Slider'
const Container = styled(Box)`
overflow:hidden;
position:relative;
`

const StorySlider = () => {
  return (
    <Container>
      <Slider />
    </Container>
  )
}

export default StorySlider
