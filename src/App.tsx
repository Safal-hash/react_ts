const App = () => {
  const githubSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="size-6 bi bi-github fill-neutral-500"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );

  const twitterSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      className="size-7 fill-neutral-500 "
    >
      <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
    </svg>
  );
  return (
    <div className="flex flex-col h-screen items-center  gap-2 font-geist bg-neutral-900 justify-center">
      <div className="flex justify-evenly md:justify-between w-sm md:w-md  md:gap-4">
        <h1 className="text-9xl font-medium text-green-400">W</h1>

        <h1 className="text-9xl font-medium text-yellow-400">I</h1>

        <h1 className="text-9xl font-medium text-red-400">P</h1>
      </div>
      <div className="flex text-neutral-50 w-md gap-1 justify-center  items-center">
        In Meantime, Checkout My
        <a className="size-8  flex justify-center items-center rounded-full cursor-pointer " href="https://github.com/Safal-hash">
          {githubSVG}
        </a>{" "}
        and{" "}
        <a className="size-8  flex justify-center items-center cursor-pointer rounded-full" href="https://x.com/SafalT_">
          {twitterSVG}
        </a>
      </div>
    </div>
  );
};

export default App;
