interface Props {
  show: boolean;
}

const Loader: React.FC<Props> = (props) => {
  return props.show ? <div className="loader"></div> : null
}

export default Loader