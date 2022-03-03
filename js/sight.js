class SVGElement {
  const type;
  const namespace;
  constructor(type) {
    this.type = type;
    this.namespace = 'http://www.w3.org/2000/svg';
    this.node = document.createElementNS(namespace, type);

    return this;
  }

  attr(attrs: object) {
    for( const [key, value] of attrs.entries()) {
      this.node.setAttributeNS(null, value);
    }
    return this;
  }

  append(element) {
    parent = typeof(element) === string ? document.querySelector(element) : element.node;
    this.node.append(parent);

    return this;
  }
}

class Sight {

  constructor(selector, width, height) {
    this.svg = new SVGElement(this.svg).attr({viewbox: `0 0 ${width} ${heigth}`}).append(selector);
  }

  draw(type, attrs).attr(attrs).append(svg);

}
