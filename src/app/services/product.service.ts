import { Injectable } from '@angular/core';
import { Product } from '../Product';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    const products: Product[] = [];

    products.push(
      new Product('Avira Antivirus Premium', 'https://5.imimg.com/data5/NU/CX/MY-2/antivirus-installation-services-500x500.jpeg', 'Avira', 200, 20,0,false,2016),
      new Product('kaspersky Internet Security', 'https://smhttp-ssl-52430.nexcesscdn.net/media/catalog/product/cache/1/image/1024x768/9df78eab33525d08d6e5fb8d27136e95/k/a/kaspersky-internet-security-2017.jpg', 'kaspersky ', 250, 25,0,false,2017),
      new Product('Eset Nod32 Antivirus', 'https://cdn1.esetstatic.com/eset/US/pages/product/productBoxShots/225x276-os-icon/box-eav-win-10-finder-os-icon-225x276.png', 'Eset', 150, 10,0,false,2016),
      new Product('Avast Antivirus Premier', 'https://software4free2017.com/wp-content/uploads/2016/11/Avast-Premier-2017.png', 'Avast', 300, 20,0,false,2017),
      new Product('Bitdefender Total Security', 'https://4.bp.blogspot.com/-MGJD_TjbCtc/WVWfbwiF_OI/AAAAAAAAA1o/AHzrSYCt8WomxHuJ6yF3Ih4M1mj2m4bqwCLcBGAs/s1600/box_TSMD_EN.png', 'Bitdefender', 350, 35, 0, false, 2017)
                 );
    return products;
  }

}
