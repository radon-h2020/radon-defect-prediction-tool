import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Repository } from 'app/core/repository/repository.model';

const REPO_DATA: Repository[] = [
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor1', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor2', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor3', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor4', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor5', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor6', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor7', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor8', url: 'github.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor9', url: 'gitlab.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor10', url: 'gitlab.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor11', url: 'gitlab.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor12', url: 'gitlab.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor13', url: 'gitlab.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor14', url: 'gitlab.com/radon-h2020/radon-defect-prediction-api'},
    {id: '1', full_name: 'radon-h2020/radon-defect-predictor15', url: 'gitlab.com/radon-h2020/radon-defect-prediction-api'},
] // To remove when using REST APIs

@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  constructor(private httpClient: HttpClient){ }
  
  getRepositories(): Observable<Repository[]> {
    const repos = of(REPO_DATA); // of(commits) returns an Observable<Commit[]> that emits a single value, the array of mock heroes. It simulates a HttpCall
    return repos;

    //return this.httpClient.get<Repository[]>('url/to/api/repos')
  }

  //postRepository(repository: Repository): Observable<boolean> {
  //  const result = of(true);
  //  return result;
  //}

}