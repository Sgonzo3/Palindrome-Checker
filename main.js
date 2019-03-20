const button = document.querySelector('#check');
const output = document.querySelector('#output');

function palindrome(str) {
  // Good luck!
  if(str === '') return false;

  const regex = new RegExp(/[_\W]/g);
  let answer = [];
  let test = str.replace(regex, '').toUpperCase();
  let newStr = test.split('').map(letter => {
    answer.unshift(letter);
  });
  console.log(test, answer.join(''));
  if (answer.join('') === test){
    // alert(`Yes "${str}" is a palindrome!`);
    output.innerText = `Yes "${str}" is a palindrome!`;
    // return true;
    } else {
      // alert(`No "${str}" is not a palindrome!`);
      output.innerText = `No "${str}" is not a palindrome!`;
      // return false;
    }
}


button.addEventListener('click', function(e){
  e.preventDefault();
  let input = document.querySelector('#user-input').value;
  palindrome(input);
});
