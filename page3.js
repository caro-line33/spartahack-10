console.log('hello');
const taken = localStorage.getItem('takenClasses');
console.log(taken);

document.addEventListener("DOMContentLoaded", async () => {
    const myMajor = localStorage.getItem("myMajor");

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

      data[myMajor].forEach((course) => {
        if (!takenClasses.includes(course.ClassCode)) {
          console.log(`${course.ClassCode} - ${course.ClassName}`);
        }
      });
    } catch (error) {
      console.error("Error fetching the JSON file:", error);
    }
  });
  