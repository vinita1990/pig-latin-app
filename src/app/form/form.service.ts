import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

  constructor() { }
 getList(): string[]{
  return ["word1","word2","word3","word4"];
 }
}
