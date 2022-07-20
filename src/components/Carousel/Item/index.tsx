import React, { ReactNode } from 'react';

type ItemProps = {
  children: ReactNode;
  color?: string;
}

export const Item = (props: ItemProps) => (<span style={{
  backgroundColor: props.color,
  borderRadius: '2px',
  color: '#fff',
  padding: '0px 0',
  display: 'block',

  height: '300px',
  margin: '0px 16px 16px 0',
}}> {props.children} </span>);