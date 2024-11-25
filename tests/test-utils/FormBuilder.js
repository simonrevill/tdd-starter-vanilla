export class FormBuilder {
  labels = [];
  inputs = [];
  submit;
  handler;

  withInput(label, id) {
    const htmlLabel = document.createElement("label");
    htmlLabel.setAttribute("for", id);
    htmlLabel.textContent = label;
    this.labels.push(htmlLabel);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", label);
    input.setAttribute("id", id);
    this.inputs.push(input);

    return this;
  }

  withSubmit(buttonText) {
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = buttonText;
    this.submit = submit;

    return this;
  }

  withHandler(handler) {
    this.handler = handler;

    return this;
  }

  build() {
    const form = document.createElement("form");
    form.onsubmit = this.handler;

    for (let i = 0; i < this.labels.length; i += 1) {
      form.appendChild(this.labels[i]);
      form.appendChild(this.inputs[i]);
    }

    form.appendChild(this.submit);

    document.body.appendChild(form);

    return form;
  }
}
