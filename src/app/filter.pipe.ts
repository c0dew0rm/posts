import { Pipe, PipeTransform, ComponentFactoryResolver } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string, propName:string ): any {
    // console.log("value: "+ value);
    // console.log("filter: "+filterString);
    // console.log("propname: "+propName);
    if( value.length === 0) {
      return value
    }
    const resultArray:string[] = [];
    if( filterString === "") {
      return [];
    }
    else {
      for (const item of value) {
        if(item[propName].toLowerCase().includes(filterString.toLowerCase())) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }

}
