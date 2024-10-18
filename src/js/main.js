const BASE_URL = "__BASE_URL__"

const form = document.querySelector("#salary-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const update = {
        salary: document.querySelector('#salary-input').value,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };

    sendData(options)

    async function sendData(options) {
        try {
            const response = await fetch(BASE_URL + '/api/v1/salary', options);

            if (response.ok) {
                const data = await response.json();

                displayData(data);
            } else {
                alert("Failed to query calculation api!")
            }

        } catch (e) {
            console.error(e);
            alert(e);
            alert("An error has occurred. Please try again!");
        }
    }

    function displayData(data) {
        const dataList = document.getElementById('tax-list');
        dataList.innerHTML = '';
    
        for (const [key, value] of Object.entries(data)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: R$ ${value}`;
            dataList.appendChild(listItem);
        }
        
    }
});