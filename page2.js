document.addEventListener("DOMContentLoaded", async () => {
    // Get the container element and localStorage value
    const classBank = document.getElementById('selectedCourses');
    const myMajor = localStorage.getItem('myMajor');
    
    try {
      // Fetch the JSON file
      const response = await fetch('classes.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Parse the JSON data
      const data = await response.json();
      console.log(data); // Logs the entire JSON object
      console.log("Major:", data.Major); // Logs the major value, e.g., "EE"
      
      // Loop through the classes and create a button for each course
      data.classes.forEach((course, index) => {
        console.log(`${course.ClassCode} - ${course.ClassName}`);
        
        // Create a new button element
        let newItem = document.createElement('button');
        
        // Set its innerHTML (or textContent) to display the ClassCode
        newItem.innerHTML = `${course.ClassCode}`;
        
        // Append the new button to the classBank container
        classBank.appendChild(newItem);
      });
    } catch (error) {
      console.error('Error fetching the JSON file:', error);
    }
  });
  
