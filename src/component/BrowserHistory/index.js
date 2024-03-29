import './index.css'

const BrowserHistory = props => {
  const {browserDetails, fillFunction} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onDelete = () => {
    fillFunction(id)
  }

  return (
    <li className="list-item-container">
      <div className="item-container">
        <p className="time">{timeAccessed}</p>
        <div className="social-container">
          <img src={logoUrl} alt="domain logo" className="img" />
          <div className="social-card">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="browser-delete"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default BrowserHistory
