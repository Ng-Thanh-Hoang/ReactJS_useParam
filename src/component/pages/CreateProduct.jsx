import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const navigate = useNavigate();
  const prodEditForm = useFormik({
    initialValues: {
      id: '',
      name: '',
      price: '',
      description: '',
      img: '',
      type: 'APPLE',
      delete: false
    },
    onSubmit: async (values) => {
      console.log(values);
      //Gọi Api update
      const res = await axios.post(`https://apitraining.cybersoft.edu.vn/api/ProductApi/create
`, values);
      alert('create thành công');
      navigate('../')
    }
  })

  return (
    <form className='card mt-5' onSubmit={prodEditForm.handleSubmit}>
      <div className="card-body">
        <h2>Edit Product</h2>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input value={prodEditForm.values.id} onChange={prodEditForm.handleChange} type="text" className="form-control" id="id"/>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input value={prodEditForm.values.name} onChange={prodEditForm.handleChange} type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input value={prodEditForm.values.price} onChange={prodEditForm.handleChange} type="text" className="form-control" id="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image URL</label>
          <input value={prodEditForm.values.img} onChange={prodEditForm.handleChange} type="text" className="form-control" id="img" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea value={prodEditForm.values.description} onChange={prodEditForm.handleChange} className="form-control" id="description" rows={3} defaultValue={""} />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select name="type" id="type" className='form-control' value={prodEditForm.values.type} onChange={prodEditForm.handleChange}>
            <option value={"SONY"}>SONY</option>
            <option value={"APPLE"}>APPLE</option>
            <option value={"SAMSUNG"}>SAMSUNG</option>
            <option value={"XIAOMI"}>XIAOMI</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="deleted" onChange={prodEditForm.handleChange} value={prodEditForm.values.id} />
          <label className="form-check-label" htmlFor="deleted">Deleted</label>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </div>
    </form>
  )
}

export default CreateProduct