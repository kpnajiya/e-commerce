import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {

  constructor(private service: CommonService) { }

  ngOnInit(): void {
  }
 customer_pic: any;
 onImageChanged(event:any){
  this.customer_pic = event.target.files[0]
 }

 message:string = ""
 submit(formdata:any){

  const customerData = new FormData()
   customerData.append('first_name',formdata['first_name'])
   customerData.append('last_name',formdata['last_name'])
   customerData.append('email',formdata['email'])
   customerData.append('phone',formdata['phone'])
   customerData.append('address',formdata['address'])
   customerData.append('password',formdata['password'])
   customerData.append('customer_pic',this.customer_pic)

this.service.addCustomer(customerData).subscribe((res:{message:string})=>{
  console.log(res)
  this.message = res.message
})  
  
 }

}
