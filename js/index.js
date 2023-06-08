function pigLatin(text) {
    const textArray = text.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    const elementsWVowels = [];

    textArray.forEach(function(element) {
        const char1 = element[0].toLowerCase();
        if (vowels.includes(char1)) {
            elementsWVowels.push(element + "way")
        } else {
            const char2 = element[1].toLowerCase();
            if (vowels.includes(char2)) {
                const element2 = element.slice(1);
                elementsWVowels.push(element2 + char1 + "ay");
            } else {
                const element3 = element.slice(2);
                elementsWVowels.push(element3 + char1 + char2 + "ay");
            }
        }
    });
    return elementsWVowels;
};

const text = "hello world this is a test";
console.log(pigLatin(text));


// Working code
// function pigLatin(text) {
//     const textArray = text.split(" ");
//     const vowels = ["a", "e", "i", "o", "u"];
//     const elementsWVowels = [];

//     textArray.forEach(function(element) {
//         const char1 = element[0].toLowerCase();
//         if (vowels.includes(char1)) {
//             elementsWVowels.push(element + "way")
//         }
//     })
//     return elementsWVowels;
// }