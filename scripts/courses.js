const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
// Responsive Navigation Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});

// Dynamic Footer Information
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Course Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Render Courses
function renderCourses(filter = null) {
    const container = document.getElementById('course-list');
    container.innerHTML = '';

    let filteredCourses = courses;
    if (filter === 'WDD') {
        filteredCourses = courses.filter(course => course.code.startsWith('WDD'));
    } else if (filter === 'CSE') {
        filteredCourses = courses.filter(course => course.code.startsWith('CSE'));
    }

    let totalCredits = 0;
    filteredCourses.forEach(course => {
        totalCredits += course.credits;

        const courseDiv = document.createElement('div');
        courseDiv.textContent = `${course.code}: ${course.name} (${course.credits} credits)`;
        courseDiv.style.background = course.completed ? '#c8e6c9' : '#ffcdd2';
        courseDiv.style.padding = '1rem';
        courseDiv.style.margin = '0.5rem 0';
        courseDiv.style.borderRadius = '5px';
        container.appendChild(courseDiv);
    });

    const totalDiv = document.createElement('div');
    totalDiv.textContent = `Total Credits: ${totalCredits}`;
    totalDiv.style.fontWeight = 'bold';
    container.appendChild(totalDiv);
}

// Filter Buttons
document.getElementById('all-courses').addEventListener('click', () => renderCourses());
document.getElementById('wdd-courses').addEventListener('click', () => renderCourses('WDD'));
document.getElementById('cse-courses').addEventListener('click', () => renderCourses('CSE'));

// Initial Render
renderCourses();
