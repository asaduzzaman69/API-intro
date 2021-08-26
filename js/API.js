//  function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//   }
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(data=>console.log(data))
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUsers(data))
}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}
// loadPosts()
function displayUsers(users) {
    const userID= document.getElementById('users');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText=`name: ${user.name} email: ${user.email}`;
        userID.appendChild(li) 
    }
}
function displayPost(posts) {

    
}