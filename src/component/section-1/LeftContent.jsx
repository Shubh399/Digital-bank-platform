const LeftContent = () => {
  return (
    <div className="h-[75vh] w-[23vw] flex flex-col align-middle justify-between">
      <div className="flex flex-col align-middle justify-between">
      <h1 className="text-5xl font-bold ">Prospective customer segmentation</h1>
      <p className="m-1 p-0.5 text-2xl mt-5">
        Depending on customer satisfaction and access to banking product
        potential target audience can be divided into three groups
      </p>
      </div>
      <div className=" cursor-pointer">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-up-right preview-icon"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </i>
      </div>
    </div>
  );
};

export default LeftContent;
