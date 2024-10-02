import '../../../App.css'
import {Route, Routes, Link} from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props

  return (
    <li className="people-list">
      <Link to={`/view/${person.login.uuid}`}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <img src={person.picture.medium}/>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <p>{person.email}</p>
      <p>{person.location.country}</p>
      </Link>
    </li>
  )
}

export default PeopleListItem
