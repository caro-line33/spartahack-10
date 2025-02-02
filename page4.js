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
      
      // check if all prerequisitives are fulfilled
      let prerequisitesMet = true;
      let prereqs = [];
      let conc = 1;
      if (course.Prerecs.length > 0) {
        course.Prerecs.forEach(grouping => {
          console.log("Grouping, ", grouping)
          prereqs[grouping] = 1;
        }); 
        prerequisitesMet = prereqs.every(prereq => takenClasses.includes(prereq));
      }
      else if (course.Concurrents.length > 0){
        let concurrentsSatisfied = 0;
        for (conc in course.Concurrents){
          if(conc in takenClasses){
            console.log('hello');
          }
          else{
            prerequisitesMet = false;
          }
        }
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

      let courseDiv = document.createElement('h4');
      courseDiv.innerHTML = ` <strong> ${course.ClassCode} </strong>- ${course.ClassName} (${course.Credits} credits)`;
      classBank.appendChild(courseDiv);
      
      requiredCourses.push(course);
      
      console.log(`Added ${course.ClassCode} (${course.Credits} credits). Semester total: ${semesterCredits}`);
    }
    const finalCount = document.createElement('h4');
    finalCount.innerHTML = `<strong>Credit Total</strong>: ${semesterCredits}`;
    classBank.appendChild(finalCount);
    console.log("Final Semester Courses:", currentSemester);
    console.log("Total Semester Credits:", semesterCredits);
    
  } catch (error) {
    console.error(error);
  }
});
