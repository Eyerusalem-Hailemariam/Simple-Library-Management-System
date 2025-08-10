const sortData = (data, sortBy, order = 'asc') => {
    return data.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return order === 'asc' ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return order === 'asc' ? 1 : -1;
        return 0;
    })
}

const filterData = (data, field, value) => {
    return data.filter(item => String(item[field]).toLowerCase().includes(value.toLowerCase()));
}