// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsDetails, setStateItem, isActive} = props
  const {imageUrl, name, location, id} = eventsDetails

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setStateItem(id)
  }

  return (
    <div className="event-item-container">
      <li>
        <div className="item-container">
          <button type="button" className="event-button" onClick={onClickEvent}>
            <img className={eventImageClassName} src={imageUrl} alt="event" />
          </button>
          <p className="name">{name}</p>
          <p className="location">{location}</p>
        </div>
      </li>
    </div>
  )
}

export default EventItem
