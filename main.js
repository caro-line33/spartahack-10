// Constructor function for Course objects.
function Course(major, coursecode, coursename, semesters) {
this.major = major;
this.coursecode = coursecode;
this.coursename = coursename;
this.semesters = semesters;
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

const majorOptions = document.getElementById('majorOptions');
const enterMajorButton = document.getElementById('enter-major');
enterMajorButton.addEventListener('click', )

function storeMajor(){
    console.log(majorOptions.value);
}