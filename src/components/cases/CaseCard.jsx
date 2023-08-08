function CaseCard({ data, index, imge }) {
  return (
    <div
      onMouseEnter={() => {
        const resal = document.getElementById(index);
        resal.classList.add("underline");
        const post_img = document.getElementById(data.imageUrl);
        post_img.classList.add("scale-95", "transition-all", "duration-700");
      }}
      onMouseLeave={() => {
        const resal = document.getElementById(index);
        resal.classList.remove("underline");
        const post_img = document.getElementById(data.imageUrl);
        post_img.classList.remove("scale-95", "transition-all", "duration-500");
      }}
      className="flex flex-col overflow-hidden rounded shadow-lg"
    >
      <div className="flex-shrink-0">
        <img
          id={imge}
          className="h-96 w-full object-cover "
          src={data.imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1  flex-col justify-between bg-white p-6">
        <div className="flex-1 ">
          <p className="text-sm font-bold text-black hover:text-gray-900 ">
            <a href={data.category.href} className="">
              {data.category.name}
            </a>
          </p>
          <a href={data.href} className="mt-2 block">
            <p id={index} className="text-3xl font-semibold text-gray-900 ">
              {data.title}
            </p>
            <p className="mt-3 text-base text-gray-500">{data.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center"></div>
      </div>
    </div>
  );
}

export default CaseCard;
