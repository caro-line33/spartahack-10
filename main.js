// class constructor
class Course {
    constructor(coursecode, coursename, credits, prereqs, semesters) {
        // might need to edit constructor depending on how the course data is read in
        this.coursecode = coursecode;
        this.coursename = coursename;
        this.credits = credits;
        this.prereqs = prereqs;
        this.semesters = semesters;

    }
}

const thisClass = new Course("ECE", "202", "Introduction to Circuits", "Fall");

// removes all items in second list from first list
function coursesNeeded(majorReq, alreadyTaken) {
    const takenSet = new Set(alreadyTaken);
    return majorReq.filter(course => !takenSet.has(course));
}

const majorArray = [1, 2, 3, 4]; 
const alreadyTaken = [2];

console.log(coursesNeeded(majorArray, alreadyTaken));

document.addEventListener('DOMContentLoaded', () => {
    const majorOptions = document.getElementById('majorOptions');
    const enterMajorButton = document.getElementById('enterMajorButton');
    
    if (enterMajorButton && majorOptions) {
      enterMajorButton.addEventListener('click', storeMajor);
    } else {
      console.error("One or both of the required elements were not found.");
    }
    
    function storeMajor(){
        console.log(majorOptions.value);
        localStorage.setItem('selectedMajor', selectedMajor);
        console.log(localStorage[selectedMajor]);
    }
  });

const majorOptions = document.getElementById('majorOptions');
majorOptions.addEventListener('change', storeMajor);
function storeMajor(){
    console.log(majorOptions.value);
}