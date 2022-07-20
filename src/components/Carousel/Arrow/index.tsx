type buttonsArrowProps = {
  direction: string;
}

export const Arrow = (props: buttonsArrowProps) => (
  <button style={{
    backgroundImage: `url('https://cdn.dsmcdn.com/web/production/slick-arrow.svg')`,
    width: '40px',
    height: '80px',
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: 0,
    cursor: 'pointer',
    outline: 0,
    position: 'relative',
    top: '130px',
    transform: `${props.direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'}`,
  }} >  </button>
);
