import { useNavigate, useSearchParams } from 'react-router-dom';
import './Verify.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useEffect } from 'react';
export function Verify() {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    console.log(success,orderId)

    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayament = async ()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayament();
    },[])

    return (
        <div className="verify">
            <div className="spinner">

            </div>
        </div>
    )
}