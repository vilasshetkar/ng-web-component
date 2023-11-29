import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aon-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aon-product.component.html',
  styleUrls: ['./aon-product.component.scss']
})
export class AonProductComponent implements OnInit {

  @Input() data: any;

  ngOnInit(): void {
    console.log(this.data)
  }
}
