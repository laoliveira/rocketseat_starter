var inputElement = document.querySelector('#app input[name="user"]');
var buttonElement = document.querySelector("#app button");
var listElement = document.querySelector("#app ul#repoList");
var errorDivElement = document.querySelector("#errorMessage");

buttonElement.onclick = searchUser;

function searchUser() {
	var userName = inputElement.value;
    listElement.innerHTML = "";
    errorDivElement.innerHTML = '';

	var listItem = document.createElement("li");
	var listText = document.createTextNode("Loading...");
	listItem.appendChild(listText);
	listElement.appendChild(listItem);

	axios
		.get("https://api.github.com/users/" + userName + "/repos")
		.then(function(response) {
			listElement.innerHTML = "";
			for (repoName of response.data) {
				var listItem = document.createElement("li");
				var listText = document.createTextNode(repoName.name);

				listItem.appendChild(listText);
				listElement.appendChild(listItem);
			}
		})
		.catch(function(error) {
            if(error.response.status === 404){
                listElement.innerHTML = "";
                var errorElement = document.createElement('h4');
                var errorText = document.createTextNode('Github user not found.');
                errorElement.appendChild(errorText);
                errorDivElement.appendChild(errorElement);
            }
		});
}