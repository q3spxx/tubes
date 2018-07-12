(function () {
  const data = {
    lockTypes: [
      {
        name: 'lock1',
        connections: [
          {
            name: 'name1',
            params: {
              d: "10",
              r: 'r1',
              t: 't1',
              s: 's1'
            }
          },
          {
            name: 'name2',
            params: {
              d: "20",
              r: 'r2',
              t: 't1',
              s: 's1'
            }
          },
          {
            name: 'name3',
            params: {
              d: "30",
              r: 'r2',
              t: 't2',
              s: 's1'
            }
          },
          {
            name: 'name4',
            params: {
              d: "40",
              r: 'r2',
              t: 't2',
              s: 's1'
            }
          }
        ]
      }
    ]
  };
  const tables = [{
    name: 'lock1',
    params: {
      d: ["10", "20", "30", "40"],
      r: ['r1', 'r2'],
      t: ['t1', 't2'],
      s: ['s1']
    }
  }];
  const input = {
    table: 'lock1',
    d: "10",
    r: 'r1',
    t: 't1',
    s: 's1'
  };
  const createOption = (value) => {
    const option = document.createElement('option');
    option.innerText = value;
    option.value = value;
    return option;
  };
  const addListener = (id) => {
    document.getElementById(id).addEventListener('change', (e) => {
      input[e.target.name] = e.target.value;
    });
  };
  const calculate = () => {
    const lock = data.lockTypes.find((lockType) => {
      if(lockType.name === input.table) return true;
    });
    const result = lock.connections.filter((connection) => {
      if(
        connection.params.d === input.d &&
        connection.params.r === input.r &&
        connection.params.t === input.t &&
        connection.params.s === input.s
      ) return true;
    });
    return result;
  };
  const outputElem = document.getElementById('output').firstElementChild;
  const messElem = document.getElementById('mess');
  const showResult = (result) => {
    messElem.innerText = '';
    while(outputElem.firstChild) {
      outputElem.removeChild(outputElem.firstChild);
    };
    if(result.length === 0) {
      showNothing();
      return;
    };
    result.forEach((connection) => {
      const item = document.createElement('li');
      item.innerText = connection.name;
      outputElem.appendChild(item);
    });
  };
  const showNothing = () => {
    messElem.innerText = 'Ничего не найдено!';
  };
  const typeElem = document.getElementById('type');
  addListener('type');
  addListener('d');
  addListener('r');
  addListener('t');
  addListener('s');

  document.getElementById('calc').addEventListener('click', () => {
    const result = calculate();
    showResult(result);
  });

  for (let table of tables) {
    const lockOption = createOption(table.name);
    typeElem.appendChild(lockOption);
    for (let param in table.params) {
      const elem = document.getElementById(param);
      let paramValues = table.params[param];
      for (let paramValue of paramValues) {
        let option = createOption(paramValue);
        elem.appendChild(option);
      };
    };
  };
})();
