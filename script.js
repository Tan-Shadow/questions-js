// using selector inside the element

// ====================================
// here we are selecting all the questions article
//  next we are looping through all of them
// each indivitual question class article has a name
// of question..so dont get confused
// next we are taking only the btn which the '
// question article has (we will call question article as questicle okay nice)
// we did this because we dont wanna have to take all
// the btns at once as doing so would be hard
// now we are adding an event listener to each btn of that paricular questicle
// after click we will loop through all the questions we have
// we will call each of the indivitual as item
// now we will check if after the btn press does the btn pressed
// pressed have the same questicle as it was passed
// if they are not the same then it will remove the class
// of show-text from the question and with that it will toggle the
// question text which it has pressed btn on

// ====================================

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// by travering the dom

// =======================================================
// so here we are taking all the btn and adding an event
// listener to it we are taking the
// event in e and taking its current target which means
// the target we click on we taking its parents parents
// because in css we have added a class in which
// if show-text is added to the question then
// plus icon will change to minus
// question-text will be display block
// now we are using foreach loop to reduce the code
// for each will take a callback in which the param
//  will be the element from the array
// =================================================

// const questionBtn = document.querySelectorAll(".question-btn");

// questionBtn.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
