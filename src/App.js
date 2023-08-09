import { useState } from 'react';
// 
import './App.css';
import Student from './components/Student';
import studentList from './models/studentList'
import Score from './components/Score';



function App() {

  // state
  const [studentData, setStudentData] = useState(studentList)


  return (
    <div className="App">
      {/* map the array of student data */}
      {studentData.map((pupil) => {
        console.log(pupil);

        return (
          <div id='wrapper'>
          {/* component 1 */}
          <Student 
            key={pupil.id}
            img={pupil.img}
            name={pupil.name}
            bio={pupil.bio}
            // scores={pupil.scores}
            // scores={pupil.scores.map((pupil) => {
            //   return (
            //     <>
            //     <li key={pupil.id}>{pupil.date}</li>
            //     <li key={pupil.id}>{pupil.score}</li>
            //     </>
            //   )
            // })}
      />
      {/* component 2 */}
      <div className='scoreWrapper'>
      <Score
      key={pupil.key}
      scores={pupil.scores.map((pupil) => {
        return (
          <ul className='scoreBox'>
            <li className='grade'>GRADE: </li>
            <li>{pupil.date}</li>
            <li className='pupilScore'>{pupil.score}</li>
          </ul>
        )
      })}
      />
      </div>
      </div>

        )
      })}
      

      
    </div>
  );
}

export default App;
