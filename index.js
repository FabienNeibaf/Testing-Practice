export const capitalize = string =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

export const reverseString = string => {
  let res = '';
  const l = string.length;
  for (let i = l - 1; i >= 0; i -= 1) {
    res += string[i];
  }
  return res;
};

export const calculator = (() => {
  const add = (...numbers) => {
    return numbers.reduce((acc, cur) => acc + cur);
  };

  const substruct = (...numbers) => {
    return numbers.reduce((acc, cur) => acc - cur, numbers.shift());
  };

  const divide = (...numbers) => {
    return numbers.reduce((acc, cur) => acc / cur, numbers.shift());
  };

  const multiply = (...numbers) => {
    return numbers.reduce((acc, cur) => acc * cur, numbers.shift());
  };

  return { add, substruct, divide, multiply };
})();

export const caesar = key => {
  if (key < 1 && key > 26) throw new RangeError('Key must be in (1..26)');

  const toCodes = string => {
    const res = [];
    for (let i = 0; i < string.length; i += 1) {
      res.push(string.charCodeAt(i));
    }
    return res;
  };

  const toString = codes => {
    let res = '';
    codes.forEach(code => {
      res += String.fromCharCode(code);
    });
    return res;
  };

  const encrypt = string => {
    const codes = toCodes(string).map(code => {
      if (code > 64 && code < 91) return ((code + key - 65) % 26) + 65;
      if (code > 96 && code < 123) return ((code + key - 97) % 26) + 97;
      return code;
    });
    return toString(codes);
  };

  const decrypt = string => {
    const codes = toCodes(string).map(code => {
      if (code > 64 && code < 91) return ((26 + (code - 65) - key) % 26) + 65;
      if (code > 96 && code < 123) return ((26 + (code - 97) - key) % 26) + 97;
      return code;
    });
    return toString(codes);
  };

  return { encrypt, decrypt };
};
export const analyze = array => {
  const { length } = array;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const average = array.reduce((acc, cur) => acc + cur) / length;

  return { average, min, max, length };
};
