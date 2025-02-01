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

// removes all items in second list from first list
function coursesNeeded(majorReq, alreadyTaken) {
    const takenSet = new Set(alreadyTaken);
    return majorReq.filter(course => !takenSet.has(course));
}


// Get all necessary DOM elements first
const majorOptions = document.getElementById('majorOptions');
const enterMajorButton = document.getElementById('enterMajorButton');

// Add event listener for the major selection change
majorOptions.addEventListener('change', storeMajor);

// Initially disable the "Enter" button
enterMajorButton.disabled = true;

// Event listener for the "Enter" button click
enterMajorButton.addEventListener('click', enter);

function storeMajor() {
    if (majorOptions.value) {
        console.log(majorOptions.value);
        localStorage.setItem("myMajor", majorOptions.value);
        // Use getItem() to retrieve the value from localStorage
        console.log(localStorage.getItem("myMajor"));
        enterMajorButton.disabled = false;
    }
}

function enter(){
    if(majorOptions.value){
        window.location.href = "page2.html"; 
    }
}
