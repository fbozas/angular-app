import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: 'summary' 
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: any) {
       if(!value)
            return null;

        let actualLimit = (limit) ? limit : 50;
        return value.substring(0,actualLimit) + '...';
    }

}