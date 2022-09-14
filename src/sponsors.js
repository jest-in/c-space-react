import axios from 'axios'
import React from 'react'
import Navigation from './navigation'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

export default function Sponsors() {
	// const payeeInfo = {
	// 	name: "isac",
	// 	phoneNumber: "1234567890",
	//   };
    // const [name, setName] = useState('isac')
    async function displayRazorpay(){
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		// const data = await fetch('http://localhost:5000/api/v1/payment/paynow', { 
		// 	method: 'POST', 
		// 	body:JSON.stringify(payeeInfo), 
		// }).then((res) =>
		// 	res.json()
		// )
		let data;
		await axios.post('http://localhost:5000/api/v1/payment/paynow/6305c2a430f4d701ec04cc1a', 
			{ baptismName: "isac", description: "for fun. Yoo!", phoneNum:7022741913, self:true },
		    { withCredentials: true }
		)
		.then((res) => {
			data = res.data;
		});

    const options = {
			key: __DEV__ ? 'rzp_test_mbliUpU7QpW6uu' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'C-Space Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
				console.log('PAY RES : ',response)
			},
			prefill: {
				name:'isac',
				email: 'isac@mail.com',
				phone_number: '9986593265'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()

    }

  return (
    // <div>
    // <h1>HELLO</h1>
    // <button onClick={displayRazorpay}>click</button>
    // </div>

	<div className="container-family">
  <Navigation/>
  <div className="announce-title-div">
    <div className="family-master">
      <h1>Make Payment</h1>
    </div>
  </div>
  <hr />
  <div className="compose-announcement-div">
    <div className="family-details-div">
      <div className="payment-entries">
        <div className="inner-div-1 payment-inner-div-1">
          <div className="house-name-div">
            <h1>Name</h1>
            <input className="house-name-input" type="text" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
          <div className="address-div">
            <h1>Description</h1>
            <textarea className="address-input" cols={13} rows={4} defaultValue={""} />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="inner-div-2 payment-inner-div-2">
          <div className="houseno-div">
            <h1>House Name</h1>
            <input className="house-no-input" type="text" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
          <div className="ward-div">
            <h1>Contact No</h1>
            <input className="house-no-input" type="text" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
          <div className="ward-div">
            <h1>Amount</h1>
            <input className="house-no-input" type="text" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="publish-btn-div">
    <button onClick={displayRazorpay}>Make Payment</button>
  </div>
</div>


  )
}