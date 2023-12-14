document.querySelector(".request").addEventListener("click", (ev) => {
    requestActivity();
}); 

function requestActivity() {
    const url = "https://www.boredapi.com/api/activity";
    const http = new XMLHttpRequest();

    http.open("GET", url);
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Petición realizada")
            insertOutputResponse(this.response);

        } 
    }
    http.send();
}

function insertOutputResponse(response) {
    let decodedResponse = JSON.parse(response);
    let container = document.querySelector(".activity");

    container.innerHTML = "";

    let activity = document.createElement("h4");
    activity.append(decodedResponse.activity);
    container.append(activity);

    let link = document.createElement("a");
    link.href = decodedResponse.link;
    link.text = decodedResponse.link;
    link.target = "_blank";
    container.append(link);

    let type = document.createElement("p");
    type.append(decodedResponse.type);
    container.append(type);
}

