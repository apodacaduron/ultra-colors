import { prependOnceListener } from 'process'
import { CSSProperties } from 'react'
import styles from '../../../styles/Primitives.module.scss'

interface Props {
  children: React.ReactNode
  gap?: CSSProperties['gap']
}

const DFormRow: React.FC<Props> = (props) => {
  return <div className={styles["form-row"]} style={{ gap: props.gap }}>{props.children}</div>
}

export default DFormRow