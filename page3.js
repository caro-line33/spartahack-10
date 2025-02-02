document.addEventListener("DOMContentLoaded", async () => {
    // Get the container element where the courses will be displayed
    const classBank = document.getElementById('selectedCourses');
    
    // Get the major from localStorage (e.g., "EE")
    const myMajor = localStorage.getItem('myMajor');
    
    // Get the taken classes from localStorage.
    // We assume they are stored as a JSON string. If not, adjust accordingly.
    const takenClasses = JSON.parse(localStorage.getItem('takenClasses')) || [];
  
    try {
      // Fetch the JSON file containing the courses
      const response = await fetch('classes.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Parse the JSON data
      const data = await response.json();
      console.log("JSON data:", data);
      
      // Check if there is data for the selected major
      if (!data[myMajor]) {
        console.error(`No course data available for major: ${myMajor}`);
        return;
      }
      
      // Filter out courses that have already been taken
      const availableCourses = data[myMajor].filter(course => {
        return !takenClasses.includes(course.ClassCode);
      });
      
      console.log("Available courses:", availableCourses);
      
      // Loop through each available course and create a button for it
      availableCourses.forEach((course) => {
        // Log the course info for debugging
        console.log(`${course.ClassCode} - ${course.ClassName}`);
        
        // Create a new button element
        const newItem = document.createElement('button');
        
        // Set its content to display the course code and name
        newItem.textContent = `${course.ClassCode} - ${course.ClassName}`;
        
        // Append the button to the container
        classBank.appendChild(newItem);
      });
      
    } catch (error) {
      console.error('Error fetching the JSON file:', error);
    }
  });
  