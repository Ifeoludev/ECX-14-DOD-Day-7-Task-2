"use strict";

const romanInput = document.getElementById("roman");
const arabicInput = document.getElementById("arabic");
const romanError = document.getElementById("roman-error");
const arabicError = document.getElementById("arabic-error");
const convertBtn = document.getElementById("convertBtn");

const romanToArabicMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const toRoman = function (num) {
  let result = "";
  for (const [key, value] of Object.entries(romanToArabicMap)) {
    while (num >= value) {
      result += key;
      num -= value;
    }
  }
  return result;
};

const fromRoman = function (str) {
  let i = 0,
    num = 0;
  str = str.toUpperCase();
  while (i < str.length) {
    if (i + 1 < str.length && romanToArabicMap[str.substring(i, i + 2)]) {
      num += romanToArabicMap[str.substring(i, i + 2)];
      i += 2;
    } else if (romanToArabicMap[str[i]]) {
      num += romanToArabicMap[str[i]];
      i++;
    } else {
      return NaN;
    }
  }
  return num;
};

const showError = function (element, message) {
  element.textContent = message;
  element.classList.remove("shake");
  void element.offsetWidth;
  element.classList.add("shake");
};

convertBtn.addEventListener("click", () => {
  romanError.textContent = "";
  arabicError.textContent = "";

  const romanVal = romanInput.value.trim().toUpperCase();
  const arabicVal = parseInt(arabicInput.value.trim());

  if (arabicVal && !romanVal) {
    if (arabicVal < 1 || arabicVal > 1000 || isNaN(arabicVal)) {
      showError(arabicError, "Enter a number from 1 to 1000");
      romanInput.value = "";
    } else {
      romanInput.value = toRoman(arabicVal);
    }
  } else if (romanVal && !arabicVal) {
    const result = fromRoman(romanVal);
    if (
      !romanVal ||
      isNaN(result) ||
      result < 1 ||
      result > 1000 ||
      toRoman(result) !== romanVal
    ) {
      showError(romanError, "Enter a valid Roman numeral (I–M, max 1000)");
      arabicInput.value = "";
    } else {
      arabicInput.value = result;
    }
  } else if (romanVal && arabicVal) {
    const result = fromRoman(romanVal);
    if (isNaN(result) || result !== arabicVal || toRoman(result) !== romanVal) {
      showError(romanError, "Roman and Arabic do not match");
      showError(arabicError, "Roman and Arabic do not match");
    }
  } else {
    showError(romanError, "Please enter a Roman or Arabic value");
    showError(arabicError, "Please enter a Roman or Arabic value");
  }
});
