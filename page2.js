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

    console.log("Major:", data.Major); // Outputs: EE

    const classes = data.classes;
    console.log("Classes:", classes);

    data.classes.forEach((course, index) => {
      console.log(`${course.ClassCode} - ${course.ClassName}`);
      let newItem = document.createElement('button');
      newItem.class = 'courseButton';  
      newItem.innerHTML = (`${course.ClassCode}`);
      classBank.appendChild(newItem);

    });
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });

