export const Title = ({
  text = "",
  size = "text-2xl",
  className = "",
  children,
}) => {
  return (
    <h1 className={`${size} font-semibold text-gray-800 ${className}`}>
      {text}
      {children}
    </h1>
  );
};
