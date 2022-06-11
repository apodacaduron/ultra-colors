import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from '../../../styles/Primitives.module.scss'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const DCheckbox: React.FC<Props> = (props) => {
  const {className, type, ...restProps } = props
  return <input type="checkbox" {...restProps} className={styles['checkbox']} />
}

export default DCheckbox