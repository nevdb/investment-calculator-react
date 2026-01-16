export default function BaseInput({ label, invalid, ...props }) {
  let labelClass = "block mb-2 uppercase";
  let inputClass = "w-3/4 px-3 py-2 mx-2  border rounded-md";

  if (invalid) {
    labelClass += " text-red-400 border-red-700";
    inputClass += " text-red-400 bg-red-100 border-red-300";
  } else {
    labelClass += " text-stone-300 ";
    inputClass += "  border-amber-200";
  }

  return (
    <p className="my-4">
      <label className={labelClass}>{label}</label>
      <input type="text" className={inputClass} {...props} />
    </p>
  );
}
