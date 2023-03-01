import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-seller-reg',
  templateUrl: './seller-reg.component.html',
  styleUrls: ['./seller-reg.component.css']
})
export class SellerRegComponent implements OnInit {

  constructor(private service:CommonService) { }
  ngOnInit(): void {
    
  }
 seller_pic :any;
 onImageChanged(event:any){
  this.seller_pic = event.target.files[0]
 }
 message:string = ""
 submit(formdata : any){
  
  // console.log(formdata)
  const sellerData = new FormData()
  sellerData.append('first_name',formdata['first_name'])
  sellerData.append('last_name',formdata['last_name'])
  sellerData.append('email',formdata['email'])
  sellerData.append('phone',formdata['phone'])
  sellerData.append('address',formdata['address'])
  sellerData.append('bank_name',formdata['bank_name'])
  sellerData.append('branch',formdata['branck'])
  sellerData.append('ifsc',formdata['ifsc'])
  sellerData.append('account_no',formdata['account_no'])
  sellerData.append('seller_pic',this.seller_pic) 
 

this.service.addSeller(sellerData).subscribe((res:{message:string})=>{
  console.log(res)
  this.message = res.message
})  
  }
}
