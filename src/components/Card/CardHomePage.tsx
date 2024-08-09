const CardHomePage = () => {
  return (
    <div>
      <h3 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-center mt-20">
        Social Tasks
      </h3>
      <h3 className="mb-2 text-1xl text-[#6B6B6B] dark:text-white text-center">
        Complete the Social Tasks to earn extra $Heart token
      </h3>
      <div className="max-w-5xl mx-auto">
        <div className="p-4 w-full h-500 bg-white rounded-lg border border-[#EEC5C7] shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Connect Your X account
          </h3>
          <p className=" text-text-1xl text-[#6B6B6B] dark:text-gray-400">
            You need connect your X account to join Social Task
          </p>
          <a
            className="mb-5 text-text-1xl text-[#0D88D8] dark:text-gray-400"
            href="#"
          >
            Learn more &gt; 
          </a>
          <div className=" space-y-4  sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="w-full mt-3 sm:w-auto flex bg-[#CA5C3B] hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-full px-5 py-1.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 flex items-center justify-center"
            >
              <div className="text-left">
                <div className="mb-1 text-1xl">Connect your X account</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHomePage;
