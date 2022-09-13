export const Error = ({ children }) => {
  return (
    <div className="bg-red-500 text-white text-center p-3 mb-5">
      <p>{children}</p>
    </div>
  );
};
