import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';
import Container from './common/Container';

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'translateX(0px)',
}

const transitionStyles = {
  entering: { opacity: 1, transform: 'translateX(0px)' },
  entered: { opacity: 1,   transform: 'translateX(0px)' },
  exiting: { opacity: 0, transform: 'translateX(100px)' },
  exited: { opacity: 0,  transform: 'translateX(100px)' },
  unmounted: {opacity: 0},
};

const BasicTransition = () => {
  const nodeRef = useRef(null);
  const [active, setActive] = useState<boolean>(true);

  return (
    <Container title='Transition component'>
      <Transition nodeRef={nodeRef} in={active} timeout={duration}>
        {state => (
          <div ref={nodeRef} style={{...defaultStyle, ...transitionStyles[state]}}>
            Hello
          </div>
        )}
      </Transition>
      <button onClick={()=>setActive(!active)}>Switch state</button>
    </Container>
  );
}

export default BasicTransition;