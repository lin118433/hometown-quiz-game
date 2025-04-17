export function Button({ children, ...props }) {
  return (
    <button
      className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-4 py-2"
      {...props}
    >
      {children}
    </button>
  );
}
