function course(major, coursecode, coursename, semesters){
    this.major = major;
    this.coursecode = coursecode;
    this.coursename = coursename;
    this.semesters = semesters;
}

const thisclass = new course("ECE", "202", , "");

function courses_needed(majorreq, alreadytaken){
    // assume both inputs arrays
    const set1 = new Set(majorreq)
    return majorreq.filter(course => !set2.has(course));
}

const majorarray = [1, 2, 3, 4];
const alreadytaken = [2];