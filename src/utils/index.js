export function generateId(minLength = 8, maxLength = 16) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let id = "";

  do {
    const char = chars[Math.floor(Math.random() * chars.length)];

    if (id.length === 0 && /^\d$/.test(char)) {
      continue;
    }

    id += char;
  } while (id.length < length);

  return id;
}
