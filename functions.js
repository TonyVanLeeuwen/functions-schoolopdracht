// // -------------------------------  BEGINNER
//
// /* Opdracht 1 */
// // Schrijf een functie die een naam verwacht en een groet teruggeeft
// // ---- Verwachte uitkomsten:
// // "Nova" geeft "Hoi Nova!"
// // "Nick" geeft "Hoi Nick!"
//
// const greetSomeone = name => "Hoi " + name + "!"; //returned "Hoi [naam]!"
//
// console.log(greetSomeone("Tony"));
//
// /* Opdracht 2 */
// // Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// // hoeveel seconden dat zijn.
// // ---- Verwachte uitkomsten:
// // 1 geeft 60
// // 3 geeft 180
// // 23 geeft 1840
//
// const minutesToSeconds = amount => amount * 60; // returned de hoeveelheid seconden in het aantal opgegeven minuten
//
// console.log(minutesToSeconds(6));
//
// /* Opdracht 3 */
// // Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// // dan nul
// // ---- Verwachte uitkomsten:
// // -3 geeft false
// // 0 geeft false
// // 300 geeft true
//
// const greaterThanZero = number => number > 0; // returned true als het groter is dan 0, false als het kleiner is dan 0;
//
// console.log(greaterThanZero(-1));
//
// /* Opdracht 4 */
// // Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// // ---- Verwachte uitkomsten:
// // 1 en 23 geeft false
// // 8 en 92 geeft false
// // 89 en 14 geeft true
//
// const sumGreaterThanOneHundred = (numbera, numberb) => (numbera + numberb) > 100;
// //telt de twee opgegeven getallen bij elkaar op
// //en returned true als de som groter is dan 100
// // of false als de som kleiner is dan 100
//
// console.log(sumGreaterThanOneHundred(50, 5));
//
// /* Opdracht 5 */
// // Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// // dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// // De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// // voor gebruiken zoals .concat()
// // ---- Verwachte uitkomsten:
// // ["abra", "cadabra"] geeft "abracadabra"
// // ["a", "b", "c", "d", "e"] geeft "abcde"
//
// function addAllTheStrings(stringArray) {
//     let container = "";
//     for (let i = 0; i < stringArray.length; i++) {
//         container += stringArray[i];
//     }
//     return container;
// }
//
// const arraytjeHoor = ["dit", "is", "een", "aan", "elkaar", "geplakte", "array", "met", "strings"];
// console.log(addAllTheStrings(arraytjeHoor));
//
// // -------------------------------  INTERMEDIATE
//
// /* Opdracht 6 */
// // Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// // als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken als je
// // graag wil oefenen!
// // ---- Verwachte uitkomsten:
// // "koekje" geeft "ejkeok"
// // "vrienden" geeft "nedneirv"
//
// const reverseWord = (word) => word.split("").reverse().join(""); //returned de opgegeven string omgekeerd dmv ingebouwde methoden
//
//
// function reverseWordUsingLoop(word) {
//
//     let containerReverse = "";
//     counter = 1;
//
//     for (let i = 0; i < word.length; i++) {
//         containerReverse += word[word.length - counter];
//         counter++;
//     }
//
//     return containerReverse;
// }
//
// console.log(reverseWord("word"));
// console.log(reverseWordUsingLoop("wordhandmatig"));
//
//
// /* Opdracht 7 */
// // Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// // spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// // zo niet, dan false.
// // ---- Verwachte uitkomsten:
// // "lepel" geeft true
// // "madam" geeft true
// // "vrienden" geeft false
//
// function isPalindrome(wordToCheck){
//     return wordToCheck === wordToCheck.split("").reverse().join("");
// }
//
// console.log(isPalindrome("woord"))
// console.log(isPalindrome("lepel"))
// console.log(isPalindrome("legovogel"))
//
// /* Opdracht 8 */
// // Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// // de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// // ---- Verwachte uitkomsten:
// // "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// // "Hans is zijn mondkapje vergeten" en "a" geeft 2
//
// // schrijf lege functie die een string en letter verwacht
// // schrijf een counter variabele die begint bij nul
// // schrijf een loop die gedurende de lengte van de string loopt
// // schrijf in de loop een methode die controleert of een letter in de string voorkomt (if else)
// // return de counter variabele
//
// function countCharacter(stringToCheck, characterToCount){
//     let counter = 0;
//
//     for (let i = 0; i < stringToCheck.length; i++) {
//         if (stringToCheck[i] === characterToCount){
//             counter++;
//         }
//     }
//
//     return counter;
// }
//
// console.log(countCharacter("Dit is een string, ben benieuwd hoeveel e's erin zitten", "e"))

// ------------------------------- ADVANCED (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry(array, amountOfEntries) {
    if (amountOfEntries === undefined) {
        return array[array.length - 1];
    } else {
        let otherArray = [];
        for (let i = 0; i < amountOfEntries; i++) {
            otherArray.push(array[array.length - (amountOfEntries - i)]);
        }
        return otherArray;
    }
}

const someArray = [0, 22, 35, 43, 82, 1032];

console.log(lastEntry(someArray));
console.log(lastEntry(someArray, 4));

/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204

//schrijf lege functie
// voeg een variabele toe genaamd highest
//schrijf een loop in die functie
// schrijf een if statement in die loop die de variabele highest overschrijft als het getal in de array groter is dan
// het op dat moment opgeslagen getal in de variabele

function returnHighestNumber(numberArray) {
    let highest = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > highest) {
            highest = numberArray[i];
        }
    }
    return highest;
}

const numberArray = [1, 23, 102, 29340, 49, 33];

console.log(returnHighestNumber(numberArray));

/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

// functie moet een loop bevatten die hoe dan ook logt
// als deelbaar door drie en vijf log fizzbuzz
// als deelbaar door drie log fizz
// als deelbaar door vijf buzz
// anders log getal

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 5) === 0 && (i % 3) === 0) {
            console.log("fizzbuzz");
        } else if ((i % 3) === 0) {
            console.log("fizz");
        } else if ((i % 5) === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();