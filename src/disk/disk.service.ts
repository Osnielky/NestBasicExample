import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {

constructor (private powerService: PowerService){



}



 
 public getData()  {
  console.log('Drawing 20 watts from the power service!');
  this.powerService.suplyPower(20);

  return 'Data' 
 }
 


}
