const fs = require('fs');
const path = require('path');

class Course {
    constructor(coursecode, coursename, credits, prereqs, concurrents, semesters) {
        this.coursecode = coursecode;
        this.coursename = coursename;
        this.credits = credits;
        this.prereqs = prereqs; // This will be an array of arrays
        this.concurrents = concurrents; // This will be an array
        this.semesters = semesters; // This will be an array
    }

    // Static method to read the file and initialize Course objects
    static loadCoursesFromFile(filePath) {
        const courses = [];
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n');

        for (const line of lines) {
            if (line.trim() === '') continue; // Skip empty lines

            // Use a regular expression to parse the line
            const match = line.match(/^(\w+)\s+"([^"]+)"\s+(\d+)\s+"([^"]*)"\s+"([^"]*)"\s+"([^"]*)"/);
            if (!match) {
                console.error(`Skipping invalid line: ${line}`);
                continue;
            }

            const coursecode = match[1];
            const coursename = match[2];
            const credits = parseInt(match[3], 10);
            const prereqs = match[4].split(',').map(group => group.trim().split(/\s+/));
            const concurrents = match[5].split(/\s+/).filter(code => code.trim() !== '');
            const semesters = match[6].split('');

            const course = new Course(coursecode, coursename, credits, prereqs, concurrents, semesters);
            courses.push(course);
        }

        return courses;
    }
}


// Main function to test the Course class
function main() {
    // Path to the courses file
    const filePath = path.join(__dirname, 'courses.txt');

    // Load courses from the file
    const courses = Course.loadCoursesFromFile(filePath);

    // Print all courses to verify the parsing
    console.log('Loaded Courses:');
    courses.forEach((course, index) => {
        console.log(`\nCourse ${index + 1}:`);
        console.log(`  Course Code: ${course.coursecode}`);
        console.log(`  Course Name: ${course.coursename}`);
        console.log(`  Credits: ${course.credits}`);
        console.log(`  Prerequisites: ${JSON.stringify(course.prereqs)}`);
        console.log(`  Concurrents: ${JSON.stringify(course.concurrents)}`);
        console.log(`  Semesters Offered: ${JSON.stringify(course.semesters)}`);
    });

    // Example: Accessing specific course data
    if (courses.length > 0) {
        const firstCourse = courses[0];
        console.log('\nExample: Accessing the first course:');
        console.log(`Course Code: ${firstCourse.coursecode}`);
        console.log(`Prerequisites: ${JSON.stringify(firstCourse.prereqs)}`);
        console.log(`Can be taken concurrently with: ${JSON.stringify(firstCourse.concurrents)}`);
    }
}

// Run the main function
main();