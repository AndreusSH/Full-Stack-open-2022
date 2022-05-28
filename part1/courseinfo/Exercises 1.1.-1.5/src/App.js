
const Header = () => {
  return(
    <h1>Half Stack application development hdgfhgfkfsdhfldsk</h1>
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
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
   {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header/>
      <Content part1={parts[1].name} part2={parts[1].name} part3={parts[2].name} 
      exercises1={parts[1].exercises} exercises2={parts[1].exercises2} exercises3={parts[2].exercises3} />
      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
  
}

export default App
