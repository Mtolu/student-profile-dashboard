import { useState } from "react";
import SkillBadge from './SkillBadge'
import Counter from './Counter'

    
function StudentCard({name, age, course, location, bio, skills}) {  // To create studentcard props
    
    // State to manage the visibility of the bio section(the use of  boolean), it is boolean that could gave clean and easy code, (if statement could do it also, but there will be more code)
    const [showBio, setShowBio] = useState(true);
    
    // state to manage the Favorite status of the student (the use of  boolean)
    const [isFavorite, setIsFavorite] = useState(false);

    // Conditional statement for Skills (the use of let x = "" and if (){} ), because the students are not having the same numbers of programe language for there courses

    let studentLevelMessage ="";
    let studentLevel = "";
   
    if(skills.length <= 3){
        studentLevelMessage = "Beginner";
        studentLevel = "beginner-level"
    }
    else if(skills.length > 3 && skills.length <= 5){
        studentLevelMessage = "Intermediate";
        studentLevel = "intermediate-level";
    }
    else{
        studentLevelMessage = "Advanced";
        studentLevel = "advanced-level";
    };
            // To create student infos for UI, the card information should start from here (name, age, course, location, bio, skills), because UI need it for display in the browser, there StudentCard component will return it.
    return(
        <div className="student-card">
            <div className="student-header">
                <h3>    {/* the name and Favorite remark need to be side by side and flexed in CSS, because it is more better seen the Favorite with the star at the top */} 
                    {name}
                    
                    {isFavorite && <span className="favorite-indicator"> ⭐Favorite Student </span>}

                </h3>
            </div>
             {/* Here is little tricky because the Array [name, age, course, location, bio, skills] will appear on UI twice one as label
             and the other one as infos(a little bit confused), because each of them is an object inside Array, probably from backend database. 
              The App.jsx got the data for the infos, Therefore, using map with arow function to loop it through, here I will type in the label 
              ones in between <strong></strong> to make charachter bolder than Infos one and code the infos one for App.jsx to finished the job. 
              After all StudentCard will be exported*/}
                
            <div className="student-details">
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Course:</strong> {course}</p>
                <p><strong>Location:</strong> {location}</p> 

                {/* Conditional statement for showing Bio   */}
                {showBio && <p className="student-bio"><strong>Bio:</strong> {bio}</p>}
            </div>

            <h4>Skills:</h4>
                {/*Here is also much more tricky than student Array, because each student have different skills, therefore, map with arrow 
                functiont will loop through skills Array before exporting. At the end, it will look like the students Array  
                loop through vertically while the Skills loop through horizontally and display like badge, the way it appear on UI 
                with the use of CSS  */}
            <div className="skills-section"> 
                {skills.map((skill, index) => (
                    <SkillBadge key={`skill-${index}`} skill={skill} />
                ))}                 
            </div>

             {/* To display skills badge   */}
                <div>
                    <span className={`show-badge ${studentLevel}`}>{studentLevelMessage}</span>
                </div> 
               

            {/* Button section */}        
            <div className="card-button-logic">

                    {/* To show the bio section when the button is clicked and hide it when clicked again, 
                    these buttons suppose to be next or under the Bio and Favorite, but it will change appearance of the card on UI */}  
                <button onClick={() => setShowBio(!showBio)} className="btn toggle">
                    {showBio ? 'Hide Bio' : 'Show Bio'}
                </button>

                    {/* To show the Favourite button */}
                <button onClick={() => setIsFavorite(!isFavorite)} className= {`btn favorite ${isFavorite ? 'active' : ''}`}
                    >
                    {isFavorite ? 'Remove as Favorite' : 'Mark as Favorite'}
                </button>
            </div>
            
            {/* To display the counter on UI (browser) */}  
            <Counter />            
        </div>
    )
}

export default StudentCard;