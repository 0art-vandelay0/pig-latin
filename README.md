# PigLatin

#### By Casey Hill

#### _{Brief description of application}_

## Technologies Used

- JavaScript
- HTML
- CSS

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

- _This is a great place_
- _to list setup instructions_
- _in a simple_
- _easy-to-understand_
- _format_

## Known Bugs

- _Any known issues_
- _should go here_

## **Test Cases**

Describe: pigLatin()

Test: "It will find each element starting in a vowel."
Code:
const text = "this is a sentence"
pigLatin(text)
Expected Output: ["is", "a"]

Test: "It will add 'way' to the end of words that begin with a vowel."
Code:
const text = "This is a sentence"
pigLatin(text);
Expected Output: "This is away sentence"

Test: "It will move all of the first consecutive consonants to the end and add 'ay'."
Code:
const text = "code";
pigLatin(text)
Expected Output: "odecay";

Test: "It will move 'qu' to the end when it comes after a consonant."
Code:
const text = "quick";
Expected Output: "ickquay";

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns. Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_
