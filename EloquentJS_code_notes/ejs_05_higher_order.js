//Array flattening
let arrays = [[1,2,3], [4,5], [6]];
arrays.reduce((a,b) => a.concat(b));

//use test value before running body function and then updating
function loop(value, test, body, update) {
  for (let value = start; test(value); value = update(value)){
    body(value);
  }
}

//everything >> test every array item
function every(array, test) {
  for(let i = 0; i < array.length; i++) {
    if (!test(array[i])){
      return false;
    }
  }
  return true;
}
//everything >> use some (checks if applicable to anything)
function every(array, test) {
  return array.some(element => test(element) !== true);
}

//dominant writing direction
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let direction = groupName(item);
    let known = counts.findIndex(c => c.direction == direction);
    if (known == -1) {
      counts.push({direction, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");
  //be mindful of 0, 1 cases - https://gist.github.com/jonurry/497f1d471286743450e79d7df2fd33d1
  switch (scripts.length) {
    case 0:
      return 'no dominant direction';
    case 1:
      return scripts[0].name;
    default:
  }

  return scripts.reduce((a, b) => characterCount(a) < characterCount(b) ? b: a);
}
