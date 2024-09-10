import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
const ThirdPage = () => {
  return (
    <>
      <div className="container content-space-1 bg-light" style={{}}>
        <div className="m-20 p-5 row justify-content-md-between align-items-sm-center">
          <div className="col-6 col-sm-5 col-md-4 mb-5 mb-sm-0">
            <img
              className="lazyload blur-up img-fluid"
              style={{ width: "80%" }}
              src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/svg/illustrations/oc-growing.svg"
              alt="Image Description"
            />
          </div>
          <div className="col-sm-7">
            <div className="mb-5">
              <h2 className="display-4 mb-3" style={{ textAlign: "left" }}>
                <span className="text-primary text-highlight-warning">AI</span>{" "}
                powered{" "}
                <span className="text-primary text-highlight-warning">
                  career
                </span>{" "}
                boosters
              </h2>
              <p
                className="lead"
                style={{ textAlign: "left", fontSize: "1rem" }}
              >
                Services to help you get hired, faster: from preparing your CV,
                getting recruiter attention, finding the right jobs, and more!
              </p>
            </div>
            <div className="serv d-grid d-md-flex gap-3 align-items-md-center">
              <a
                className="btn btn-outline-secondary flex items-center justify-center p-2"
                href="#"
                style={{}}
                target="_blank"
              >
                <PiNewspaperClippingDuotone />
                &nbsp;Resume Builder
              </a>
              <a
                className="btn btn-outline-danger flex items-center justify-center p-2"
                style={{}}
                href="#"
                target="_blank"
              >
                <IoBriefcaseOutline />
                &nbsp;Linkedin Optimizer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThirdPage;
