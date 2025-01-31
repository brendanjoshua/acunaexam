document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const learnMoreButtons = document.querySelectorAll(".learn-more");
    const worksImages = document.querySelectorAll(".works-image");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); 
            sections.forEach(section => section.classList.remove("active")); 
            document.getElementById(targetId).classList.add("active"); 
        });
    });


    learnMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            worksImages.forEach(workImage => {
                if (workImage !== this.closest(".works-image")) {
                    workImage.classList.add("hidden"); 
                }
            });
    
            const workImage = this.closest(".works-image");
            const titleElement = workImage.querySelector("h3");
            const imageElement = workImage.querySelector("img");
    
            titleElement.style.visibility = "hidden"; 
            this.style.visibility = "hidden"; 
    
            const title = titleElement.textContent;
            const imageSrc = imageElement.src;
    
            
            let projectDescription = "";
            if (title === "Catch A Blast!") {
                projectDescription = `Catch a Blast is a simple, retro-inspired arcade game designed to entertain while subtly promoting healthy choices and stress management among young adults. Players control a paddle to catch “healthy” items that add to their score while avoiding “unhealthy” items. Developed using the Turtle module, this game combines simplicity with meaningful gameplay.`;
            } else if (title === "Grocero") {
                projectDescription = `Grocero is a grocery store inventory management system that allows users to add, update, and track products. It simplifies inventory control, streamlines order processing, and integrates data visualization to provide insights into inventory performance. Built with a focus on efficiency and usability, Grocero makes grocery management easier.`;
            } else if (title === "Vocably") {
                projectDescription = `Vocably is a vocabulary-building app designed to help users improve their language skills through engaging word games. It includes features like flashcards, word quizzes, and a personalized learning path to enhance vocabulary retention. The app's gamified interface ensures an enjoyable learning experience.`;
            }
    
            const newSection = document.createElement("section");
            newSection.classList.add("project-details");
            newSection.innerHTML = `
                <div class="project-detail-container">
                    <img src="${imageSrc}" alt="${title}">
                    <div class="project-info">
                        <h3>${title}</h3>
                        <p>${projectDescription}</p>
                    </div>
                </div>
                <button class="go-back">Go Back</button>
            `;
    
            document.body.appendChild(newSection);
    
            newSection.scrollIntoView({ behavior: "smooth" });
    
            const goBackButton = newSection.querySelector(".go-back");
            goBackButton.addEventListener("click", () => {
                newSection.remove();
    
                worksImages.forEach(workImage => {
                    workImage.classList.remove("hidden"); 
                });
    
                titleElement.style.visibility = "visible"; 
                imageElement.style.visibility = "visible"; 
                this.style.visibility = "visible"; 
            });
        });
    });
});
