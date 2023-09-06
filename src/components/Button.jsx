
const Button = ({ name }) => {
  return (
    <div className="my-3 mr-3">
      <button className="bg-gray-rgba text-white py-1 text-sm  px-3 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;