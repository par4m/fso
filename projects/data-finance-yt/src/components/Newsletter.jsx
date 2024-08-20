const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow ?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-3 flex w-full rounded-md text-black"
              />
              <button
                type="button"
                className="ml-4 text-white w-[150px]  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
              >
                Notify Me
              </button>
            </div>
            <p>
              We care bout the protection of your data.
              <span className="text-[#f1b6e4]"> Read our Privacy Policy. </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
