import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Container from './common/Container';
import styles from '../styles/modules/TransitionGroups.module.scss'

const TransitionGroups = () => {
  const [items, setItems] = useState<string[]>(['item1', 'item2', 'item3']);

  const addItem = () => {
    setItems([...items, 'item' + (Math.random() * 100).toFixed(0).toString()]);
  };

  const removeItem = (item:string) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <Container title='TransitionGroup example'>
      <button onClick={addItem}>Add item</button>
      <ul>
        <TransitionGroup>
          {items.map((item) => (
            <CSSTransition
              key={item}
              timeout={500}
              classNames={{...styles}}
            >
              <li onClick={() => removeItem(item)}>{item}</li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </Container>
  );
}

export default TransitionGroups;