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
	const childElement = e.path[0];
	
	if (childElement && childElement.classList.contains('child')) {
		childElement.classList.add('event-fired');
		setTimeout(() => {
			childElement.classList.remove('event-fired');
		}, 100);
	}
};

parent.addEventListener('mousemove', highlight, true);
document.body.append(parent);
