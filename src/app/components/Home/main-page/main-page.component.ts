import { Component } from '@angular/core';
import { catApiService } from 'src/app/service/cat-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
 isLoadingall: boolean = true;
 isLoadingaRaza: boolean = false;
   Razas: any[] = [];
  selectedRazasId: any = null;;
  selectedrazaInfo: any = null;
  loadingSelect:boolean = false
  images: any[] = [];
  RazasPorFiltar:any[] =[]
  currentImageIndex = 0;
  displayedColumns: string[] = ['name', 'origin', 'temperament'];
  searchText: string = '';
  constructor(public catApiService :catApiService  ) {}

  ngOnInit(): void {
    this.getrazas();
  }

  getrazas(): void {

this.catApiService.GetRazas().subscribe(data => {
        this.Razas = data
        this.RazasPorFiltar = data
        this.isLoadingall = false
      });
   
  }

  onrazaChange(event: any): void {
      this.isLoadingaRaza = false
    this.loadingSelect = true
      this.catApiService.GetRazasById(event.target.value).subscribe(data => {
        this.selectedrazaInfo = data;
      });

       this.catApiService.GetImageById(event.target.value).subscribe(imgs => {
         this.isLoadingaRaza = true
         this.images = imgs;
      this.currentImageIndex = 0;
      });

  }
buscarRaza(): void {
  
  this.RazasPorFiltar = [];
   this.catApiService.GetCatByWord(this.searchText).subscribe(Data => {
      this.RazasPorFiltar = Data
      });
 
}
  nextImage(): void {
    if (this.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  }

  previousImage(): void {
    if (this.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
