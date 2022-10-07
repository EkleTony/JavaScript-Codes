let laptop ={
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    getConfig: function (name) {
        this.name = name;
        let storage = 500;
        console.log(storage, this.ram);
}

    
}

laptop.getConfig("Tony")