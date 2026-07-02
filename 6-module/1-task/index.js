class UserTable {
    constructor(rows) {
        this.rows = rows;
        this.elem = this.render();
    }

    render() {
        const table = document.createElement('table');
        
        // Шапка таблицы
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Зарплата</th>
                <th>Город</th>
                <th></th>
            </tr>
        `;
        table.appendChild(thead);

        // Тело таблицы
        const tbody = document.createElement('tbody');

        this.rows.forEach(rowData => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${rowData.name}</td>
                <td>${rowData.age}</td>
                <td>${rowData.salary}</td>
                <td>${rowData.city}</td>
                <td><button class="remove">X</button></td>
            `;

            // Удаление строки по клику
            const removeBtn = tr.querySelector('.remove');
            removeBtn.addEventListener('click', () => {
                tr.remove();
            });

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);

        return table;
    }
}

export default UserTable;