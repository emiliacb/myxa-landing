export default function Card({ title, children }) {
  return (
    <div className="flex overflow-hidden h-fit flex-col items-center justify-center gap-10 rounded-3xl bg-gray-100 py-10 md:py-20 px-3 md:px-14 mr-3 shadow-[10px_11px_0px_0px_rgba(0,0,0,0.25)]">
      {title && <h2 className="text-6xl my-10">{title}</h2>}
      {children}
    </div>
  );
}
