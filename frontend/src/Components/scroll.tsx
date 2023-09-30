import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb
   
  } from '@chakra-ui/react'

const Scroll = () => {
  return (
    <div>
      <Slider
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </div>
  );
};
export default Scroll;
