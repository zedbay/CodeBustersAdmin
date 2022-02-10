import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

interface Principle {
  title: string,
  underTitle: string,
  content: string,
  img: string
}

@Component({
  selector: 'app-community-description',
  templateUrl: './community-description.component.html',
  styleUrls: ['./community-description.component.scss']
})
export class CommunityDescriptionComponent implements OnInit {

  public imgPath = imgPath;

  public principles: Principle[] = [
    {
      title: 'DE DEV A DEV',
      underTitle: '\"Un développeur, c\'est avant tout un problem solver.\"',
      content: "Il doit comprendre des problématiques technico-fonctionnelles parfois complexes, être à jour sur les technologies et outils qui existent.C’est un métier exigeant et nous pensons que seuls les Dévs peuvent se challenger entre eux.Nous pensons qu’il n’y a rien de mieux qu’un dévs pour manager et accompagner dans sa carrière un autre Dév.",
      img: imgPath.cog
    },
    {
      title: 'JAMAIS SEUL',
      underTitle: '\"Un dév ne peut travailler seul.\"',
      img: imgPath.friends,
      content: 'Pour confronter ses idées, progresser, partager ses dernières découvertes mais aussi les derniers bugs résolus. Les Busters peuvent entrer en contact facilement(#Discord), se retrouver pour travailler ensemble, ou juste boire des coups pour échanger sur un problème ou une techno.'
    },
    {
      title: 'GRANDIR ENSEMBLE',
      underTitle: '\"Plus l\'équipe est petite, plus l\'accompagnement est précis.\"',
      img: imgPath.rubiks,
      content: 'Nous avons choisi de créer des squads petites et homogènes qui permettent un échange plus facile entre Busters d’une même squad et génère une progression plus rapide de tous les Busters.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
