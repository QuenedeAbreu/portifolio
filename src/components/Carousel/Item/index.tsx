import React, { ReactNode } from 'react';

type ItemProps = {
  children: ReactNode;
  color?: string;
}

export const Item = (props: ItemProps) => (<span style={{
  backgroundColor: props.color,
  borderRadius: '10px',
  color: '#fff',
  padding: '0px 0',
  display: 'flex',
  height: '300px',
  margin: '0px 16px 16px 0',
  alignItems: 'center',
  justifyContent: 'center'
}}><span className='-rotate-45 text-4xl bg-[#09135F] rounded-[10px] min-w-full flex items-center justify-center'> {props.children} </span></span>);