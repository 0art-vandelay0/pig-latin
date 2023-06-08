## **Test Cases**

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move all of the first consecutive consonants to the end and add 'ay'."
const result = pigLatin('code');
expect(result).toEqual('odecay');

Test: "It will move 'qu' to the end when it comes after a consonant."
const result = pigLatin('quick');
expect(result).toEqual('ickquay');
