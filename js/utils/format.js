export function formatPrice(price) {
  price = price.replace(".", "").replace(",", "").replace(/\D/g, "");

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(price) / 100
  );

  return result;
}

export function formatString(category) {
  const convertWordToLowerCase = category.toLowerCase();
  const capitalFirstLetter = convertWordToLowerCase.replace(
    convertWordToLowerCase[0],
    convertWordToLowerCase[0].toUpperCase()
  );
  return capitalFirstLetter;
}
