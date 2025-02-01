const classBank = document.getElementById('selectedCourses');

fetch('classes.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Logs the entire JSON object


document.addEventListener("DOMContentLoaded", async () => {
  data = await fetch("class.json").then(data => data.json())
  console.log(data);
  
    const courseSearch = document.getElementById("courseSearch");
    const selectedCourses = document.getElementById("selectedCourses");

    data.classes.forEach((course, index) => {
      console.log(`${course.ClassCode} - ${course.ClassName}`);
      let newItem = document.createElement('button');
      newItem.class = 'courseButton';  
      newItem.innerHTML = (`${course.ClassCode}`);
      classBank.appendChild(newItem);

    });
  });