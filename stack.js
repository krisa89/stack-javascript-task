class Stack {
  #stack = [];
  constructor(...elements) {
    this.#stack = elements;
  }

  get size() {
    return this.#stack.length;
  }

  push(element) {
    this.#stack.push(element);
  }

  isEmpty() {
    return this.#stack.length ? false : true;
  }

  pop() {
    return this.#stack.length === 0 ? null : this.#stack.pop();
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }

  swap() {
    const top = this.#stack[this.#stack.length - 1];
    this.#stack[this.#stack.length - 1] = this.#stack[this.#stack.length - 2];
    this.#stack[this.#stack.length - 2] = top;
  }
}

module.exports = Stack;
