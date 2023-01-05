var userFormEl = $("#user-form");
var initialListEl = $("#initial-list");

function showScores(event) {
  //   Prevent the default behavior
  event.preventDefault();

  var userInitial = $('input[name="user-initial"]').val();

  if (!userInitial) {
    console.log("Please enter your initials");
    return;
  }

  var initialListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark ">'
  );
  initialListItemEl.text(userInitial);

  // add delete button to remove shopping list item
  initialListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  initialListEl.append(initialListItemEl);
  console.log(initialListEl);
  // clear the form input element
  $('input[name="user-initial"]').val("");
}

userFormEl.on("submit", showScores);