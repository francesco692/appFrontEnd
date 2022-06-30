import { HttpBackend } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appFrontEnd';
  data!: string;
  @ViewChild("myOutput") myOutput!: ElementRef;

  constructor(private http : HttpService) { }

  ngOnInit(): void {

  }
  
  getParameter() {
    this.http.getTest("");//((data) => console.log(data));
  }
}