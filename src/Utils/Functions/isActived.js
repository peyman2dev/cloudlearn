export default function (styles) {
  return ({ isActive }) =>
    isActive ? (styles || "bg-dark-60/10 pb-3.5 px-4 py-3 rounded-md") : "";
}
