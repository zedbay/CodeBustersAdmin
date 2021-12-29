import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Rank } from 'src/app/shared/models/rank';

@Component({
  selector: 'app-rank-selector',
  templateUrl: './rank-selector.component.html',
  styleUrls: ['./rank-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RankSelectorComponent
    }
  ]
})
export class RankSelectorComponent implements OnInit, ControlValueAccessor {


  public ranks = [
    { name: Rank.Bronze, imgPath: 'assets/ranks/bronze.png' },
    { name: Rank.Silver, imgPath: 'assets/ranks/silver.png' },
    { name: Rank.Gold, imgPath: 'assets/ranks/gold.png' },
    { name: Rank.Diamond, imgPath: 'assets/ranks/diamond.png' }
  ];

  public selectedRank = this.ranks[0];

  public onChange = (rank: string) => { };

  onTouched = () => { };

  touched = false;

  disabled = false;


  constructor() { }

  ngOnInit(): void {
  }

  selectValue(rankName: string): void {
    this.onChange(rankName);
  }

  writeValue(rankName: string): void {
    const targetRank = this.ranks.find((r) => r.name === rankName);
    if (targetRank) {
      this.selectedRank = targetRank;
    } else {
      this.ranks[0];
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

}
