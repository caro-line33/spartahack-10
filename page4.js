// lisa added this
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
  
  const taken = localStorage.getItem('takenClasses');
  const classBank = document.getElementById('classBank');
  console.log(taken);
  const courseBank = document.getElementById('courseBank');
  document.addEventListener("DOMContentLoaded", async () => {
  const myMajor = localStorage.getItem("myMajor");
  let prerec_array = [];
  let i = 0;
  let needToTake = [];
  
      const takenClassesStr = localStorage.getItem("takenClasses") || "";
      const takenClasses = takenClassesStr ? takenClassesStr.split(",") : [];
    
      console.log("Major:", myMajor);
      console.log("Taken Classes:", takenClasses);
    
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
        
        data[myMajor].forEach((course, index) => {
          if (!takenClasses.includes(course.ClassCode)) {
            console.log(`${course.ClassCode} - ${course.ClassName}`);
            let reqClass = document.createElement('button');
            reqClass.innerHTML = (`${course.ClassCode} - ${course.ClassName}`);
            classBank.appendChild(reqClass);
            let newItem = document.createElement('button');
            newItem.innerHTML = `${course.ClassCode}, ${course.SemestersOffered}`;
            needToTake.push(course)
            
          }
        });

        // how to sort if something is required or not
        needToTake.forEach((course) => {
          if (course.Required == "yes") {
            console.log("Required: ", course.ClassCode)
            let req = document.createElement('div');
          }
          else {
            console.log("Not Required: ", course.ClassCode)

          }
        })

        console.log(prerec_array);
        classBank.appendChild(newItem);
  
      } catch (error) {
        console.error(error);
      }
    });