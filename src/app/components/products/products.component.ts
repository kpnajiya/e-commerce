import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 productlist :any 
  constructor(private service:ProductService) { }
 // for wrks when page loaded
  ngOnInit(): void {
   this.service.getProducts().subscribe(res=>{
    // console.log(res);
    this.productlist = res
   })

  }

}
