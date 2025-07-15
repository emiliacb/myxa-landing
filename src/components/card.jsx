import cs from "classnames";

export default function Card({ title, isInvert = false, children }) {
  return (
    <div
      className={cs(
        "mr-3 flex h-fit flex-col items-center justify-center gap-10 overflow-hidden rounded-3xl bg-gray-200 px-3 py-10 shadow-[10px_11px_0px_0px_rgba(0,0,0,0.25)] md:px-14 md:py-20",
        {
          "border border-[rgba(100,100,100,0.5)] bg-transparent shadow-[10px_11px_0px_0px_rgba(100,100,100,0.5)]":
            isInvert,
        }
      )}
    >
      {title && <h2 className="mb-6 px-4 text-4xl">{title}</h2>}
      {children}
    </div>
  );
}
