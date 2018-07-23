export const fetchAllLocks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 0,
          name: 'Замок 1',
          type: 'Тип 1',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 1200,
          diameter: 20,
          wallThickness: 200,
          lockLength: 50
        },
        {
          id: 1,
          name: 'Замок 2',
          type: 'Тип 1',
          weight: 220,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 1300,
          diameter: 30,
          wallThickness: 220,
          lockLength: 70
        },
        {
          id: 2,
          name: 'Замок 3',
          type: 'Тип 2',
          weight: 230,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 5000,
          diameter: 40,
          wallThickness: 230,
          lockLength: 90
        },
        {
          id: 3,
          name: 'Замок 4',
          type: 'Тип 3',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 4000,
          diameter: 50,
          wallThickness: 250,
          lockLength: 120
        },
        {
          id: 4,
          name: 'Замок 5',
          type: 'Тип 1',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 3000,
          diameter: 60,
          wallThickness: 270,
          lockLength: 150
        },
        {
          id: 5,
          name: 'Замок 6',
          type: 'Тип 2',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 1000,
          diameter: 20,
          wallThickness: 270,
          lockLength: 50
        },
        {
          id: 6,
          name: 'Замок 7',
          type: 'Тип 3',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 3300,
          diameter: 30,
          wallThickness: 200,
          lockLength: 70
        },
        {
          id: 7,
          name: 'Замок 8',
          type: 'Тип 1',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 4400,
          diameter: 40,
          wallThickness: 220,
          lockLength: 90
        },
        {
          id: 8,
          name: 'Замок 9',
          type: 'Тип 2',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 3600,
          diameter: 50,
          wallThickness: 230,
          lockLength: 120
        },
        {
          id: 9,
          name: 'Замок 10',
          type: 'Тип 2',
          weight: 200,
          widthOnePanel: 2,
          breakingForce: 4,
          resistanceMoment: 2500,
          diameter: 60,
          wallThickness: 250,
          lockLength: 150
        }
      ]);
    }, 500);
  });
};
