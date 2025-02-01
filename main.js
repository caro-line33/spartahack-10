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


const enterMajorButton = document.getElementById('enterMajorButton');
enterMajorButton.addEventListener('click', enter)
enterMajorButton.disabled = true;

function enter(){
    if(majorOptions.value){
        window.location.href = "page2.html"; 
    }
}

const majorOptions = document.getElementById('majorOptions');
majorOptions.addEventListener('change', storeMajor);
function storeMajor(){
    if(majorOptions.value){
        console.log(majorOptions.value);
        enterMajorButton.disabled = false;
    }
}

