// Sample data for posts
let posts = [];

// Function to create a new post
function createPost() {
    const postContent = document.getElementById("post-content").value;
    if (postContent.trim() === "") {
        alert("Please enter a post.");
        return;
    }

    const post = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
    };

    posts.push(post);
    document.getElementById("post-content").value = "";

    // Refresh the post feed
    displayPosts();
}

// Function to display posts in the feed
function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <p>${post.content}</p>
            <small>${post.timestamp}</small>
        `;
        postsContainer.appendChild(postElement);
    }
}

// Initial display of posts
displayPosts();

// Function to edit a post
function editPost(postIndex) {
    const newContent = prompt("Edit your post:", posts[postIndex].content);
    if (newContent !== null && newContent.trim() !== "") {
        posts[postIndex].content = newContent;
        displayPosts();
    }
}

// Function to delete a post
function deletePost(postIndex) {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
        posts.splice(postIndex, 1);
        displayPosts();
    }
}

// Function to display posts in the feed
function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <p>${post.content}</p>
            <small>${post.timestamp}</small>
            <button onclick="editPost(${i})">Edit</button>
            <button onclick="deletePost(${i})">Delete</button>
        `;
        postsContainer.appendChild(postElement);
    }
}

