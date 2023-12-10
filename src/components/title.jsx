import { Fragment } from "react";

export default function Title({ contents }) {
  const style = {
    animation: "moveLeft 100s linear infinite",
  };

  return (
    <div className="w-screen overflow-hidden">
      <div className="flex w-fit items-center justify-start" style={style}>
        {contents &&
          [...contents, ...contents].map((content, index) => (
            <Fragment key={index}>
              <div className="w-[400px] h-6 border-b-4 border-black" />
              <h2 className="mx-4 w-max text-[180px] font-bold">{content}</h2>
              <div className="w-[400px] h-6 border-b-4 border-black" />
            </Fragment>
          ))}
      </div>
    </div>
  );
}
