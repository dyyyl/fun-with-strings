// define my test strings, these should do nicely.
const string0 = "Let's have some fun.";
const string1 = "C is for cookie, that's good enough for me";
const string2 = 'By the power of Grayskull!';
// and another
const string3 = 'aaaabbbbaaacccbbb';

// take in string, work some regex magic to "leetify" it
const leetify = (string) => {
  const data = string.replace(
    /[abeiostADEIOST]/g,
    m => ({
      a: 4,
      e: 3,
      i: 1,
      o: 0,
      s: 5,
      t: 7,
      b: 5,
      A: 4,
      E: 3,
      I: 1,
      O: 0,
      S: 5,
      T: 7,
      D: 5,
    }[m]),
  );
  console.log(data);
};

// proof of work
leetify(string0);
leetify(string1);
leetify(string2);

// The RegEx (.)\1* will match a single non-line-break character and check
// if that is followed by the same character any number of times. m here is
// the complete match and $1 is the first chaptured group value i.e. the character.
const countRepeating = string => string.replace(/(.)\1*/g, (m, $1) => $1 + m.length);

// proof of work
const response = countRepeating(string3);
console.log(response);

// btw if you want to run this just do node string.js to see the results from proof of work.
