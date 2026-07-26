function apply(age, hasId) {
  if (age >= 18 && hasId) {
    console.log("eligiable");
  } else {
    console.log("not eligiable");
  }
}
apply(19, true);
