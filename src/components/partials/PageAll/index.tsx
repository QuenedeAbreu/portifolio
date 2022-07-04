import typePropsPageAll from '../../../types/typePropsPageAll';

function PageAll(props: typePropsPageAll) {
  return (
    <div className='all'>
      {props.children}
    </div>
  );
}

export default PageAll;