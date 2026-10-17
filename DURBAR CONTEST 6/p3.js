function isValidEmail(email) {
  let at = -1;
  let dot = -1;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      if (at !== -1) return false;
      at = i;
    }
  }

  if (at <= 0) return false;

  for (let i = at + 1; i < email.length; i++) {
    if (email[i] === ".") dot = i;
  }

  if (dot <= at + 1 || dot >= email.length - 2) return false;

  for (let i = 0; i < email.length; i++) {
    let c = email[i];

    if (
      !(
        (c >= "a" && c <= "z") ||
        (c >= "A" && c <= "Z") ||
        (c >= "0" && c <= "9") ||
        c === "." ||
        c === "_" ||
        c === "-" ||
        c === "@"
      )
    )
      return false;
  }

  for (let i = dot + 1; i < email.length; i++) {
    let c = email[i];
    if (!((c >= "a" && c <= "z") || (c >= "A" && c <= "Z"))) {
      return false;
    }
  }

  return true;
}
