import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './modal_content.css'

export default function AdminModal() {
    const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <div className="field_imglist"><img className='input_img' src={photo} alt="" key={photo} /></div>;
		});
	};
  return (
    <>
    <section className='modal_section'>
    <div className="modal_container">
        <div className="modal_header">
            <h2 className='modal_title'>Add new Item</h2>
            <span className='modal_close'>x</span>
        </div>
        <div className="modal_content">
            <div className='form_wrapper'>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' type="text" placeholder='Name' />
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Description</label>
                    <input className='input_field' type="text" placeholder='Description' />
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Price</label>
                    <input className='input_field' type="text" placeholder='Price' />
                </div>
                <div className="input_contents">
                    <div className='input_group'>
                        <label htmlFor="" className='input_field_label'>Category</label>
                        <input className='input_field' type="text" placeholder='Category' />
                    </div>
                    <div className='input_group'>
                        <label htmlFor="" className='input_field_label'>Category</label>
                        <input className='input_field' type="text" placeholder='Category' />
                    </div>
                </div>
                <div className="input_contents">
                    <div className='input_group'>
                        <label htmlFor="" className='input_field_label'>Quantity</label>
                        <input className='input_field' type="text" placeholder='Category' />
                    </div>
                    <div className='input_group'>
                        <div className='checkbox_group'>
                            <label htmlFor="" className='input_field_label'>Visible:</label>
                            <label className="chackbox_container">
                                <input type="checkbox" name="Option 1" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='input_group'>
                    <div>
                        <label htmlFor="" className='input_field_label'>Image (Max 10)</label>
                        <input type="file" id="file" multiple onChange={handleImageChange} />
                            <div className="label-holder">
                                <label htmlFor="file" className="label">
                                Upload Image
                                </label>
                            </div>
                        <div className="result">{renderPhotos(selectedFiles)}</div>
                    </div>
                </div>
                <div className="input_contents">
                    <div className="input_group">
                        <button className='cancel'>CANCEL</button>
                    </div>
                    <div className="input_group">
                        <Link className='submit' to="/">SUBMIT</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    
        
    </>
  )
}
