const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const randomBtn = document.querySelector(".random");
const copyBtn = document.querySelector(".copy");
const copyTooltip = document.getElementById("copy-tooltip");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    document.body.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyTooltip.innerText = "Copied.";
    setTimeout(() => copyTooltip.innerText = "Copy to Clipboard", 1600);
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
})

selectMenu.addEventListener("change", () => generateGradient(false));
randomBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);


const samples = document.getElementById("samples");
const showBtn = document.getElementById("show-text");
const showIcon = document.getElementById("eye-icon");

function showSamples() {
    if (window.getComputedStyle(samples).display === "none") {
        samples.style.display = "flex";
        showIcon.classList.add("fa-eye");
    } else {
        samples.style.display = "none";
        showIcon.classList.remove("fa-eye");
    }
}