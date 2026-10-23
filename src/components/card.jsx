import cs from "classnames";

export default function Card({ title, isInvert = false, children }) {
  return (
    <div
      className={cs(
        "mr-2 flex h-fit flex-col items-center justify-center gap-10 overflow-hidden bg-steel px-3 py-10 shadow-plate md:px-14 md:py-16",
        {
          "border-2 border-white bg-transparent": isInvert,
        }
      )}
    >
      {title && (
        <h2 className="heading-sign mb-6 px-4 text-4xl">{title}</h2>
      )}
      {children}
    </div>
  );
}
