export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
           {/* Desktop */}
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left "></div>
            <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
              <div className="ml-2">
                <h1>What have you been reading</h1>
                <p>
                  The library team would love o know what you have been reading.
                  Whethere it is to learn a new skill or grow within one, we
                  will able to provide the top content for you!
                </p>
                <a className="btn-main-colorbtn-lg text-white" href="#">
                  Sign up
                </a>
              </div>
            </div>

            <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
              <div className="ml-2">
                <h1>Our collection is always changing!</h1>
                <p className="lead">
                  Try too check in daily as our collection is always changing!
                  We work not stop to provide the more accurate books selection
                  possible for our Luv2Code students! We are diligent about our
                  book selection and our book selection and our books always are
                  going in the top priority.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left">
              <div className="mt-2">
                <h1>What have you been reading</h1>
                <p>
                  The library team would love o know what you have been reading.
                  Whethere it is to learn a new skill or grow within one, we
                  will able to provide the top content for you!
                </p>
                <a className="btn-main-color btn-lgt ext-white" href="#">
                  Sign up
                </a>
              </div>
            </div>
            <div className="m-2">
              <div className="col-image-right">
                <h1>Our collection is always changing!</h1>
                <p className="lead">
                  Try too check in daily as our collection is always changing!
                  We work not stop to provide the more accurate books selection
                  possible for our Luv2Code students! We are diligent about our
                  book selection and our book selection and our books always are
                  going in the top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
