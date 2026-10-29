export default function ChangeLanguage({
  onChange,
}: {
  onChange: (e: string) => void;
}) {
  return (
    <div className="absolute right-3 top-3 rounded-xl border-2 border-white/20 bg-white/20 backdrop-blur-xl sm:right-5 sm:top-5">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-12 cursor-pointer appearance-none bg-transparent text-center text-white outline-none"
      >
        <option value="en-US" className="bg-slate-900  text-white">
          EN
        </option>
        <option value="fa-IR" className="bg-slate-900 text-white">
          FA
        </option>
      </select>
    </div>
  );
}
