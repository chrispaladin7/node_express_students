const students = [
    {id:'1', studentName: 'Feed Dogs', graduated: true },
    {id:'2', studentName: 'Learn Express', graduated: false },
    {id:'3', studentName: 'Buy Milk', graduated: false },
    {id:'4', studentName: 'Buy Milk', graduated: true },
    {id:'5', studentName: 'Buy Milk', graduated: false },
    {id:'6', studentName: 'Buy Milk', graduated: true },
    {id:'7', studentName: 'Buy Milk', graduated: true },
    {id:'8', studentName: 'Buy Milk', graduated: false },
    {id:'9', studentName: 'Buy Milk', graduated: false }
];

module.exports = {
    getAll: function () {
        return students;
    }
}