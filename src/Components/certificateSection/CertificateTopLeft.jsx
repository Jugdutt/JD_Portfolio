import CertificateInfo from "./CertificateInfo";

const CertificateTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-[#ffd60a] font-bold uppercase text-3xl font-special text-center">
        Certifications
      </p>
      <div className="flex justify-center items-center gap-4">
        <CertificateInfo number="2" text="Certifications" />
        <p className="font-bold text-6xl text-[#ffd60a]">-</p>
        <CertificateInfo number="2" text="Courses" />
      </div>
      <p className="text-center text-white">
        Proudly holding 2 certifications and completed 2 courses to enhance my
        skills.
      </p>
      <CertificateInfo number="Top 10%" text="Performance" />
    </div>
  );
};

export default CertificateTopLeft;
