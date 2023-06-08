function pigLatin(text) {
    const textArray = text.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    const elementsWVowels = [];

    textArray.forEach(function(element) {
        const char1 = element[0].toLowerCase();
        if (vowels.includes(char1)) {
            elementsWVowels.push(element)
        }
    })
    return elementsWVowels;
}

console.log(pigLatin("hello world this is a test"));