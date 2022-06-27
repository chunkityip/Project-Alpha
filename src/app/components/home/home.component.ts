import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string;
  public games: Array<Game> = [];

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit' , params['game-search']);
      } else {
        this.earchGames('metacrit');
      }
    });
  }

  searchGame(sort: string , search?: string): void {
    this.httpService
    .getGameList(sort , search)
    .subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    });
  }
 
}
