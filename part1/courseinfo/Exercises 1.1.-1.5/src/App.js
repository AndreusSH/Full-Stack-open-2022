
const Header = () => {
  return(
    <h1>Half Stack application development</h1>
  )
}


const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
    )

}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part1} exercises={props.exercises1}/>

    </div>
    )
  }
 


const Total = (props) => {
  return (

    <p>Number of exercises {props.exercises}</p>


  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header/>
      <Content part1={part1.name} part2={part2.name} part3={part3.name} 
      exercises1={part1.exercises} exercises2={part2.exercises2} exercises3={part3.exercises3} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
  
}

export default App
