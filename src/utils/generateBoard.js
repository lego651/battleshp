import { shipType } from './shipType'

// up, right, down, left
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
/*
*
*/
export const getBoard= () => {
  let board = [10];
  // generate 2d board with intial 0s representing empty cell
  for(let i = 0; i < 10; i++) {
    board[i] = [10];
    for(let j = 0; j < 10; j++) {
      board[i][j] = 0;
    }
  }
  // iterate shipType and fill ships on board randomly
  for(let i = 0; i < shipType.length; i++) {
    placeShip(board, shipType[i]);
  }
  return board;
};

const placeShip = (board, shipObj) => {
  let startingCell = getRandomCell();
  let direction = getRamdomDirection();
  while(!isCellEmpty(board, startingCell) || !isDirectionValid(board, direction, shipObj, startingCell)) {
    startingCell = getRandomCell();
    direction = getRamdomDirection();
  }
  // At least, we find a valid start point, and valid direction
  fillShipAndNeighbours(board, startingCell[0], startingCell[1], direction, shipObj.size, shipObj.id);
}

const isDirectionValid = (board, direction, shipObj, startingCell) => {
  let isValid = true;
  let x = startingCell[0];
  let y = startingCell[1];
  // const { id, size } = shipObj
  let size = shipObj.size;
  let id = shipObj.id;
  switch(direction) {
    case 0: // check UP direction
      while(size > 0 && canFillCell(board, x, y)) {
        x--;
        size--;
      }
      if(size > 0) {
        isValid = false;
      }
      break;
    case 1: // check RIGHT direction
      while(size > 0 && canFillCell(board, x, y)) {
        y++;
        size--;
      }
      if(size > 0) {
        isValid = false;
      }
      break;
    case 2: // check BOTTOM direction
      while(size > 0 && canFillCell(board, x, y)) {
        x++;
        size--;
      }
      if(size > 0) {
        isValid = false;
      }
      break;
    case 3: // check LEFT direction
      while(size > 0 && canFillCell(board, x, y)) {
        y--;
        size--;
      }
      if(size > 0) {
        isValid = false;
      }
      break;
    default:
      break;
  }
  return isValid;
}

const canFillCell = (board, x, y) => {
  if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] > 0) {
    return false;
  }
  return true;
}

const fillShipAndNeighbours = (board, x, y, direction, size, id) => {
  switch(direction) {
    case 0: // fill along UP direction
      while(size > 0) {
        board[x][y] = id * 100;
        for(let k = 0; k < 4; k++) {
          let nextX = x + dx[k];
          let nextY = y + dy[k];
          if(nextX < 0 || nextX >= board.length || nextY < 0 || nextY >= board[0].length || board[nextX][nextY] > id * 10) {
            continue;
          }
          board[nextX][nextY] = id * 10
        }
        x--;
        size--;
      }
      break;
    case 1:
      while(size > 0) {
        board[x][y] = id * 100;
        for(let k = 0; k < 4; k++) {
          let nextX = x + dx[k];
          let nextY = y + dy[k];
          if(nextX < 0 || nextX >= board.length || nextY < 0 || nextY >= board[0].length || board[nextX][nextY] > id * 10) {
            continue;
          }
          board[nextX][nextY] = id * 10
        }
        y++;
        size--;
      }
      break;
    case 2:
      while(size > 0) {
        board[x][y] = id * 100;
        for(let k = 0; k < 4; k++) {
          let nextX = x + dx[k];
          let nextY = y + dy[k];
          if(nextX < 0 || nextX >= board.length || nextY < 0 || nextY >= board[0].length || board[nextX][nextY] > id * 10) {
            continue;
          }
          board[nextX][nextY] = id * 10
        }
        x++;
        size--;
      }
      break;
    case 3:
      while(size > 0) {
        board[x][y] = id * 100;
        for(let k = 0; k < 4; k++) {
          let nextX = x + dx[k];
          let nextY = y + dy[k];
          if(nextX < 0 || nextX >= board.length || nextY < 0 || nextY >= board[0].length || board[nextX][nextY] > id * 10) {
            continue;
          }
          board[nextX][nextY] = id * 10
        }
        y--;
        size--;
      }
      break;
  }
}

const isCellEmpty = (board, cell) => {
  let x = cell[0];
  let y = cell[1];
  return board[x][y] === 0;
}

const getRandomNumber = (N) => {
  return Math.floor(Math.random() * N);
}
const getRandomCell = () => {
  const max = 9;
  return [getRandomNumber(max), getRandomNumber(max)];
}
const getRamdomDirection = () => {
  const directions = 4; // UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3
  return getRandomNumber(directions);
}
