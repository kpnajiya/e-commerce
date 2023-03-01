import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  constructor(private service:CommonService,private router: Router) { }

  ngOnInit(): void {
  }

message:any = "" ;
submit(formdata:any){
  // console.log(formdata)
  this.service.sellerLogin(formdata).subscribe((res:{statusCode:number,token:number,sname:string})=>{
   console.log(res)

   if(res.statusCode == 200){
    localStorage.setItem('seller_token',res.token.toString())
    localStorage.setItem('seller_name',res.sname)
    this.router.navigate(['/seller/home'])
   }
   this.message = res.statusCode
  })
}


}
