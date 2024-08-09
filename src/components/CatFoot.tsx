
import imgcat from '../assets/Vector.svg'

const CatFoot = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={imgcat}
          alt="Animal Foot"
          className="w-[43.59px] h-[36.65] absolute left-[50%] transform translate-x-[1380%] translate-y-[130%]"
        />
      </div>
      <div className="relative">
        <img
          src={imgcat}
          alt="Animal Foot"
          className="w-[43.59px] h-[36.65] absolute left-[50%] transform translate-x-[1600%] translate-y-[250%]"
        />
      </div>
      <div className="relative">
        <img
          src={imgcat}
          alt="Animal Foot"
          className="w-[43.59px] h-[36.65] absolute left-[50%] transform translate-x-[1450%] translate-y-[500%]"
        />
      </div>
      <div className="relative">
        <img
          src={imgcat}
          alt="Animal Foot"
          className="w-[43.59px] h-[36.65] absolute left-[50%] transform translate-x-[1750%] translate-y-[600%]"
        />
      </div>
    </div>
  );
};

export default CatFoot;
