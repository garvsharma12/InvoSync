import {assets} from "../assets/assets.js";
import {Trash2} from "lucide-react";
import {useContext} from "react";
import { AppContext } from "./context/appContext.jsx";

const InvoiceForm = () => {
    const {invoiceData, setInvoiceData} = useContext(AppContext);

    const addItem = () =>{
        setInvoiceData((
            setInvoiceData((prev) => ({
                ...prev,
                items: [...prev.items, { name: "", qty: 0, description: "", total: 0 }],
            }))
        ))
    }

    const deleteItem = (index) =>{
        const items = invoiceData.items.filter((_, i) => i !== index);
        setInvoiceData((prev) => ({
            ...prev,
            items,
        }))
    }
    return (
        <div className="invoiceform container py-4">

            {/* Company Logo */}
            <div className="mb-4">
                <h5>Company Logo</h5>
                <div className="d-flex align-items-center gap-3">
                    <label htmlFor="image" className="form-label">
                        <img src={assets.uploadIcon} alt="upload" width={98} />
                    </label>
                    <input type="file" name="logo" id="image" hidden className="form-control" accept="image/*"/>
                </div>
            </div>
            {/* Company Info */}
            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company phone" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Company address" />
                    </div>
                </div>

            </div>
            {/* Billing To */}
            <div className="mb-4">
                <h5>Bill To</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone phone" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                </div>
            </div>
            {/* Ship To */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>Ship To</h5>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="sameAsBilling"/>
                        <label htmlFor="sameAsBilling" className="form-check-label">
                            Same as Billing
                        </label>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone number" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Shipping address" />
                    </div>
                </div>
            </div>
            {/* Invoice Info */}
            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
                        <input type="text" disabled className="form-control" placeholder="Invoice Number" id="invoiceNumber" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDate" className="form-label">Invoice Date</label>
                        <input type="date" className="form-control" id="invoiceDate"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-label">Invoice Due Date</label>
                        <input type="date" className="form-control" id="invoiceDueDate" />
                    </div>
                </div>
            </div>
            {/* Item details */}
            <div className="mb-4">
                <h5>Item Details</h5>
                {invoiceData?.items?.map((item, index) => (
                    <div key={index} className="card p-3 mb-3">
                        <div className="row g-3 mb-2">
                            <div className="col-md-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Item Name"
                                    value={item.name}
                                    onChange={(e) => {
                                        const updatedItems = [...invoiceData.items];
                                        updatedItems[index].name = e.target.value;
                                        setInvoiceData({ ...invoiceData, items: updatedItems });
                                    }}
                                />
                            </div>
                            <div className="col-md-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Qty"
                                    value={item.qty}
                                    onChange={(e) => {
                                        const updatedItems = [...invoiceData.items];
                                        updatedItems[index].qty = Number(e.target.value);
                                        setInvoiceData({ ...invoiceData, items: updatedItems });
                                    }}
                                />
                            </div>
                            <div className="col-md-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount"
                                    value={item.total}
                                    onChange={(e) => {
                                        const updatedItems = [...invoiceData.items];
                                        updatedItems[index].total = Number(e.target.value);
                                        setInvoiceData({ ...invoiceData, items: updatedItems });
                                    }}
                                />
                            </div>
                            <div className="col-md-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Total"
                                    value={item.qty * item.total}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="d-flex gap-2">
        <textarea
            className="form-control"
            placeholder="Description"
            value={item.description}
            onChange={(e) => {
                const updatedItems = [...invoiceData.items];
                updatedItems[index].description = e.target.value;
                setInvoiceData({ ...invoiceData, items: updatedItems });
            }}
        ></textarea>
                            {invoiceData.items.length > 1 && (
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => {
                                        deleteItem(index)
                                    }}
                                >
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(addItem) => {
                        setInvoiceData({
                            ...invoiceData,
                            items: [
                                ...invoiceData.items,
                                { name: "", qty: 0, description: "", total: 0 },
                            ],
                        });
                    }}
                >
                    Add Item
                </button>
            </div>

            {/* Bank Account Info */}
            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Account Name" />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Account Number"/>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Branch/IFSC Code" />
                    </div>
                </div>
            </div>
            {/* Totals */}
            <div className="mb-4">
                <h5>Totals</h5>
                <div className="f-flex justify-content-end">
                    <div className="w-100 w-md-50">
                        <div className="d-flex justify-content-between">
                            <span>SubTotal</span>
                            <span>₹{1000.00}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <label htmlFor="taxInput" className="me-2">Tax Rate(%)</label>
                            <input type="number" id="taxInput" className="form-control w-50 text-end" placeholder="2" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Tax Total</span>
                            <span>₹{1000.00}</span>
                        </div>
                        <div className="d-flex justify-content-between fw-bold mt-2">
                            <span>Grand Total</span>
                            <span>₹{1000.00}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Notes */}
            <div className="mb-4">
                <h5>Notes</h5>
                <div className="w-100">
                    <textarea name="notes" className="form-control" row={3}></textarea>
                </div>
            </div>
        </div>
    )

}
export default InvoiceForm;
