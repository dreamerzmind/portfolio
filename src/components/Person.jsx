export default function Person (props) {
    return (
      <div>
        Hi! My name is {props.name} and I am {props.age}! <br />
        {props.name} is a {props.job}. <br />
        {props.children}
      </div>
    )
}