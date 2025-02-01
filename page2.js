let data


document.addEventListener("DOMContentLoaded", async () => {
  data = await fetch("class.json").then(data => data.json())
  console.log(data);
  
    const courseSearch = document.getElementById("courseSearch");
    const selectedCourses = document.getElementById("selectedCourses");

    courseSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const courseValue = courseSearch.value.trim();
  
        if (courseValue !== "") {
          const courseElement = document.createElement("p");
          courseElement.textContent = courseValue;
  
          selectedCourses.appendChild(courseElement);
  
          courseSearch.value = "";
        }
      }
    });
  });
