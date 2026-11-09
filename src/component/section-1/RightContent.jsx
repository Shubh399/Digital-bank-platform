const RightContent = () => {
  return (
    <div className=" relative h-full w-[80vw]   flex flex-row align-center justify-center">
      <div className=" overflow-hidden relative w-[70vw] h-[75vh] flex flex-row align-center justify-center mt-10">
        <div className="flex overflow-hidden relative flex-row w-[75vw] h-[75vh] gap-4 m-3 ml-2 rounded-4xl">
          {/* this is first card */}
          <div className=" bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-size-[65vh] top-0 left-15 h-[70vh] w-[25vw] p-2.5 rounded-4xl flex flex-col justify-between bg-center bg-no-repeat ">
            <h2 className=" bg-white  w-15 h-15 m-5 font-semibold rounded-full flex-col justify-between  text-4xl text-center pt-2 z-10">
              {"1"}
            </h2>
            <div className="flex flex-col justify-between">
              <p className=" text-amber-50 pl-1.5 text-1xl mb-15">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati eligendi quis saepe? Rerum suscipit tempora facilis
                ipsa rem totam adipisci dolore eum sed exercitationem atque
                illum nisi, est, velit mollitia?
              </p>
              <div className="flex flex-row justify-between ">
                <button className=" text-white bg-blue-800 p-2  pl-5 pr-5 rounded-4xl">
                  Satisfied
                </button>
                <button className=" text-white bg-blue-800 text-2xl p-2 cursor-pointer  pl-5 pr-5 rounded-4xl">
                  <i className="text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-right preview-icon"
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </div>

          {/* this is second card */}
          <div className=" bg-[url('https://plus.unsplash.com/premium_photo-1682608388268-d2fe94141e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-size-[65vh] top-0 left-15 h-[70vh] w-[25vw] p-2.5 rounded-4xl flex flex-col justify-between bg-center bg-no-repeat ">
            <h2 className=" bg-white  w-15 h-15 m-5 font-semibold rounded-full flex-col justify-between  text-4xl text-center pt-2 z-10">
              {"1"}
            </h2>
            <div className="flex flex-col justify-between">
              <p className=" text-amber-50 pl-1.5 text-1xl mb-15">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati eligendi quis saepe? Rerum suscipit tempora facilis
                ipsa rem totam adipisci dolore eum sed exercitationem atque
                illum nisi, est, velit mollitia?
              </p>
              <div className="flex flex-row justify-between ">
                <button className=" text-white bg-blue-800 p-2  pl-5 pr-5 rounded-4xl">
                  Satisfied
                </button>
                <button className=" text-white bg-blue-800 text-2xl p-2 cursor-pointer  pl-5 pr-5 rounded-4xl">
                  <i className="text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-right preview-icon"
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </div>

          {/* this is third card */}
          <div className=" bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-size-[65vh] top-0 left-15 h-[70vh] w-[25vw] p-2.5 rounded-4xl flex flex-col justify-between bg-center bg-no-repeat ">
            <h2 className=" bg-white  w-15 h-15 m-5 font-semibold rounded-full flex-col justify-between  text-4xl text-center pt-2 z-10">
              {"1"}
            </h2>
            <div className="flex flex-col justify-between">
              <p className=" text-amber-50 pl-1.5 text-1xl mb-15">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati eligendi quis saepe? Rerum suscipit tempora facilis
                ipsa rem totam adipisci dolore eum sed exercitationem atque
                illum nisi, est, velit mollitia?
              </p>
              <div className="flex flex-row justify-between ">
                <button className=" text-white bg-blue-800 p-2  pl-5 pr-5 rounded-4xl">
                  Satisfied
                </button>
                <button className=" text-white bg-blue-800 text-2xl p-2 cursor-pointer  pl-5 pr-5 rounded-4xl">
                  <i className="text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-right preview-icon"
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
