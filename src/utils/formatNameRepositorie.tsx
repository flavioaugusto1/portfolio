export function formatFirstLetterToUpperCase(name: string) {
  const catchName = name.charAt(0).toUpperCase();
  const formatedName = catchName + name.slice(1);
  return formatedName;
}
