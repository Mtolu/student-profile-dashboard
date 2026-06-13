import StudentCard from './StudentCard';
import Counter from './Counter';
import './App.css'


function App() {
  const students = [  
    { id: 1, 
      name: "Ada Johnson", 
      age: 21, 
      course: "React Development", 
      location: "Lagos, Nigeria", 
      bio: "I am learning frontend development.", 
      skills: ["HTML", "CSS", "JavaScript", "React"], 
    }, 
    
    { id: 2, 
      name: "Tunde Bello", 
      age: 24, 
      course: "Backend Development", 
      location: "Abuja, Nigeria", 
      bio: "I enjoy building APIs and working with databases.", 
      skills: ["Node.js", "Express", "PostgreSQL"], 
    }, 

    { id: 3, 
      name: "Mary Okafor", 
      age: 19, 
      course: "UI/UX and Frontend", 
      location: "Port Harcourt, Nigeria", 
      bio: "I love designing and building beautiful user interfaces.", 
      skills: ["Figma", "HTML", "CSS", "React", "Tailwind", "JavaScript"], 
    }, 
  ]; 


  return (
    <>
    <div className="student-dashboard">
      <header>
        <h2>Welcome to the Student Profile Dashboard</h2>
        <h3>React Assignment: Student Profile</h3>
      </header>
       <div className="student-cards-container">
          {students.map(student => (  
            //imported as a component from StudentCard.jsx 
            <StudentCard 
              key={student.id} 
              name={student.name} 
              age={student.age} 
              course={student.course} 
              location={student.location} 
              bio={student.bio} 
              skills={student.skills} 
            />
          ))}
      </div>
     
    </div>
     
    </>
  )
}

export default App;
