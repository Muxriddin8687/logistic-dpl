import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductModel, UserProductModel } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { TruckModel } from 'src/app/main/pages/services/freight/how-much/truck-container/truck-container.component';

@Component({
  selector: 'app-get-freight-quote',
  templateUrl: './get-freight-quote.component.html',
  styleUrls: ['./get-freight-quote.component.scss']
})
export class GetFreightQuoteComponent {
  public selectedProductNumber: number = 1;
  public selectEvet: boolean = true;

  selectedProductList$: Observable<UserProductModel[]> = new Observable<UserProductModel[]>();
  userProducts: UserProductModel[] = [];
  productList: ProductModel[] = [];

  user_truck: TruckModel[] = [{ id: 1, image: "20st.svg", type: "20' STANDART" }];

  container_list: TruckModel[] = [
    { id: 1, image: "20st.svg", type: "20' STANDART" },
    { id: 2, image: "20st.svg", type: "40' STANDART" },
    { id: 3, image: "20st.svg", type: "40' HIGH-CUBE" },
    { id: 4, image: "20op.svg", type: "20' OPEN TOP" },
    { id: 5, image: "20op.svg", type: "40' OPEN TOP" },
    { id: 6, image: "20p.svg", type: "20' PLATFORM" },
    { id: 7, image: "20p.svg", type: "40' PLATFORM" },
    { id: 8, image: "20ref.svg", type: "20' REFRIGERATED" },
    { id: 9, image: "20ref.svg", type: "40' REFRIGERATED" },
    { id: 10, image: "20bulk.svg", type: "20' BULK" },
    { id: 11, image: "20tank.svg", type: "20' TANK" },
    { id: 12, image: "20st.svg", type: "CUSTOM CONTAINERS" }
  ];

  truck_list: TruckModel[] = [
    { id: 13, image: "tautliner.svg", type: "Van" },
    { id: 14, image: "refrigerated.svg", type: "REFRIGERATED TRUCK" },
    { id: 15, image: "isotherm.svg", type: "ISOTHERM TRUCK" },
    { id: 16, image: "tautliner.svg", type: "MEGA-TRAILER" },
    { id: 17, image: "jumbo.svg", type: "JUMBO" },
    { id: 18, image: "tautliner.svg", type: "CUSTOM TRUCK" }
  ];


  defult = {
    "country": ".",
    "state": ".",
    "city": "Loading..."
  };

  searchResultFrom: any = signal(this.defult);
  searchResultTo: any = signal(this.defult);



  constructor(private http: HttpClient, private productService: ProductService) {
    this.load();
  }


  send(form: NgForm) {
    console.log(form.value);
  }


  load() {
    this.userProducts = this.productService.defultProductGroup;
    this.selectedProductList$ = this.productService.getSelectedProduct();
    this.productList = this.productService.productList;
  }


  selectedProduct(id: number) {
    if (this.selectEvet) {
      this.productService.selectProduct(id);
      this.selectedProductNumber = id;
    }
  }





  addProduct(form: NgForm) {

    let oldData = this.userProducts.find(item => item.id == form.value.product_id);

    if (oldData == undefined) {

      let product = this.productList.filter((item: any) => item.id == form.value.product_type_id);

      product[0]['parametrs'][0]['value'] = (form.value.length != undefined) ? parseInt(form.value.length) : undefined;
      product[0]['parametrs'][1]['value'] = (form.value.width != undefined) ? parseInt(form.value.width) : parseInt(form.value.radius);
      product[0]['parametrs'][2]['value'] = parseInt(form.value.height);
      product[0]['parametrs'][3]['value'] = parseInt(form.value.weight);
      product[0]['parametrs'][4]['value'] = parseInt(form.value.quantity);


      let newProduct = {
        id: this.productService.getRandomId(),
        name: form.value.product_name,
        product
      };

      this.selectEvet = true;
      this.selectedProduct(1);
      this.userProducts.push(newProduct);
    }

    this.selectEvet = true;
    this.selectedProduct(1);
  }


  selectedTruck(id: number) {

    let oldData: TruckModel[] = [];

    this.container_list.forEach(item => {
      if (item.id == id)
        oldData.push(item);
    });

    this.truck_list.forEach(item => {
      if (item.id == id)
        oldData.push(item);
    });

    this.user_truck = oldData;
  }


  editProduct(id: number) {
    this.selectEvet = false;
    this.selectedProductNumber = id;
    let data = this.userProducts.filter(item => item.id == id);

    this.productService.setProduct(data);
  }


  deleteProduct(id: number) {
    this.userProducts = this.userProducts.filter(item => item.id != id);
  }


  trackByFn(index: number, item: any): any {
    return item.id;
  }

  
  findCityByZipCodeFrom(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code)
      .subscribe(
        (res: any) => {
          if (res.error)
            this.searchResultFrom.set(this.defult);
          else
            this.searchResultFrom.set(res);
        },
        (err) => { }
      );
  }


  findCityByZipCodeTo(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code)
      .subscribe(
        (res: any) => {
          if (res.error)
            this.searchResultTo.set(this.defult);
          else
            this.searchResultTo.set(res);
        },
        (err) => { }
      );
  }
}
