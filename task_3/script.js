const inputArea = document.getElementById('inputArea');
const outputArea = document.getElementById('outputArea');

const translationRules = {
    " ": " ", ",": ",", ".": ".", "?": "?", "!": "!", 
    "а": "a",   "А": "A",
    "б": "b",   "Б": "B",
    "в": "v",   "В": "V",
    "г": "g",   "Г": "G",
    "д": "d",   "Д": "D",
    "е": "e",   "Е": "E",
    "є": "ye",  "Є": "Ye",
    "ж": "zh",  "Ж": "Zh",
    "з": "z",   "З": "Z",
    "и": "i",    "И": "I",
    "і": "i",   "І": "I",
    "ї": "yi",  "Ї": "Yi",
    "й": "y",   "Й": "Y",
    "к": "k",   "К": "K",
    "л": "l",   "Л": "L",
    "м": "m",   "М": "M",
    "н": "n",   "Н": "N",
    "о": "o",   "С": "O",
    "п": "p",   "П": "P",
    "р": "r",   "Р": "R",
    "с": "s",   "С": "S",
    "т": "t",   "Т": "T",
    "у": "u",   "У": "U",
    "ф": "f",   "Ф": "F",
    "х": "h",   "Х": "H",
    "ц": "c",   "Ц": "C",
    "ч": "ch",  "Ч": "Ch",
    "ш": "sh",  "Ш": "Sh",
    "щ": "shch", "Щ": "Sch",
    "ь": "",    "Ь": "",
    "ю": "yu",  "Ю": "Yu",
    "я": "ya",  "Я": "Ya"
};

inputArea.addEventListener('input', () => {
    const text = inputArea.value;
    
    const transfromText = text.split('').map(str => translationRules[str]).join("");

    outputArea.value = transfromText;
});
