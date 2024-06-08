import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})

export class EventosComponent implements OnInit {

  private eventos: any;
  private urlBase = 'https://localhost:7261/api/evento';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }



}
