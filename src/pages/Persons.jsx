import Person from "../components/Person";

const Persons = ({ persons }) =>
  persons.map((person) => (
    <Person
      key={person.name}
      name={person.name}
      age={person.age}
      job={person.job}
    />
  ));

export default Persons;
