const CertificateInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-[#00cecb]">{number}</p>
      <p className="font-bold text-xl text-[#D3D3D3] uppercase -mt-4">{text}</p>
    </div>
  );
};
export default CertificateInfo;
