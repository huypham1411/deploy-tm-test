import React, { useState, useEffect } from 'react';
import '../../App.css';
// import Axios from 'axios';
// import { data } from '../../data/data';
import '../../styles/components/Product/ProductInfo.css';
import ProductCard from '../Product/ProductCard';
import { useSelector } from "react-redux";
import Axios from 'axios';
function ProductInfo({ match }) {
    const onLog = useSelector((state) => state.loginReducer);
    const [rv,setRv]=useState('');
    const [items, setItems] = useState([]);
    const [arrRv,setArrv]=useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(
                `/products/${match.params.id}`
            )
            const items = await data.json();
            setItems(items);
            setArrv(items.review)
            //console.log(items);
        }
        fetchItems();
        // console.log(match.params.id);
        // console.log(data);
    }, [match.params.id]);
    
    const submitRv=async ()=>{
        if(!rv){return;}
        await Axios.post('/products/review',{id:items._id,review:rv,username:onLog.username})
        .then(res=>{
            if(res.data.status==='success'){
                setRv('')
                setArrv(res.data.review)
            }
        })
    }
    return (
        <div className='product-info-container'>
            <div class="breadcrumbs_area">
                <div class="container">   
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb_content">
                                <h3>Product info</h3>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>    
            <div className="productInfo">
                <ProductCard
                    key={items._id}
                    _id={items._id}
                    img={items.img}
                    name={items.name}
                    description={items.description}
                    status={items.status}
                    price={items.price}
                    oldPrice={items.oldPrice}
                    id={items.id}  
                    rating={items.rating}
                    numRate={items.numRate}
                />
            </div>
            <div className='preview-container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='product_d_inner'>
                            <div className='review'>
                                <p>Preview</p>
                            </div>
                            <div class="tab-pane fade active show" id="reviews" role="tabpanel">
                                <div class="reviews_wrapper">
                                <h2> review for {items.name}</h2>
                                    <div class="reviews_comment_box">
                                        {arrRv.length?
                                        arrRv.map((item,key)=>{
                                            let cdate = (new Date(item.time)).toString();
                                            return(<div class="comment_text" key={key}>
                                            <div class="reviews_meta">
                                        <p><strong>{item.username}</strong>- {cdate}</p>
                                        <span>{item.review}</span>
                                            </div>
                                        </div>)
                                        })
                                       :null}
                                        
                                    </div>
                                    <div class="comment_title">
                                        <h2>Add a review </h2>
                                    </div>
                                    <div class="product_ratting mb-10">
                                    </div>
                                    <div class="product_review_form">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-12">
                                                    <label for="review_comment">Your review </label>
                                                    <textarea name="comment" id="review_comment" onChange={(e)=>setRv(e.target.value)}></textarea>
                                                </div> 
                                            </div>
                                            {onLog.username?<button type="submit" onClick={submitRv}>Submit</button>:<p>You need login to submit review</p>}
                                         </form>   
                                    </div> 
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;