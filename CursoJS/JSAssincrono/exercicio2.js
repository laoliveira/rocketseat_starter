var inputElement = document.querySelector('#app input[name="user"]');
var buttonElement = document.querySelector("#app button");
var listElement = document.querySelector("#app ul#repoList");

buttonElement.onclick = searchUser;

function searchUser() {
	var userName = inputElement.value;

	axios
		.get("https://api.github.com/users/" + userName + "/repos")
		.then(function(response) {
			listElement.innerHTML = "";
            console.log(response.data);
			for (repoName of response.data) {
				var listItem = document.createElement("li");
				var listText = document.createTextNode(repoName.name);

				listItem.appendChild(listText);
				listElement.appendChild(listItem);
			}
		})
		.catch(function(error) {
			console.warn(error);
		});
}

