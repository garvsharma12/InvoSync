import { useContext, useRef } from "react";
import { templates } from "../assets/assets.js";
import { AppContext } from "../components/context/appContext.jsx";

const PreviewPage = () => {
    const previewRef = useRef();
    const { selectedTemplate, setSelectedTemplate } = useContext(AppContext);

    return (
        <div className="container-fluid d-flex flex-column p-3 min-vh-100">
            <div className="d-flex flex-column align-items-center mb-4 gap-3">
                {/* Template Selector */}
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                    {templates.map(({ id, label }) => (
                        <button
                            key={id}
                            style={{ minWidth: "100px", height: "38px" }}
                            onClick={() => setSelectedTemplate(id)}
                            className={`btn btn-sm rounded-pill p-2 ${
                                selectedTemplate === id ? "btn-warning" : "btn-outline-secondary"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Preview Section (empty for now, can render preview here) */}
                <div
                    ref={previewRef}
                    className="d-flex flex-wrap justify-content-center gap-2 border p-3 rounded"
                    style={{ minHeight: "300px", width: "100%" }}
                >
                    <h5 className="text-muted">Preview will appear here...</h5>
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;
