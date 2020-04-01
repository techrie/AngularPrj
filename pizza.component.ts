import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Menu.model';
import { MenuselectService } from 'src/app/Menuselect.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzamenu: Menu[]; 

  constructor(private menuService: MenuselectService) { }

  ngOnInit() {
    this.pizzamenu = this.menuService.getPizza();
  }

  sendToCart(menu: Menu){
    /* this.menuService.menuSelected.emit(menu);
    console.log(menu); */
    this.menuService.addItemsToCart(menu);
  }

}
