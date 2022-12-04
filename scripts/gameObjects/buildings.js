const buildings = {
    metalMiner: {
            type: 'metalMiner',
            name: 'Metal  Factory',
            lvls: [{
                    lvl: 0,
                    cost: {
                        metal: 400,
                        polimer: 300,
                        gas: 50
                    },
                    incomes: {
                        metal: 10
                    },
                    constructTime: 10
                },
                {
                    lvl: 1,
                    cost: {
                        metal: 700,
                        polimer: 500,
                        gas: 100
                    },
                    incomes: {
                        metal: 20
                    },
                    constructTime: 30
                },
                {
                    lvl: 2,
                    cost: {
                        metal: 1200,
                        polimer: 800,
                        gas: 250
                    },
                    incomes: {
                        metal: 30
                    },
                    constructTime: 90
                },
                {
                    lvl: 3,
                    cost: {
                        metal: 5000,
                        polimer: 3000,
                        gas: 500
                    },
                    incomes: {
                        metal: 50
                    },
                    constructTime: 300
                },
                {
                    lvl: 4,
                    cost: {
                        metal: 14000,
                        polimer: 8000,
                        gas: 750
                    },
                    incomes: {
                        metal: 100
                    },
                    constructTime: 900
                },
                {
                    lvl: 5,
                    cost: {
                        metal: 29000,
                        polimer: 20000,
                        gas: 1500
                    },
                    incomes: {
                        metal: 150
                    },
                    constructTime: 1500
                },
            ],
            imageSrc: './img/planets/buildings/metal-miner.png',
            upgradeInfo: 'Metal factory allow to mine metal.',
            buildingStatus: null,
            buildingEndTime: null,
        },
    polimerMiner: {
            type: 'polimerMiner',
            name: 'Polimer  Factory',
            lvls: [{
                    lvl: 0,
                    cost: {
                        metal: 400,
                        polimer: 300,
                        gas: 50
                    },
                    incomes: {
                        polimer: 10
                    },
                    constructTime: 10
                },
                {
                    lvl: 1,
                    cost: {
                        metal: 700,
                        polimer: 500,
                        gas: 100
                    },
                    incomes: {
                        polimer: 20
                    },
                    constructTime: 30
                },
                {
                    lvl: 2,
                    cost: {
                        metal: 1200,
                        polimer: 800,
                        gas: 250
                    },
                    incomes: {
                        polimer: 30
                    },
                    constructTime: 90
                },
                {
                    lvl: 3,
                    cost: {
                        metal: 5000,
                        polimer: 3000,
                        gas: 500
                    },
                    incomes: {
                        polimer: 50
                    },
                    constructTime: 300
                },
                {
                    lvl: 4,
                    cost: {
                        metal: 14000,
                        polimer: 8000,
                        gas: 750
                    },
                    incomes: {
                        polimer: 100
                    },
                    constructTime: 900
                },
                {
                    lvl: 5,
                    cost: {
                        metal: 29000,
                        polimer: 20000,
                        gas: 1500
                    },
                    incomes: {
                        polimer: 150
                    },
                    constructTime: 1500
                },
            ],
            imageSrc: './img/planets/buildings/polimer-miner.png',
            upgradeInfo: 'Polimer factory allow to mine polimer.',
            buildingStatus: null,
            buildingEndTime: null,
        },
    gasMiner: {
            type: 'gasMiner',
            name: 'Gas  Factory',
            lvls: [{
                    lvl: 0,
                    cost: {
                        metal: 400,
                        polimer: 300,
                        gas: 50
                    },
                    incomes: {
                        gas: 10
                    },
                    constructTime: 10
                },
                {
                    lvl: 1,
                    cost: {
                        metal: 700,
                        polimer: 500,
                        gas: 100
                    },
                    incomes: {
                        gas: 20
                    },
                    constructTime: 30
                },
                {
                    lvl: 2,
                    cost: {
                        metal: 1200,
                        polimer: 800,
                        gas: 250
                    },
                    incomes: {
                        gas: 30
                    },
                    constructTime: 90
                },
                {
                    lvl: 3,
                    cost: {
                        metal: 5000,
                        polimer: 3000,
                        gas: 500
                    },
                    incomes: {
                        gas: 50
                    },
                    constructTime: 300
                },
                {
                    lvl: 4,
                    cost: {
                        metal: 14000,
                        polimer: 8000,
                        gas: 750
                    },
                    incomes: {
                        gas: 100
                    },
                    constructTime: 900
                },
                {
                    lvl: 5,
                    cost: {
                        metal: 29000,
                        polimer: 20000,
                        gas: 1500
                    },
                    incomes: {
                        gas: 150
                    },
                    constructTime: 1500
                },
            ],
            imageSrc: './img/planets/buildings/gas-miner.png',
            upgradeInfo: 'Gas factory allow to mine gas.',
            buildingStatus: null,
            buildingEndTime: null,
        },
    }





export { buildings }