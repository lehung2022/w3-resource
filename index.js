function removeWithHelpOfCharAt(str) {
    // the OP's code with the help of `charAt`.
    if (str.charAt(0) === 'p' && str.charAt(str.length - 1) === 'p') {
  
      return str.substring(1, str.length - 1);
    } else {
      return str;
    }
  }
  console.log(
    "removeWithHelpOfCharAt('pparallelepipedp') ...",
    removeWithHelpOfCharAt('pparallelepipedp')
  );
  console.log(
    "removeWithHelpOfCharAt('Pparallelepipedp') ...",
    removeWithHelpOfCharAt('Pparallelepipedp')
  );
  
  function removeWithHelpOfAt(str) {
    // the OP's code with the help of `at` ...
    // ... and a slightly changed way of returning the result.
    if (str.at(0) === 'p' && str.at(-1) === 'p') {
  
      str = str.substring(1, str.length - 1);
    }
    return str;
  }
  console.log(
    "removeWithHelpOfAt('pparallelepipedp') ...",
    removeWithHelpOfAt('pparallelepipedp')
  );
  console.log(
    "removeWithHelpOfAt('Pparallelepipedp') ...",
    removeWithHelpOfAt('Pparallelepipedp')
  );