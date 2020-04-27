import { Injectable } from '@angular/core';
import {PubNub} from 'pubnub'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  const clientUUID = PubNub.generateUUID();
  
  constructor() { }

}
