const buildings = {
    metalMiner: {
        type: 'metalMiner',
        baseCosts: {
            metal: 150,
            polimer: 100,
            gas: 50
        },
        upgrades: {
            metal: 10
        },
        baseConstructTime: 10,
        imageSrc: './img/planets/buildings/metal-miner.png',
        cssStyle: `transform: translate(-50%, 50%);position: absolute;top: -130%;left: 50%;`,
        buildingInfo: {
            description: 'Metal factory allow to mine metals.',
            title: 'Metal Miner'
        },
    },
    polimerMiner: {
        type: 'polimerMiner',
        baseCosts: {
            metal: 150,
            polimer: 100,
            gas: 50
        },
        upgrades: {
            polimer: 10
        },
        baseConstructTime: 10,
        imageSrc: './img/planets/buildings/polimer-miner.png',
        cssStyle: `transform: translate(-50%, 50%);position: absolute;top: -265%;left: 50%;`,
        buildingInfo: {
            description: 'Polimer factory allow to mine polimers.',
            title: 'Polimer Miner'
        },
    },
    gasMiner: {
        type: 'gasMiner',
        baseCosts: {
            metal: 150,
            polimer: 100,
            gas: 50
        },
        upgrades: {
            gas: 10
        },
        baseConstructTime: 10,
        imageSrc: './img/planets/buildings/gas-miner.png',
        cssStyle: `transform: translate(-50%, 50%);position: absolute;top: -175%;left: 50%;`,
        buildingInfo: {
            description: 'Gas factory allow to mine gas.',
            title: 'Gas Miner'
        },
    },

    laboratory: {
        type: 'groundBuilding',
        baseCosts: {
            metal: 150,
            polimer: 150,
            gas: 150
        },
        upgrades: {
            sp: 1
        },
        baseConstructTime: 25,
        imageSrc: './img/planets/buildings/laboratory.png',
        cssStyle: `transform: translate(-50%, 50%);position: absolute;top: -260%;left: 50%;`,
        buildingInfo: {
            description: 'Laboratory allow to produce science points.',
            title: 'Laboratory'
        },
    },
        storage: {
            type: 'groundBuilding',
            baseCosts: {
                metal: 120,
                polimer: 120,
                gas: 120
            },
            upgrades: {
                
                metal: 2000,
                polimer: 2000,
                gas:2000,
                
            },
            baseConstructTime: 20,
            imageSrc: './img/planets/buildings/storage.png',
            cssStyle: `transform: translate(-50%, 50%);position: absolute;top: -170%;left: 50%;`,
            buildingInfo: {
                description: 'Storage.',
                title: 'Storage'
            },
        },
}



export {
    buildings
}