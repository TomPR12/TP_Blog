const comments = [];

document.getElementById("comment-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const date = new Date();
  const newComment = {
    name: name,
    comment: comment,
    date: date.toLocaleString()
  };
  comments.push(newComment);
  console.log(comments);
});
