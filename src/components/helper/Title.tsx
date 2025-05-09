type props = {
  title: string;
};

export default function Title({ title }: props) {
  return (
    <h2 className="text-center my-8 text-4xl uppercase font-bold text-gray-600 border-b pb-2 pt-8">
      {title}
    </h2>
  );
}
