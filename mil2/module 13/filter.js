function filter(arr, t) {
  let FilterValue = [];
  for (const element of arr) {
    if (element >= t) {
      FilterValue.push(element);
    }
  }
  console.log(FilterValue);
}
const order = [200, 300, 400, 500, 600, 700];
filter(order, 600);
