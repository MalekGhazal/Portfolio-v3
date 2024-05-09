const Footer = () => {
  return (
    <>
      <div className="bg-malek-yellow flex flex-col md:flex-row items-center justify-center md:justify-between h-32">
        <p className="font-source-code text-malek-dark font-semibold md:ml-10">
          &copy; {new Date().getFullYear()} | All Rights Reserved.
        </p>
        <p className="font-source-code text-malek-dark font-semibold md:mr-10">
          Designed by{' '}
          <span className="underline decoration-malek-white font-bold">
            Malek
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
