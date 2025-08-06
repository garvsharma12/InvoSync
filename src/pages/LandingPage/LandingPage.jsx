import './LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const steps = [
    {
        icon: "📝",
        title: "Enter Details",
        description: "Quickly fill in your clients information, item description, quantities and prices. Our intutuve from makes it a breeze."
    },
    {
        icon: "📋",
        title: "Choose Template",
        description: "Browse our galley of professionaly designed templates and choose the one that suits your needs. No need to worry about formatting."
    },
    {
        icon: "🔍",
        title: "Preview Invoice",
        description: "See exactly how your invoice will look like before you generate it. Make any last-minute adjustments with ease."
    },
    {
        icon: "📥",
        title: "Download & Save",
        description: "Download your invoice as a PDF send it directly via email or save it to your computer for future reference."
    }
];

const LandingPage = () => {
    return (
        <>
            <header id="hero" className="hero-section text-white text-center">
                <div className="container py-5 d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="display-3 fw-bold mb-4">InvoSync</h1>
                            <p className="lead mb-5" style={{ fontSize: "1.3rem" }}>
                                Stop wrestling with spreadsheets. InvoSync helps you create and manage your invoices in minutes, so you get paid faster.
                            </p>
                            <p>
                                <button className="btn btn-primary rounded-pill my-2 mx-1 px-5 py-3">
                                    Generate invoices with ease
                                </button>
                                <a href="#how-it-works" className="btn btn-lg btn-outline-light rounded-pill my-2 mx-1 px-5 py-3">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            {/*Steps to generate in-voice*/}
            <section id="how-it-works" className="bg-light text-dark py-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">How It Works</h2>
                    <div className="row text-center">
                        {steps.map((step, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="card h-100 border-0 shadow-sm hover-effect">
                                    <div className="card-body">
                                        <div className="display-4 mb-3">{step.icon}</div>
                                        <h5 className="card-title fw-bold">{step.title}</h5>
                                        <p className="card-text">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Why Choose InvoSync?</h2>

                    {/* Feature 1 */}
                    <div className="row align-items-center gy-4">
                        <div className="col-md-2 text-center">
                            <img src="/icons/easy-form.svg" alt="Easy Form" className="img-fluid" style={{ maxWidth: "60px" }} />
                        </div>
                        <div className="col-md-10">
                            <h5 className="fw-bold">Effortless Data Entry</h5>
                            <p>Quickly input client and product details with our intuitive interface that speeds up invoicing.</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="row align-items-center gy-4 mt-4 flex-row-reverse">
                        <div className="col-md-2 text-center">
                            <img src="/icons/templates.svg" alt="Templates" className="img-fluid" style={{ maxWidth: "60px" }} />
                        </div>
                        <div className="col-md-10">
                            <h5 className="fw-bold">Professional Templates</h5>
                            <p>Choose from a gallery of well-designed templates that give your invoice a polished, branded look.</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="row align-items-center gy-4 mt-4">
                        <div className="col-md-2 text-center">
                            <img src="/icons/preview.svg" alt="Preview" className="img-fluid" style={{ maxWidth: "60px" }} />
                        </div>
                        <div className="col-md-10">
                            <h5 className="fw-bold">Live Invoice Preview</h5>
                            <p>See changes in real-time as you edit the invoice. No guesswork, no surprises.</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="row align-items-center gy-4 mt-4 flex-row-reverse">
                        <div className="col-md-2 text-center">
                            <img src="/icons/download.svg" alt="Download" className="img-fluid" style={{ maxWidth: "60px" }} />
                        </div>
                        <div className="col-md-10">
                            <h5 className="fw-bold">Download & Save</h5>
                            <p>Export your invoice as PDF and save it locally or share directly with your clients.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* call to action section */}
            <section id="generate-invoice" className="py-5 text-center bg-primary text-white">
                <div className="container">
                    <h2 className="display-5 fw-bold mb-3">Ready to streamline Your Invoicing</h2>
                    <p className="lead mb-5" style={{ maxWidth: "600px", margin: "0 auto"}}>
                        Join thousands of freelancers and small businessman who are trusting and using InvoSync.
                    </p>
                    <button className="btn btn-lg btn-warning fw-bold rounded-pill px-5 py-3">
                        Start Generating Invoices Now
                    </button>
                    <p className="mt-3 small">
                        (This will lead to the invoice generation interface)
                    </p>
                </div>
            </section>

            {/* Footer: Copyright and social media links*/}
            <footer className="bg-dark text-light py-4 mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Copyright */}
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="mb-0">&copy; {new Date().getFullYear()} InvoiceGen. All rights reserved.</p>
                        </div>

                        {/* Social Links */}
                        <div className="col-md-6 text-center text-md-end">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default LandingPage;
