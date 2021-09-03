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
