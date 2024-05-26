/*
* Please create a function model(state, element) to bind state.value to the HTMLInput Element.
const input = document.createElement('input');
const state = { value: "Hi"};
model(state, input);
console.log(input.value); //'Hi'
state.value="dev";
console.log(input.value); //"dev"
input.value="enginerring"
input.dispatchEvent(new Event('change'));
console.log(state.value); //
*/

const model = function (state, input) {
  input.value = state.value;

  Object.defineProperties(state, 'value', {
    get() {
      return state.value;
    },
    set(newValue) {
      input.value = newValue;
    },
  });
  input.addEventListener('change', (e) => {
    const newValue = e.target.value;
    state.value = newValue;
  });
};

const doc = this.document;
const input = doc.createElement('input');
const state = { value: 'Hi' };
model(state, input);
console.log(input.value); //'Hi'
state.value = 'dev';
console.log(input.value); //"dev"
input.value = 'enginerring';
input.dispatchEvent(new Event('change'));
console.log(state.value); //
