const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border-red-500 text-red-400 rounded-full p-3 flex items-center justify-center">
      <a href={link} className="cursor-pointer">
        <Icon icon={Icon} />
      </a>
    </div>
  );
};

export default SingleContactSocial;
