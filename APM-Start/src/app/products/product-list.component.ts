import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    imgWidth = 50;
    imgMargin = 2;
    showImage = false;
    _listFilter: string;
    listFilter = 'cart';
    filteredProducts: IProduct[];
    products: IProduct[] = [];
    errorMessage: string;

    constructor(private productService: ProductService) {
        this.listFilter = 'cart';
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Produc list:' + message;
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
       this.productService.getProducts().subscribe({
        next: products =>{
             this.products = products;
             this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
       });
    }
}
