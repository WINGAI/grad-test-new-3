
const Inquiry = () => {
  return (
    <div className="pt-10">
      <div
        className="text-white py-10 text-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/N7ng4M4/animated.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl lg:text-base lg:font-semibold pt-5 text-logoRed">
          Dreaming to Study Abroad & Settle Overseas?
        </h1>
        <p className="text-2xl lg:text-4xl lg:font-bold lg:leading-[48px]">
          Get Free Profile Assessment
        </p>
        {" "}
        <form className="md:w-3/4 lg:w-1/2 mx-auto">

            <div className="form-control w-full lg:w-[calc(50% - 0.75rem)]">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Name"
                className="input input-bordered xl:w-full text-black"
              />
            </div>

            <div className="form-control w-full lg:w-[calc(50% - 0.75rem)]">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered xl:w-full text-black"
              />
            </div>

            <div className="form-control w-full lg:w-[calc(50% - 0.75rem)]">
              <label className="label">
                <span className="label-text text-white">Contact number</span>
              </label>
              <input
                type="text"
                required
                name="contact"
                placeholder="Contact"
                className="input input-bordered xl:w-full text-black"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Choose Services</span>
              </label>
              <select className="text-black input input-bordered xl:w-full" id="service" name="service">
                <option value="">Study Abroad</option>
                <option value="">Immigration</option>
                <option value="">Spouse Visa</option>
                <option value="">Dependant Visa</option>
                <option value="">Visitor Visa</option>
              </select>
            </div>

          <div className="form-control mt-6 flex justify-center items-center">
            <input className="btn btn-error w-max" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
