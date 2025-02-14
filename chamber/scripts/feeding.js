document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Video interaction
    const video = document.querySelector(".video");
    video.addEventListener("play", function () {
        console.log("Video is playing");
    });
    video.addEventListener("pause", function () {
        console.log("Video is paused");
    });
    
    // Image hover effect
    const studentFace = document.querySelector(".student-face");
    studentFace.addEventListener("mouseenter", function () {
        studentFace.style.transform = "scale(1.1)";
        studentFace.style.transition = "transform 0.3s ease";
    });
    studentFace.addEventListener("mouseleave", function () {
        studentFace.style.transform = "scale(1)";
    });
});
