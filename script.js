const faq_questions = document.querySelector(".faq_questions")

const arr_questions = [
    {
        q: 'What is Frontend Mentor, and how will it help me?',
        a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        q: "Is Frontend Mentor free?",
        a: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        q: "Can I use Frontend Mentor projects in my portfolio?",
        a: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        q: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        a: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
]

arr_questions.forEach((question, i) => {
    const ques = document.createElement('div')
    ques.classList.add("question")

    const heading = document.createElement('h2')
    heading.classList.add('ques_heading')

    const img = document.createElement('img')
    img.src = './assets/images/icon-plus.svg'
    img.alt = "icons"

    const parag = document.createElement('p')
    parag.classList.add('answer')

    heading.innerHTML = question.q
    parag.innerHTML = question.a

    faq_questions.append(ques)
    ques.append(heading)
    ques.append(parag)
    heading.append(img)

    ques.addEventListener("click", () => {

        
        if (parag.style.display === "block") {
            parag.style.display = "none";
            img.src = './assets/images/icon-plus.svg'
        } else {
            img.src = './assets/images/icon-minus.svg'
            parag.style.display = "block";
        }
    })

    if (i === 0) {
        parag.style.display = "block";
        img.src = './assets/images/icon-minus.svg';
    }
})