var typed = new Typed("#job", {
    strings: ["Backend Developer", "UI/UX Designer", "Programmer Enthusiast"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2200,
    loop: true,
});

AOS.init({
    throttleDelay: 99,
    delay: 0,
    duration: 1000,
});

document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("projects-list");
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = `project-card`;

        projectCard.innerHTML = `
			<div class="max-w-sm rounded overflow-hidden shadow-lg">
				<img class="w-full" src=${project.image} alt="${project.image}" />
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">${project.title}</div>
					<p class="text-gray-500 text-base">
						${project.description}
					</p>
				</div>
			</div>
		`;
        projectContainer.appendChild(projectCard);

        projectCard.addEventListener("mouseenter", () => {
            projectCard.classList.add("cursor-pointer")
            projectCard.classList.add("md:scale");
            Array.from(projectContainer.children).forEach((card) => {
                if (card !== projectCard) card.classList.add("md:blur");
            });
        });

        projectCard.addEventListener("mouseleave", () => {
            projectCard.classList.remove("cursor-pointer")
            projectCard.classList.remove("md:scale");
            Array.from(projectContainer.children).forEach((card) =>
                card.classList.remove("md:blur")
            );
        });

        projectCard.addEventListener("click", () => {
            if (project.site_link) {
                window.open(project.site_link, "_blank").focus();
            } else {
                console.warn(
                    `No site link available for project: ${project.title}`
                );
            }
        });
    });
});
