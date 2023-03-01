import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private service : CommonService,private router: Router) { }

  ngOnInit(): void {
  }
message:string = ""
submit(formdata:any){
 
  // console.log(formdata)
  
this.service.customerLogin(formdata).subscribe((res:{statusCode:any,cToken:any,cName:string})=>{
  console.log(res.cToken)
  // this.message = res.statusCode
  if(res.statusCode == 200){
    localStorage.setItem('token',res.cToken)
    localStorage.setItem('customer_name',res.cName)
    this.router.navigate(['/home'])
  }
  
  this.message = 'Username or password incorrect'
})  
}
// statusCode':msg ,'C_token':customer.id,'cname':cname
}
