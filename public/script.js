const createElement = (config) => {
	const { classList = [], type = 'div' } = config;

	const container = document.createElement(type);
	classList
		? classList.forEach((className) => {
				container.classList.add(className);
		  })
		: '';

	return container;
};

const parent = createElement({ classList: ['parent'] });

let boxCount = 100;

for (let i = 0; i < boxCount; i++) {
	const child = createElement({ classList: ['child'] });
	parent.append(child);
}

const highlight = (e) => {
	e.preventDefault();
	const fromElement = e.fromElement;
	if (fromElement && fromElement.classList.contains('child')) {
		fromElement.classList.add('event-fired');
		setTimeout(() => {
			fromElement.classList.remove('event-fired');
		}, 100);
	}
};

parent.addEventListener('mouseover', highlight, false);
document.body.append(parent);
