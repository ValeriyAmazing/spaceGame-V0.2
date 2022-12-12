const planets = {
    earth: {
        type: 'earth',
        name: 'Earth',
        imgSrc: '',
        orbit: '',
        buildingPlaces: {
            gasMiner: 3,
            polimerMiner: 3,
            metalMiner: 3,
            spaceBuilding: 3,
            groundBuilding: 12,
        },
        cells: [],
        profits: {
            metal: 0,
            polimer: 0,
            gas: 0,
        },
        storage: {
            metal: 0,
            polimer: 0,
            gas: 0,
        }
    },
    mars: {
        type: 'mars',
        name: 'Mars',
        imgSrc: '',
        orbit: '',
        buildingPlaces: {
            gasMiner: 2,
            polimerMiner: 2,
            metalMiner: 2,
            spaceBuilding: 3,
            groundBuilding: 8,
        },
        cells: [],
        profits: {
            metal: 0,
            polimer: 0,
            gas: 0,
        },
        storage: {
            metal: 0,
            polimer: 0,
            gas: 0,
        }
    },
    metal: {
        type: 'metal',
        name: 'Metal Planet',
        imgSrc: '',
        orbit: '',
        buildingPlaces: {
            gasMiner: 3,
            polimerMiner: 3,
            metalMiner: 3,
            spaceBuilding: 3,
            groundBuilding: 6,
        },
        cells: [],
        profits: {
            metal: 0,
            polimer: 0,
            gas: 0,
        },
        storage: {
            metal: 0,
            polimer: 0,
            gas: 0,
        }
    },
    poly: {
        type: 'poly',
        name: 'Polimer Planet',
        imgSrc: '',
        orbit: '',
        buildingPlaces: {
            gasMiner: 1,
            polimerMiner: 5,
            metalMiner: 1,
            spaceBuilding: 3,
            groundBuilding: 6,
        },
        cells: [],
        profits: {
            metal: 0,
            polimer: 0,
            gas: 0,
        },
        storage: {
            metal: 0,
            polimer: 0,
            gas: 0,
        }
    },
    gas: {
        type: 'gas',
        name: 'Gas Giant',
        imgSrc: '',
        orbit: '',
        buildingPlaces: {
            gasMiner: 5,
            polimerMiner: 1,
            metalMiner: 1,
            spaceBuilding: 3,
            groundBuilding: 6,
        },
        cells: [],
        profits: {
            metal: 0,
            polimer: 0,
            gas: 0,
        },
        storage: {
            metal: 0,
            polimer: 0,
            gas: 0,
        }
    },
}
const planetList = []
// planetCell = {id,type,building}
export {
    planets,
    planetList
}