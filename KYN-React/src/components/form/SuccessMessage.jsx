const SuccessMessage = ({ children, onClose }) => {
  return (
    <div
      className="
      flex justify-between items-center py-3 px-6 w-full rounded-sm mb-2
      text-green-500 bg-green-200 border border-green-400"
    >
      <p>{children}</p>
      <i className="fa-regular fa-x cursor-pointer pl-3" onClick={onClose}></i>
    </div>
  );
};

export default SuccessMessage;
