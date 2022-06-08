let form = document.getElementById("form");
let input = document.getElementById("input")
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//Submit button
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Button Clicked');
    formValidation();

});

//Check if text area is empty
let formValidation = () => {

    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("Failure");
    } else {
        console.log("Success");
        msg.innerHTML = "";
        acceptData();
    }
}

//Data storage
let data = {};

//Entering accepted data into storage object under text label
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    input.value = "";
    createPost();
};

//Transfers data to post area
let createPost = () => {
    posts.innerHTML +=
        `
            <div>
                <p>${data.text}</p>
                    <span class="options">
                        <i onClick="editPost(this)" class="fas fa-edit"></i>
                        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
                    </span>
            </div>
        `;


};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};