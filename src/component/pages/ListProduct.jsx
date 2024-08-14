import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const ListProduct = () => {
    const [arrProduct, setArrProduct] = useState([]);

    const [search, setSearch] = useSearchParams('');
    const kw = search.get('prodName')

    const handleChange = (e) => {
        setSearch({
            prodName: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const getAllProductApi = async () => {
        let url = '';
        if (kw) {
            url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?=${kw}`
        }
        else {
            url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall`
        }
        const res = await fetch(url);
        const data = await res.json();

        setArrProduct(data);
        console.log(data)
    }

    useEffect(() => {
        getAllProductApi();
    }, [kw]);

    return (
        <div className='mt-3'>
            <h4 className='text-secondary fs-6'>Products List</h4>
            <NavLink to="/create-product" className='btn mb-3 text-white fw-bold' style={{ background: '#ef6e15' }}>New Product</NavLink>
            <form className="form-group d-flex mb-4" onSubmit={handleSubmit}>
                <input type="text" className="form-control w-25" placeholder="Search products..." onInput={handleChange} />
                <button type={'submit'} className="btn" style={{ background: '#ff9219' }}>Search</button>
            </form>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className='border-end-0' style={{ background: '#f9fafc' }}><input type="checkbox" /></th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc' }}>NAME</th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc' }}>IMG</th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc' }}>PRICE</th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc' }}>TYPE</th>
                        <th className='border-start-0' style={{ background: '#f9fafc' }} />
                    </tr>
                </thead>
                <tbody>
                    {arrProduct.map((item) => {
                        return <tr key={item.id}>
                            <td className='border-end-0 pt-4'><input type="checkbox" /></td>
                            <td className='border-0 pt-4 fw-bold'>{item.name}</td>
                            <td className='border-0'><img src={item.img} width={50} /></td>
                            <td className='border-0 pt-4 fw-bold'>{item.price}</td>
                            <td className='border-0 pt-4 fw-bold'>{item.type}</td>
                            <td className='text-end border-start-0 pt-4'>
                                <NavLink to={`../update-product/${item.id}`} className="me-2 text-decoration-none fw-bold" style={{ color: '#f3601b' }}>Edit</NavLink>
                                <span onClick={async (e) => {
                                    if (window.confirm('Bạn có muốn xoá không ?')) {
                                        const res = await axios.delete(`https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${item.id}`);
                                        getAllProductApi();
                                    }
                                }} className="me-2 text-decoration-none fw-bold px-1" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b',cursor:'pointer' }}>Delete</span>
                                <NavLink to={`../view-detail/${item.id}`} className="me-2 text-decoration-none fw-bold px-1" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b' }}>View detail</NavLink>
                            </td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <td colSpan={3} className='p-2 border border-end-0' style={{ background: '#f9fafc' }}>Showing 1 to 3 of 3 results</td>
                    <td colSpan={3} style={{ fontWeight: '700', background: '#f9fafc' }} className='text-end border border-start-0'>Per page: 10 <i className="fa fa-angle-down me-2" style={{ background: '#f9fafc' }}></i></td>
                </tfoot>
            </table>
        </div>
    )
}

export default ListProduct