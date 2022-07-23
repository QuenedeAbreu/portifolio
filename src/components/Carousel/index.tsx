import React, { ReactNode } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { Arrow } from './Arrow';
import { Item } from './Item';


export function CarouselSlider() {
  return (
    <Carousel show={3.5} slide={2} transition={0.5} swiping={true} useArrowKeys={true} leftArrow={<Arrow direction={"left"} />} rightArrow={<Arrow direction={"rigth"} />}  >
      <Item color="#000000">Em Breve</Item>
      <Item color="#000000">Em Breve</Item>
      <Item color="#000000">Em Breve</Item>
      <Item color="#000000">Em Breve</Item>

      <Item color="#000000">Em Breve</Item>
      <Item color="#000000">Em Breve</Item>
      <Item color="#000000">Em Breve</Item>
      <Item color="#000000">Em Breve</Item>
    </Carousel>
  );
}