const SecPart2 = () => {
  return (
    <>
      {/* thirdpage content */}

      <div className="text-center">
        <div className="text-6xl font-medium">Jobs for the Day</div>
        <div className="text-slate-500 text-xl m-2">
          ~ Explore jobs based on trending work domains ~
        </div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-20 m-[59px]">
        {/*first*/}
        <div className="flex items-center border-solid border p-4 shadow-md rounded hover:shadow-lg hover:-translate-y-2 transform transition duration-300 ease-in-out hover:rounded-lg hover:border border-gray-300 hover:p-4 hover:bg-slate-100 hover:text-blue-500">
          <div className="m-3">
            <img src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/webp/finance.webp" />
          </div>
          <div className="my-1 text-lg font-medium">Corportate Finance</div>
        </div>

        {/*second*/}
        <div className="flex items-center border-solid border p-4 shadow-md rounded hover:shadow-lg hover:-translate-y-2 transform transition duration-300 ease-in-out hover:rounded-lg hover:border border-gray-300 hover:p-4 hover:bg-slate-100 hover:text-blue-500">
          <div className="m-3">
            <img src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/webp/accounting.webp" />
          </div>
          <div className="my-1 text-lg font-medium">Accounting & Finance</div>
        </div>

        {/*third*/}
        <div className="flex items-center border-solid border p-4 shadow-md rounded hover:shadow-lg hover:-translate-y-2 transform transition duration-300 ease-in-out hover:rounded-lg hover:border border-gray-300 hover:p-4 hover:bg-slate-100 hover:text-blue-500">
          <div className="m-3">
            <img
              src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/webp/investment-banking.webp"
              className="h-9"
            />
          </div>
          <div className="my-1 text-lg font-medium">
            Investment Banking, Private Equity &amp; VC
          </div>
        </div>

        {/*fourth*/}
        <div className="flex items-center border-solid border p-4 shadow-md rounded hover:shadow-lg hover:-translate-y-2 transform transition duration-300 ease-in-out hover:rounded-lg hover:border border-gray-300 hover:p-4 hover:bg-slate-100 hover:text-blue-500">
          <div className="m-3">
            <img src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/webp/data.webp" />
          </div>
          <div className="my-1 text-lg font-medium">
            Data Science, Analytics &amp; Machine Learning
          </div>
        </div>

        {/*fifth*/}
        <div className="flex items-center border-solid border p-4 shadow-md rounded hover:shadow-lg hover:-translate-y-2 transform transition duration-300 ease-in-out hover:rounded-lg hover:border border-gray-300 hover:p-4 hover:bg-slate-100 hover:text-blue-500">
          <div className="m-3">
            <img src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/webp/legal.webp" />
          </div>
          <div className="my-1 text-lg font-medium">Legal & Regulatory</div>
        </div>

        {/*sixth*/}
        <div className="flex items-center border-solid border p-4 shadow-md rounded hover:shadow-lg hover:-translate-y-2 transform transition duration-300 ease-in-out hover:rounded-lg hover:border border-gray-300 hover:p-4 hover:bg-slate-100 hover:text-blue-500">
          <div className="m-3">
            <img src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/webp/corpo.webp" />
          </div>
          <div className="my-1 text-lg font-medium">
            Management & Development
          </div>
        </div>
      </div>
    </>
  );
};

export default SecPart2;
