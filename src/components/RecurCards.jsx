const RecurCards = () => {
    return (
        <div className="grid grid-cols-3 gap-4 place content-evenly m-5">
            <div className="bg-teal-100 rounded-2xl p-5">
                <div className="p-3 font-bold text-2xl text-center">For Recruiters</div>
                <div className="p-4 text-4xl font-bold">Be your own boss, with our site "JobZoom.com"</div>
                <div className="p-5 flex justify-center">
                    <img
                        src="https://cdn.prod.website-files.com/65cb68557d264648c6675894/663a15eb99e3ef83e96df5c9_regr%20img.webp"
                        loading="lazy"
                        width={250}
                        alt=""
                    />
                </div>
                <span className="bg-white font-bold text-lg rounded-md p-3 text-center flex justify-center hover:scale-105 shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out">
                    <button>Apply as Recruiter Now</button>
                </span>
            </div>

            <div className="bg-neutral-100 rounded-2xl p-5">
                <div className="p-3 font-bold text-2xl text-center">For Companies & Firms</div>
                <div className="p-4 text-4xl font-bold text-justify">We recruit the talent you need</div>
                <div className="p-5  flex justify-center">
                    <img
                        src="https://cdn.prod.website-files.com/65cb68557d264648c6675894/663a16003c305cdbcb73cd0b_comp%20img.webp"
                        loading="lazy"
                        width={250}
                        alt=""
                    />
                </div>
                <span className="bg-cyan-700 font-bold text-lg rounded-md m-5 p-3 text-white text-center  flex justify-center hover:scale-105 shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out">
                    <button>Request Recruiting Services</button>
                </span>
            </div>

            <div className="bg-teal-100 rounded-2xl p-5">
                <div className="p-3 font-bold text-2xl text-center">For Job Seekers</div>
                <div className="p-4 text-4xl font-bold text-justify">Let us find your dream job today</div>
                <div className="p-5 flex justify-center">
                    <img
                        src="https://cdn.prod.website-files.com/65cb68557d264648c6675894/663a16123ce7237514a8be09_candidate%20img.webp"
                        loading="lazy"
                        width={250}
                        alt=""
                    />
                </div>
                <span className="bg-white font-bold text-lg rounded-md m-5 p-3 text-center flex justify-center hover:scale-105 shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out">
                    <button>Find My Dream Job Now</button>
                </span>
            </div>
        </div>
    )
}
export default RecurCards;