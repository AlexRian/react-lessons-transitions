import { CSSTransition } from 'react-transition-group';
import { FC, useRef, useState } from 'react';
import Container from './common/Container';
import styles from '../styles/modules/StylesTransition.module.scss'

const StylesTransition:FC = () => {
  const basicRef = useRef(null);
  const detailedRef = useRef(null);
  const [active, setActive] = useState<boolean>(true);

  return (
    <Container title='CSSTransition component'>
      
      <CSSTransition nodeRef={basicRef} in={active} timeout={200} classNames={{...styles}}>
        <div ref={basicRef}>
          Hello from basic
        </div>
      </CSSTransition >
      
      <CSSTransition nodeRef={detailedRef} in={active} timeout={200} 
        classNames={{
          enter: styles.detailedEnter,
          enterActive: styles.detailedEnterActive,
          enterDone: styles.detailedEnterDone,
          exit: styles.detailedExit,
          exitActive: styles.detailedExitActive,
          exitDone: styles.detailedExitDone,
        }}
        onEnter={()=>console.log('I am enter')}
        onEntering={()=>console.log('I am etering')}
        onEntered={()=>console.log('I am entered')}
        onExit={()=>console.log('I am exit')}
        onExiting={()=>console.log('I am exiting')}
        onExited={()=>console.log('I am exited')}
      >
        <div ref={detailedRef}>
          Hello from detailed
        </div>
      </CSSTransition >
      
      <button onClick={()=>setActive(!active)}>Switch state</button>
    </Container>
  );
}

export default StylesTransition;