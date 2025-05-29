type Value = string | number;
let value: Value = 123;

function isString(value: Value): value is string {
  return typeof value === "string";
}

const s = isString(value);
