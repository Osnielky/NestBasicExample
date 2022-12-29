import { Controller,Get, Post } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';


@Controller('computer')
export class ComputerController {

constructor (private cpu: CpuService, private disk: DiskService){

}





@Get()
Run (){
let answers = [];

answers.push(this.cpu.compute(1,2))
answers.push (this.disk.getData())

  return answers;

}
}