export function createElement(text: string, type: string, style: string) {
  const element = document.createElement(type);
  element.classList.add(style);
  element.innerText = text;
  return element;
}
