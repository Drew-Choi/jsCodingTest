const str = "string";

const translatePigLatin = (str) => {
  const regex = /^[^aeiou]+/;

  let check = str.match(regex);

  return check
    ? str.replace(regex, "").concat(check + "ay")
    : str.concat("way");
};

console.log(translatePigLatin(str));
