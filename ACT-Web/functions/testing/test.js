const db = {
    "c_user1": {
        "name": "Cfirst1 Clast1",
        "contact": "081 343 3473",
        "cash": "",
        "portfolio": []
    },
    "c_user2": {
        "name": "Cfirst2 Clast2",
        "contact": "082 343 3473",
        "cash": "",
        "portfolio": []
    },
    "c_user3": {
        "name": "Cfirst3 Clast3",
        "contact": "083 343 3473",
        "cash": "",
        "portfolio": []
    }
}
console.log(Object.keys(db).includes('c_user1'))