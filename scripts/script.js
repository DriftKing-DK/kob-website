document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.element');
    const container = document.querySelector('.content');
    const sortByCustomOrder = () => {
        const orderedIds = ['my_2', 'my_4', 'my_1', 'my_3', 'my_8'];

        orderedIds.forEach((id) => {
            const element = document.getElementById(id);
            container.appendChild(element);
        });
    };

    const sortElementsByNotation = (order) => {
        const sortedElements = Array.from(elements);

        sortedElements.sort((a, b) => {
            const notationA = parseFloat(a.querySelector('h3').innerText.split(':')[1]);
            const notationB = parseFloat(b.querySelector('h3').innerText.split(':')[1]);

            if (order === 'ascending') {
                return notationA - notationB;
            } else if (order === 'descending') {
                return notationB - notationA;
            }
        });

        container.innerHTML = '';

        sortedElements.forEach((element) => {
            container.appendChild(element);
        });
    };

    document.querySelectorAll('input[type=radio][name=sort]').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const sortOrder = event.target.value;

            if (sortOrder === 'ascending') {
                sortElementsByNotation('ascending');
            } else if (sortOrder === 'descending') {
                sortElementsByNotation('descending');
            }
            else {
                sortByCustomOrder();
            }
        });
    });

});