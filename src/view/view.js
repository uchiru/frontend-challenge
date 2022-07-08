export default class View {
  renderImg(data, container) {
    container.innerHTML = '';
    data.forEach(element => {
      const component = createImgElement(element.url)

      container.append(component);
    });
  }
}
const createImgElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.classList.add('main__image');
  const image = new Image();
  image.src = template;
  newElement.append(image)
  createButton(newElement);
  return newElement
};

const createButton = (element) => {
  const button = document.createElement(`button`);
  button.setAttribute('type', 'button');
  button.classList.add('main__button');
  element.append(button);
  return element;
}
