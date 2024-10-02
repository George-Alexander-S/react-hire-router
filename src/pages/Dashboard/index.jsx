import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import '../../../src/App.css'

function Dashboard(props) {
  const url = "https://randomuser.me/api/?results=50"

  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData.results);
      console.log(people)
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(people)
  }, [people])
  
  

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <ul>
        <PeopleList people={people} />
        </ul>
      </section>
      <section>
        <h2>Hired People</h2>
        {/* <PeopleList people={hiredPeople} /> */}
        {/* Commented out for now */}
      </section>
    </main>
  )
}

export default Dashboard
