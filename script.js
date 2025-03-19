window.addEventListener("load", function() {
    handleFormSubmit()
})



// better to write functions, elsewhere in script then call in eventlistener

function getUserDetailsFromGithub(userInput){
    //something about javascript promises
    fetch(`https://api.github.com/users/${userInput.username}`)
    .then((response) => response.json())
    // => acts as return keyword [for function]
    .then((data) =>{
        let userimage = document.querySelector("#userimage")
        let public_repos = document.querySelector("#public_repos")
        let followers = document.querySelector("#followers")
        let usernameTag = document.querySelector("#username")

        usernameTag.innerHTML = data.login
        followers.innerHTML = data.followers
        public_repos.innerHTML = data.public_repos
        userimage.setAttribute("src", data.avatar_url)

        console.log('data', data)
    })
    if(data.login == undefined) {
        let error = "You have an error"
    }


}

function handleFormSubmit() {
    
    let form = document.getElementById("username-form")
    form.addEventListener("submit", function(event) {
        event.preventDefault() //prevent default behaviour i.e doesnt reload page

        let formData = new FormData(form)
        let data = Object.fromEntries(formData.entries())
        //creating object from another object

        getUserDetailsFromGithub(data)
    })
}