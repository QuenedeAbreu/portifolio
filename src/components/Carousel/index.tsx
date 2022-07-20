import React, { ReactNode } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { Arrow } from './Arrow';
import { Item } from './Item';


export function CarouselSlider() {
  return (
    <Carousel show={3.5} slide={2} transition={0.5} swiping={true} useArrowKeys={true} leftArrow={<Arrow direction={"left"} />} rightArrow={<Arrow direction={"rigth"} />}  >
      <Item color="#f27a1a">We love Trendyol orange</Item>
      <Item color="#d53f8c">This is our github</Item>
      <Item color="#16be48">We love Trendyol green</Item>
      <Item color="#3f51b5">This is our website</Item>

      <Item color="#f27a1a">We love Trendyol orange</Item>
      <Item color="#d53f8c">This is our github</Item>
      <Item color="#16be48">We love Trendyol green</Item>
      <Item color="#3f51b5">This is our website</Item>
    </Carousel>
  );
}