export default function Card({ title, children }) {
  return (
    <div className="bg-white-main shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2 text-black-main">{title}</h3>
      {children}
    </div>
  );
}