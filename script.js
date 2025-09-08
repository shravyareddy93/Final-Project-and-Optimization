document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const posts = [
  "Post 1: Web Development Tips",
  "Post 2: JavaScript Best Practices",
  "Post 3: Responsive Design Tricks",
  "Post 4: Performance Optimization",
  "Post 5: Debugging Made Easy"
];

let postIndex = 0;
document.getElementById("load-posts").addEventListener("click", () => {
  const blogContainer = document.getElementById("blog-posts");
  if (postIndex < posts.length) {
    const newPost = document.createElement("p");
    newPost.textContent = posts[postIndex];
    blogContainer.appendChild(newPost);
    postIndex++;
  } else {
    alert("No more posts!");
  }
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "✅ Message sent successfully!";
});
