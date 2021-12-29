import { Injectable } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { Rank } from 'src/app/shared/models/rank';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  private rankImgPath: { [key in Rank]: string } = {
    [Rank.Bronze]: imgPath.ranks.bronze,
    [Rank.Gold]: imgPath.ranks.gold,
    [Rank.Silver]: imgPath.ranks.silver,
    [Rank.Diamond]: imgPath.ranks.diamond
  };

  constructor() { }

  public getImgPathForRank(rank: Rank): string {
    return this.rankImgPath[rank];
  }
}
