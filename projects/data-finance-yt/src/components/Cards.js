import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-8">
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bol text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center text-4xl font-bold text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 gb Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
          </div>
          <p className="text-center">
            <button
              type="button"
              className="mt-4 text-white w-[150px]  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
            >
              <span className="text-xl"> Buy Now</span>
            </button>
          </p>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bol text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center text-4xl font-bold text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 gb Storage</p>
            <p className="py-2 border-b mx-8 mt-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
          </div>
          <p className="text-center">
            <button
              type="button"
              className="mt-4 text-white w-[150px]  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
            >
              <span className="text-xl"> Buy Now</span>
            </button>
          </p>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bol text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center text-4xl font-bold text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 gb Storage</p>
            <p className="py-2 border-b mx-8 mt-8">3 Granted Users</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
          </div>
          <p className="text-center">
            <button
              type="button"
              className="mt-4 text-white w-[150px]  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
            >
              <span className="text-xl"> Buy Now</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
