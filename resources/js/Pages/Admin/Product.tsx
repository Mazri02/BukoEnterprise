import { BsFilter, BsPlus, BsSearch } from 'react-icons/bs';
import '../../../css/Admin/Product.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactDOMServer from 'react-dom/server';
import $ from 'jquery';
import Header from './Header';

export default function Sales() {
    const [Item, SetItem] = React.useState<any>();
    const [Category, SetCategory] = React.useState<any>()

    useEffect(() => {
        if(Category === undefined) {
            axios.get('/api/Admin/Category').then((res) => {
                if (res.status === 200) {
                    SetCategory(res.data);
                }
            });

            axios.get('/api/Admin/Products').then((res) => {
                if (res.status === 200) {
                    SetItem(res.data);
                }
            });
        }
    }),[Category,Item];

    const ProductContent = (data? :any) => {
        return (
            <>
                <div className="Admin_ProductForm">
                    <div className="Admin_FormContainer">
                        <img className='Admin_ImagePreview'/>
                        <h2>Enter Product Image</h2>
                        <input type='file' id='Admin_ProductImage' value={data.data != undefined ? data.data.ProductImage : ""} onChange={(event:any) => {
                            const file = event.target.files[0];
                            if (file) { 
                                const reader = new FileReader(); 
                                reader.onload = function(e:any) { 
                                    $('.Admin_ImagePreview').attr('src',e.target.result)
                                    $('.Admin_ImagePreview').css('display','block'); 
                                }; 
                                reader.readAsDataURL(file); 
                            }
                        }}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Product Name</h2>
                        <input type='text' id="Admin_ProductName" value={data.data != undefined ? data.data.ProductName : ""}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Product Price</h2>
                        <input type='number' id="Admin_ProductPrice" value={data.data != undefined ? data.data.ProductPrice : ""}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Product Stock</h2>
                        <input type='number' id="Admin_ProductStock" value={data.data != undefined ? data.data.ProductStock : ""}/>
                    </div>
                    <div className="Admin_FormContainer">
                        <h2>Enter Product Ingredient</h2>
                        <input type='text' id="Admin_ProductIngredient" value={data.data != undefined ? data.data.ProductIngredient : ""}/>
                    </div>
                </div>
            </>
        )
    }

    const handleDelete = (ids : any) => {
        const data = new FormData();
        data.append('ProductID',ids);
        axios.post('api/Admin/DeleteProduct',data).then((res) => {
            if(res.status === 200){
                axios.get('/api/Admin/Products').then((res) => {
                    if (res.status === 200) {
                        SetItem(res.data);
                    }
                });

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
            }
        })
    }

    const ProductAlert = (category:any) => {
        Swal.fire({
            title: "Add Product to " + category + " Menu",
            html : ReactDOMServer.renderToString(<ProductContent />),
            showConfirmButton: true, 
            showCancelButton: true, 
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Add Current Item to Product',
            customClass: { 
                confirmButton: 'Admin_ConfirmButton', 
            },
        }).then((e:any) => {
            if(e.isConfirmed){
                const data = new FormData();
                data.append('ProductName',$('#Admin_ProductName').val() as string)
                data.append('ProductImage',($('#Admin_ProductImage')[0] as any).files[0] as string)
                data.append('ProductIngredient',$('#Admin_ProductIngredient').val() as string)
                data.append('ProductPrice',$('#Admin_ProductPrice').val() as string)
                data.append('ProductStock',$('#Admin_ProductStock').val() as string)
                data.append('ProductCategory', category)

                axios.post('/api/Admin/AddProduct',data).then((res) => {
                    if(res.status === 200){
                        axios.get('/api/Admin/Products').then((res) => {
                            if (res.status === 200) {
                                SetItem(res.data);
                            }
                        });

                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: res.data.message,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer);
                                toast.addEventListener('mouseleave', Swal.resumeTimer);
                            }
                        });
                    }
                })
            }
        })
    }

    const ProductEdit = (ids:any,category:any) => {
        const data = new FormData()
        data.append('ProductID',ids)
        axios.post('/api/Admin/SearchProduct',data).then((res) => {
            if(res.status === 200){
                Swal.fire({
                    title: "Update Product " + res.data.ProductName,
                    html : ReactDOMServer.renderToString(<ProductContent data={res.data} />),
                    showConfirmButton: true, 
                    showCancelButton: true, 
                    cancelButtonText: 'Cancel',
                    confirmButtonText: 'Update Current Item',
                    customClass: { 
                        confirmButton: 'Admin_ConfirmButton', 
                    },
                }).then((e:any) => {
                    if(e.isConfirmed){
                        const data = new FormData();
                        data.append('ProductName',$('#Admin_ProductName').val() as string)
                        data.append('ProductImage',($('#Admin_ProductImage')[0] as any).files[0] as string)
                        data.append('ProductIngredient',$('#Admin_ProductIngredient').val() as string)
                        data.append('ProductPrice',$('#Admin_ProductPrice').val() as string)
                        data.append('ProductStock',$('#Admin_ProductStock').val() as string)
                        data.append('ProductCategory', category)
                        data.append('ProductID', ids)
        
                        axios.post('/api/Admin/EditProduct',data).then((res) => {
                            if(res.status === 200){
                                axios.get('/api/Admin/Products').then((res) => {
                                    if (res.status === 200) {
                                        SetItem(res.data);
                                    }
                                });
        
                                Swal.fire({
                                    toast: true,
                                    position: 'top-end',
                                    icon: 'success',
                                    title: res.data.message,
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', Swal.stopTimer);
                                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                                    }
                                });
                            }
                        })
                    }
                })
            }
        })
    }

    return (
        <div className='Admin_ProductContainer'>
            <Header/>

            <div className='Admin_ProdContentCont'>
                <div className='Admin_SalesNav'>
                    <ul className='Admin_SalesNavList'>
                        <li onClick={() => window.location.href = route('AdminOverview')}>General Sales Report</li>
                        <li onClick={() => window.location.href = route('AdminStock')}>Stock Inventory Items</li>
                        <li onClick={() => window.location.href = route('AdminSales')}>Order Tracking</li>
                        <li className='Admin_Selected'>List Of Product</li>
                    </ul>   
                </div>

                <div className='Admin_ProductList'>
                    <div className="Admin_ProductTitle">
                        <h2>List Of Product</h2>
                        <h4>Where the Magic Of Buko Happens</h4>
                    </div>
                    <div className='Admin_ProductController'>
                        <div className='Admin_ProductSearchCont'>
                            <BsSearch />
                            <input type='text' placeholder='Search Specific Product' />
                        </div>
                        <div className="Admin_ProductButtonController">
                            <div className='Admin_ProductButton'>
                                <BsFilter />
                                <button>Filter</button>
                            </div>
                        </div>
                    </div>
                    <div className="Admin_ProductListContent">
                        {
                            Category !== undefined ?
                                Category.map((category:any) => {
                                    const itemsInCategory = Item ? Item.filter((item: any) => item.ProductCategory === category) : [];

                                    if (itemsInCategory.length > 0) {
                                        return (
                                            <div style={{ margin: "1em 0" }} key={category}>
                                                <div className='Admin_ProductCategory'>
                                                    <div className='Admin_ProductCategoryTitle'>
                                                        {category} Menu
                                                    </div>

                                                    <div className="Admin_ProductCategoryButtonController">
                                                        <button onClick={() => ProductAlert(category)}><BsPlus/></button>
                                                    </div>
                                                </div>
                                                <div className='Admin_ProductCardContent'>
                                                    {
                                                        itemsInCategory.map((item : any, index: any) => (
                                                            <div key={index} className='Admin_ProductItemCard'>
                                                                <div className='Admin_ProductImageCard'>
                                                                    <img src={item.ProductImage} alt={item.ProductName} />
                                                                </div>
                                                                <div className='Admin_ProductDescriptionCard'>
                                                                    <h1>{item.ProductName}</h1>
                                                                    <h2>In-Stock: {item.ProductStock}</h2>
                                                                    <h3>RM {item.ProductPrice}</h3>
                                                                    <span>Ingredient: {item.ProductIngredient}</span>
                                                                    <div className="Admin_ProductButtonCard">
                                                                        <button onClick={() => ProductEdit(item.ProductID,item.ProductCategory)}>Edit</button>
                                                                        <button onClick={() => handleDelete(item.ProductID)}>Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }) 
                            : 
                            <div>Fetching...</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
