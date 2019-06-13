export const shipType = [
  {
    id: 1,
    count: 1,
    size: 2,
    hits: 0
  },
  {
    id: 2,
    count: 1,
    size: 2,
    hits: 0
  },
]

export const getTotalShipCells = () => {
  let total = 0;
  shipType.forEach((ship) => {
    total += ship.size;
  })
  return total;
}

export const getEachShipSize = () => {
  let arr = [];
  shipType.forEach((ship) => {
    arr = [...arr, ship.size]
  })
  return arr;
}

export const getEachInitialHits = () => {
  return new Array(shipType.length).fill(0);
}
