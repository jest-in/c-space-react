import axios from 'axios'
import React from 'react'

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
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
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
    <div>
    <h1>HELLO</h1>
    <button onClick={displayRazorpay}>click</button>
    </div>
  )
}