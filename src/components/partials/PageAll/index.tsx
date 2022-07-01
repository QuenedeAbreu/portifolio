import React, { ReactNode } from 'react';
type PageAllProps = {
  children: ReactNode;
};

function PageAll(props: PageAllProps) {
  return (
    <div className='all'>
      {props.children}
    </div>
  );
}

export default PageAll;