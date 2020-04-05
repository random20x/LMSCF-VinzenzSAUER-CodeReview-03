let teamWrapper = document.getElementById('team-wrapper');

// first we will loop through the JSON file so that can derive all the data

for (let i in teamMember) {
    teamWrapper.insertAdjacentHTML("beforeend", `
		<div class="member">
			<h3>${teamMember[i].name}</h3>
				<p class="titel">${teamMember[i].jobtitel}</p>
				<img src="${teamMember[i].img}"></img>
				<p class="email">${teamMember[i].email}</p>
		</div>`);
}

// important here is the "(e)" this means that we are adding here an Eventlistener

document.querySelectorAll('.member').forEach((e) => {
    e.addEventListener("click", function() {
        e.querySelector('.titel').style.display = 'block';
        e.querySelector('.email').style.display = 'block';
    })
});