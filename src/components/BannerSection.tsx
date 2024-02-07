const BannerSection = () => {
  return (
    <div className="container p-16 ">
      <div className="grid gap-4 lg:grid-cols-2 sm:grid-rows-1 ">
        <div className="h-full  overflow-hidden">
          <img
            alt="snack bag"
            className="hover:scale-105 transition-transform"
            src="https://img.freepik.com/premium-psd/realistic-yellow-snack-pouch-plastic-bag-packaging-mockup-premium-psd_604996-25.jpg"
          />
        </div>
        <div className="h-full  overflow-hidden">
          <img
            alt="snack bag"
            className="hover:scale-105 transition-transform"
            src="https://www.creativefabrica.com/wp-content/uploads/2022/06/08/Snack-Bag-Mockup-Graphics-31982108-3-580x387.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
