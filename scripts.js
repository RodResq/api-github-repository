/**
var observable = Rx.Observable.create(observer => {
	var i = 0;
	setInterval(() => {
		observer.next(i++)
	}, 1000)

})

var subscription = observable.subscribe(
	value => {console.log(`My value is ${value}`)},
	err =>  console.log('error'),
	() => console.log('Completed')
)
*/

/**
var subject = new Rx.Subject();
var subscription = subject.subscribe(
	value => console.log(`My value is ${value}`),
	err => console.log(`Error Message: ${err}`),
	() => console.log('Completed!')
)

subject.next(55);
subject.next(34);
subject.complete();
*/

/**
var observalble = Rx.Observable.create(observer => {
	var i = 0;
	var interval = setInterval(() => {
		i++;
		observer.next(parseInt(Math.random()*10))
		if(i>5){
			clearInterval(interval);
			observer.complete();
		}
	}, 1000)
})

var subject = new Rx.Subject();
var subSource = observalble.subscribe(subject);

var subscription = subject.subscribe(
	value => console.log(`1 - My Value is ${value}`),
	err => console.log(`1 - Error Message: ${err}`),
	() => console.log('1 - Completed!')
)

var subscription = subject.subscribe(
	value => console.log(`2 - My Value is ${value}`),
	err => console.log(`2 - Error Message: ${err}`),
	() => console.log('2 - Completed!')
)
*/

/**
var source = Rx.Observable.range(1, 10);

var subscription = source.subscribe(
	value => console.log(`My value is ${value}`)
)
*/
/**
var numbers = [1,8,15,37];
var source = Rx.Observable.from(numbers);

var subscription = source.subscribe(
	value => console.log(`My value is ${value}`)
)
*/

/**
var source = Rx.Observable.interval(1000);

var subscription = source.subscribe(
	value => console.log(`My Value is ${value}`)
)
*/

/**
var source = Rx.Observable.interval(1000);
var hot = source.publish();

var subscription = hot.subscribe(
	value => console.log(`My Value is ${value}`)
)
 */

/**
var myInput = document.querySelector('#myInput'),
	myDiv = document.querySelector('#myDiv'),
	inputs = Rx.Observable.fromEvent(myInput, 'keyup');

inputs.subscribe(event => {
	myDiv.innerHTML = event.target.value;
})
*/

/**
var myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(500);
	}, 2000);
})

myPromise.then(value => console.log(`My value is ${value}`));
*/

/**
var myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(500);
	}, 2000);
});

var source = Rx.Observable.fromPromise(myPromise);
var subscription = source.subscribe(
	value => console.log(`My value is ${value}`)
);
*/

/*Generators*/
/**
function* myCounter() {
	var i = 0;
	while (true) {
		yield i++;
	}
}

var counter = myCounter();
*/

/**
function* myGenerator() {
	yield 5;
	console.log("We're back!");
	yield 10;
}

var generator = myGenerator();
*/

/**
function* myGenerator() {
	yield* [1,2,3,4,5];
}

var generator = myGenerator();
*/

/**
function* myGenerator() {
	yield* [1,2,3,4,5,6,7,8,9,10];
}

Rx.Observable.from(myGenerator()).take(5).subscribe(value => console.log(value) );
*/

/**
var observable = Rx.Observable.create(observer => {
	observer.next(5);
	// observer.error('erro cod 131');
	observer.complete();
})

observable.subscribe(
	value => console.log(`My value is ${value}`),
	err => console.log(`Error message ${err}`),
	() => console.log('Complete')
);
*/

/*count*/
/**
var source = Rx.Observable.range(0,10).count()
var subscription = source.subscribe(
	value => console.log(value)
)
*/
/**
var source = Rx.Observable.range(0, 10).count(x => x % 2 === 0)
var subscription = source.subscribe(
	value => console.log(value)
)
*/

/**
var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]).max();
var subscription = source.subscribe(
	value => console.log(value)
)
*/
/**
var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]).min();
var subscription = source.subscribe(
	value => console.log(value)
)
**/

/* reduce */
/**
var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10])
	.reduce((total, currente) => total + currente);
var subscription = source.subscribe(
	value => console.log(value)
)
**/

/* delay */
/**
var source = Rx.Observable.from([1,2,3,4,5])
	.delay(5000);
var subscription = source.subscribe(
	value => console.log(value)
)
**/

/* interval */
/**
var source = Rx.Observable.interval(1000);
var subscription = source.subscribe(
	value => console.log(value)
)
**/
/* timer */
/**
var source = Rx.Observable.timer(5000, 1000).take(5);
var subscription = source.subscribe(
	value => console.log(value)
)
**/
/* debounce */
/**
var myInput = document.querySelector('#myInput'),
	myDiv = document.querySelector('#myDiv'),
	inputs = Rx.Observable.fromEvent(myInput, 'keyup');

inputs
	.debounce(() => Rx.Observable.interval(1000))
	.subscribe(event => {
	myDiv.innerHTML = event.target.value;
})
**/

/* map */
/**
var items = [
	{a: 1},
	{a: 2},
	{a: 3},
	{a: 4},
];

var source = Rx.Observable.from(items);
var subscription = source.map( x => { return {propert:  x.a * 2} })
	.subscribe(
		x => console.log(x)
	)
**/

/*filter*/
/**
var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);
var subscription = source.filter(x => x % 2 === 0)
	.subscribe(
		x => console.log(x)
	)
**/

/* map e filter */
/**
var items = [
	{a: 1},
	{a: 2},
	{a: 3},
	{a: 4},
];

var source = Rx.Observable.from(items);
var subscription = source.map( x => { return {value : x.a * 2} })
	.filter(y => y.value > 4)
	.subscribe(
		value => console.log(value)
	);
**/

/* take */
/**
var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);
var subscription = source.take(3)
	.subscribe(
		x => console.log(x)
	)
**/

/* find */
/**
var people = [
	{name: 'Rick', age: 10},
	{name: 'Rose', age: 25},
	{name: 'Cassandra', age: 13},
	{name: 'Henry', age: 22},
];

var source = Rx.Observable.from(people);
var subscription = source
	.find(pessoa => pessoa.age > 10)
	.subscribe(
		value => console.log(value)
	)

**/

/**
var people = [
	{name: 'Rick', age: 10},
	{name: 'Rose', age: 25},
	{name: 'Cassandra', age: 13},
	{name: 'Henry', age: 22},
]
 **/
/* first */
/**
var source = Rx.Observable.from(people);
var subscription = source.first(pessoa => pessoa.name[0] === 'C')
	.subscribe(
		value => console.log(value)
	)
**/
/* last */
/**
var source = Rx.Observable.from(people);
var subscription = source.last(pessoa => pessoa.name[0] === 'R')
	.subscribe(
		value => console.log(value)
	)
**/
/* pluck */
/**
var source = Rx.Observable.from(people);
var subscription = source.pluck('name')
	.subscribe(
		value => console.log(value)
	)
**/

/* AsyncSubject */

/**
var subject = new Rx.AsyncSubject();
var subscription = subject.subscribe(
	value => console.log(`My value is ${value}`),
	err => console.log(`Error message: %{err}`),
	() => console.log('Completed')
)

var counter = 5,
	interval = setInterval(() => {
		subject.next(counter--);
		if(!counter) {
			clearInterval(interval);
			subject.complete()
		}
	}, 1000);
**/
/* BehaviorSubject */
/**
var subject = new Rx.BehaviorSubject(83);
var subscription = subject.subscribe(
	value => console.log(`My Value is ${value}`),
	err => console.log(`Error message: ${err}`),
	() => console.log(`Completed`)
)

var counter = 5,
	interval = setInterval(() => {
		subject.next(counter--);
		if(!counter) {
			clearInterval(interval);
			subject.complete()
		}
	}, 1000);
**/

/* ReplaySubject */

var subject = new Rx.ReplaySubject(2, 1000);
var subscription = subject.subscribe(
	value => console.log(`My Value is ${value}`),
	err => console.log(`Error message: ${err}`),
	() => console.log(`Completed`)
)

var counter = 5,
	interval = setInterval(() => {
		subject.next(counter--);
		if(!counter) {
			clearInterval(interval);
			subject.complete()
		}
	}, 1000);

