export default class ImagesModel {
  constructor () {
    this._images = [];
  }

  getImages() {
    return this._images;
  }

  setImages(images) {
    this._images = this._images.concat(images);
  }
}
