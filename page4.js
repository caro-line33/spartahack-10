// lisa added this
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

document.addEventListener("DOMContentLoaded", async () => {
  const myMajor = localStorage.getItem("myMajor");
  const takenClassesStr = localStorage.getItem("takenClasses") || "";
  const takenClasses = takenClassesStr ? takenClassesStr.split(",") : [];
  const creditLimit = Number(localStorage.getItem("creditLimit")) || 18;

  let semesterCredits = 0;
  let currentSemester = [];
  let requiredCourses = [];
  let electiveCourses = [];

  const classBank = document.getElementById('classBank');
  const requiredBank = document.getElementById('requiredCourses');
  
  console.log("Major:", myMajor);
  console.log("Taken Classes:", takenClasses);
  console.log("Credit Limit:", creditLimit);
    
  try {
    const response = await fetch("classes.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("JSON Data:", data);
    
    if (!data[myMajor]) {
      console.error(`No data found for major: ${myMajor}`);
      return;
    }
    
    for (let course of data[myMajor]) {
      if (takenClasses.includes(course.ClassCode)) {
        continue;
      }
      
      let prerequisitesMet = true;
      if (course.Prerecs && course.Prerecs.length > 0) {
        let flatPrereqs = course.Prerecs.flat(Infinity); // you should use a double nested loop to go through the prereqs, this doesnt do that it just makes it all into a big list.
        prerequisitesMet = flatPrereqs.every(prereq => takenClasses.includes(prereq));
      }
      
      if (!prerequisitesMet) {
        console.log(`Prerequisites not met for ${course.ClassCode}`);
        continue;
      }
      

      if (semesterCredits + course.Credits > creditLimit) {
        console.log(`Cannot add ${course.ClassCode} as it would exceed the credit limit.`);
        continue;
      }
      

      if (course.Required !== "yes") {
        continue;
      }

      currentSemester.push(course);
      semesterCredits += course.Credits;

      let courseDiv = document.createElement('div');
      courseDiv.innerHTML = `${course.ClassCode} - ${course.ClassName} (${course.Credits} credits)`;
      classBank.appendChild(courseDiv);
      
      requiredCourses.push(course);
      
      console.log(`Added ${course.ClassCode} (${course.Credits} credits). Semester total: ${semesterCredits}`);
    }
    const finalCount = document.createElement('div');
    finalCount.innerHTML = `credit total: ${semesterCredits}`;
    classBank.appendChild(finalCount);
    console.log("Final Semester Courses:", currentSemester);
    console.log("Total Semester Credits:", semesterCredits);
    
  } catch (error) {
    console.error(error);
  }
});
