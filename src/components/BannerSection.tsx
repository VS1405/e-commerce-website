const BannerSection = () => {
  return (
    <div className="container p-16 ">
      <div className="grid gap-4 lg:grid-cols-2 sm:grid-rows-1 ">
        <div className="h-full w-full  overflow-hidden">
          <img
            alt="snack bag"
            className="object-fill h-32 w-full hover:scale-105 transition-transform "
            src="https://img.freepik.com/premium-psd/realistic-yellow-snack-pouch-plastic-bag-packaging-mockup-premium-psd_604996-25.jpg"
          />
        </div>
        <div className="h-full w-full  overflow-hidden ">
          <img
            alt="snack bag"
            className="h-32 w-full hover:scale-105 transition-transform object-fill "
            src="https://www.creativefabrica.com/wp-content/uploads/2022/06/08/Snack-Bag-Mockup-Graphics-31982108-3-580x387.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
