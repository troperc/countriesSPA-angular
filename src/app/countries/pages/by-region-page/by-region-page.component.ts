import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  

  constructor(private CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region
  }

  searchByRegion(term: Region) {
    this.selectedRegion = term;
    this.CountriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
