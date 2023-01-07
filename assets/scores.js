$(".btn").on("click", function () {
  //get user input from form
  var userInitial = $('input[name="user-initial"]').val();

  // Combine initals and scores
  const playerScore = userInitial + "..............................." + time;

  // Require initials from player
  if (!userInitial) {
    alert("Please enter your initials");
    return;
  }
  //sets up local storage or make an array to add user input
  let score = JSON.parse(localStorage.getItem("Score")) || [];

  // save the users input to local storage
  score.push(playerScore);
  localStorage.setItem("Score", JSON.stringify(score));

  // Add user initial and scores to the high score list
  $("ol").append("<li>" + playerScore + "</li>");

  
  $('input[name="user-initial"]').val("");
});
