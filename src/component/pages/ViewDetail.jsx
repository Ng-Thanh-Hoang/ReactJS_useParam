import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ViewDetail = () => {
    const param = useParams();
    const { id } = param;
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
        }
    })

    const getProductApi = async () => {
        const res = await fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`);
        const data = await res.json();
        console.log(data);
        prodEditForm.setValues(data)
    }

    useEffect(() => {
        getProductApi();
    }, [id]);

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6">
                    <img src={prodEditForm.values.img} alt={prodEditForm.values.name} className='w-100' />
                </div>
                <div className="col-6">
                    <h1>{prodEditForm.values.name}</h1>
                    <span className='text-danger fs-3 fw-bold'>Prices: ${prodEditForm.values.price}</span>
                    <h3 className='text-info'>Description: </h3>
                    <p className='fw-bold'>{prodEditForm.values.description}</p>
                    <span className='text-success fw-bold fs-3'>Type: </span>
                    <span className='fw-bold'>{prodEditForm.values.type}</span>
                </div>
            </div>
        </div>
    )
}

export default ViewDetail