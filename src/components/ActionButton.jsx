import '../css/ActionButton.css'

const ActionButton = ({message}) => {
  return (
    <a className="action-button" href="#">
      {message}
    </a>
  )
}

export default ActionButton