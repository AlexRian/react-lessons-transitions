import { useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Container from './common/Container';
import styles from '../styles/modules/SwitchTransitions.module.scss'

const SwitchTransitions = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const onButtonRef = useRef(null);
  const offButtonRef = useRef(null); 

  return (
    <Container title='SwitchTransition example'>
      <button onClick={() => setShowButton(!showButton)}>Toggle Animation</button>
      {/* 
        out-in - current first
        in-out - current last
      */} 
      <SwitchTransition mode={'out-in'}>
        <CSSTransition ref={showButton ? onButtonRef : offButtonRef} key={showButton ? 'on' : 'off'} classNames={{...styles}} timeout={300}>
          {showButton ? <button ref={onButtonRef}>On</button> : <button ref={offButtonRef}>Off</button>}
        </CSSTransition>
      </SwitchTransition>
    </Container>
  );
}

export default SwitchTransitions;