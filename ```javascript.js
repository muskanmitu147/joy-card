/* ==========================
   Premium Website Effects
   script.js
========================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Card Floating Animation
    // ==========================

    const card = document.querySelector(".card");

    if (card) {

        document.addEventListener("mousemove", (e) => {

            const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

            card.style.transform = `
                perspective(1000px)
                rotateY(${mouseX}deg)
                rotateX(${-mouseY}deg)
            `;

        });

        document.addEventListener("mouseleave", () => {

            card.style.transform = `
                perspective(1000px)
                rotateY(0deg)
                rotateX(0deg)
            `;

        });

        // Floating Effect
        let up = true;
        let pos = 0;

        setInterval(() => {

            if (up) {
                pos += 0.4;
                if (pos >= 10) up = false;
            } else {
                pos -= 0.4;
                if (pos <= 0) up = true;
            }

            card.style.marginTop = pos + "px";

        }, 40);

    }

    // ==========================
    // Ripple Effect
    // ==========================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {

        btn.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const size = Math.max(this.clientWidth, this.clientHeight);

            const rect = this.getBoundingClientRect();

            circle.style.width = size + "px";
            circle.style.height = size + "px";
            circle.style.left = (e.clientX - rect.left - size / 2) + "px";
            circle.style.top = (e.clientY - rect.top - size / 2) + "px";

            circle.classList.add("ripple");

            this.appendChild(circle);

            setTimeout(() => {
                circle.remove();
            }, 600);

        });

    });

    // ==========================
    // Fade Animation
    // ==========================

    const elements = document.querySelectorAll(".item, .btn");

    elements.forEach((el, i) => {

        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";

        setTimeout(() => {

            el.style.transition = "all .6s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }, i * 150);

    });

    console.log("Website Created Successfully ❤️");

});