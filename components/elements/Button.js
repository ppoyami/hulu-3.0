import tw from 'twin.macro';

export default function Button({ children }) {
  return (
    <button
      css={tw`text-xl block uppercase p-3 w-full m-auto my-4 bg-blue-800 hover:bg-blue-600 rounded-md`}
    >
      {children}
    </button>
  );
}
