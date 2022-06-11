import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'
import styles from '../../../styles/Primitives.module.scss'

interface Props extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const DLabel: React.FC<Props> = (props) => {
  const {className, ...restProps } = props
  return <label {...restProps} className={styles['label']}>{props.children}</label>
}

export default DLabel