import { ReactNode } from "react";
import style from '../../styles/modules/Container.module.scss'

interface ContainerProps{
  title: string,
  children: ReactNode,
}

const Container = (props:ContainerProps) =>{
  return (
    <div className={style.Container}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default Container;