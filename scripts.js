var myInput = document.querySelector('#myInput'),
	myDiv =  document.querySelector('#myDiv'),
	apiUrl = 'https://api.github.com/search/repositories?q=',
	inputs = Rx.Observable.fromEvent(myInput, 'keyup'),
	projectList = new Rx.BehaviorSubject([]);

inputs
	.debounce(() => Rx.Observable.interval(500))
	.map(event => event.target.value)
	.filter(text => text.length > 2)
	.subscribe(searchProjects)


function searchProjects(projectName) {
	Rx.Observable.from(fetch(`${apiUrl}${projectName}`))
		.subscribe(response => {
			response
				.json()
				.then(result => result.items)
				.then(itemsList => { projectList.next(itemsList) })
		})
}

projectList.subscribe(projects => {
	var template = '';
	projects.forEach(project => {
		template += `
			<li class="project-list-item">
				<img class="project-owner-avatar" src="${project.owner.avatar_url}">
				<div class="project-info">
					<b>${project.owner.login}</b>
					/ ${project.name}
				</div>
				<div class="project-info">
					Forks: ${project.forks}
				</div>
			</li>
		`;
	})
	myDiv.innerHTML = `<ul class="project-list">${template}</ul>`
})
