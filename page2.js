document.addEventListener("DOMContentLoaded", async () => {
    // Get the container element and the major from localStorage
    const classBank = document.getElementById('selectedCourses');
    const myMajor = localStorage.getItem('myMajor'); // e.g., "EE"
    const confirmClasses = document.getElementById('confirmClasses');
    let selectedClasses = [];
    
    try {
      // Fetch the JSON file
      const response = await fetch('classes.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Parse the JSON data
      const data = await response.json();
      console.log(data); // Logs the entire JSON object
  
      // Log the major retrieved from localStorage
      console.log("Major from localStorage:", myMajor);
  
      // Check if the JSON has an entry for the major
      if (!data[myMajor]) {
        console.error(`No data found for major: ${myMajor}`);
        return;
      }
  
      // Loop through the courses for the major and create a button for each course
      data[myMajor].forEach((course, index) => {
        console.log(`${course.ClassCode} - ${course.ClassName}`);
  
        // Create a new button element for this course
        let newItem = document.createElement('button');
        
        // Set its innerHTML (or textContent) to display the ClassCode
        newItem.innerHTML = `${course.ClassCode}`;
        newItem.addEventListener("click", () => {
          if (!selectedClasses.includes(course.ClassCode)){
            selectedClasses.push(course.ClassCode)
            newItem.className = 'selected';
            console.log("Selected Classes:", selectedClasses)
          }
          else if (selectedClasses.includes(course.ClassCode)){
            index = selectedClasses.indexOf(course.ClassCode)
            selectedClasses.splice(index, 1)
            newItem.className = 'unselected';
            console.log("Selected Classes:", selectedClasses)
          }
        })
        // Append the new button to the classBank container
        classBank.appendChild(newItem);
      });
      
    } catch (error) {
      console.error('Error fetching the JSON file:', error);
    }

    confirmClasses.addEventListener('click', storeTakenClasses)
    function storeTakenClasses(){
        localStorage.setItem("takenClasses", selectedClasses);
        window.location.href = "page3.html"; 
    }
  });

