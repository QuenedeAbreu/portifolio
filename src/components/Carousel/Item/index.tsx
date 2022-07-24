import React, { ReactNode } from 'react';

type ItemProps = {
  children: ReactNode;
  color?: string;
}

export const Item = (props: ItemProps) => (<div style={{
  backgroundColor: props.color,
  borderRadius: '10px',
  color: '#fff',
  padding: '0px 0',
  display: 'flex',
  flexDirection: 'column',
  height: '300px',
  margin: '0px 16px 16px 0',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  cursor: 'auto',
}}>
  <div className='sm:w-full sm:h-full flex justify-center items-center'>
    <span className='-rotate-45 text-4xl bg-[#09135F] rounded-[10px] min-w-full flex items-center justify-center'>
      {props.children}
    </span>
  </div>
  <div className=' group hover:bg-[#09135F] bg-white sm:w-1/2 sm:h-1/6-absolute bottom-0 flex justify-center items-center rounded-t-xl cursor-pointer'>
    <h3 className='  group-hover:text-white text-black font-oswald '>View Site</h3>
  </div>
</div>);