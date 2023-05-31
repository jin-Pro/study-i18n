export default function c(...strings: (string | boolean | undefined)[]) {
  return strings.filter((str) => !!str).join(' ');
}
