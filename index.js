const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "LinkedIn has revolutionized my professional networking, connecting me with valuable contacts and opportunities!",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "A powerhouse for career growth, LinkedIn's user-friendly interface makes job hunting a breeze.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Incredible platform! LinkedIn has become my go-to for staying updated on industry trends and connecting with like-minded professionals.",
  },
  {
    name: "Alexander",
    photoUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "LinkedIn's robust features and intuitive design have transformed the way I build my professional brand.",
  },
  {
    name: "Jasmine",
    photoUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Kudos to LinkedIn for providing a seamless platform to showcase my skills and expertise to a global audience.",
  },
  {
    name: "Isabella",
    photoUrl:
    "https://plus.unsplash.com/premium_photo-1661521003433-8dfececd8548?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "LinkedIn has played a crucial role in expanding my professional circle and opening doors to new possibilities.",
  },
  {
    name: "Hannah",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "As a job seeker, LinkedIn's job search functionalities are a game-changer, making the process efficient and effective.",
  },
  {
    name: "David",
    photoUrl:
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "LinkedIn's community engagement and insightful content have turned it into an invaluable resource for professional development.",
  },
  {
    name: "Christopher",
    photoUrl:
    "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Exceptional platform for business professionals! LinkedIn's premium features are worth the investment for serious career advancement.",
  },
  {
    name: "Benjamin",
    photoUrl:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "A must-have for any professional – LinkedIn's influence on my career growth is undeniable, creating endless opportunities and connections.",
  },
];

const img = document.querySelector("img");
const textval = document.querySelector(".text");
const userval = document.querySelector(".username");

let count = 0;

updateTestimonial();

function updateTestimonial() {
  const {name, photoUrl, text}   = testimonials[count];

  img.src = photoUrl;

  console.log(textval.innerText)
  textval.innerText = text;

  console.log(userval.innerText)
  userval.innerText = name;
  
  count++;
  if (count === testimonials.length) {
    count = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
