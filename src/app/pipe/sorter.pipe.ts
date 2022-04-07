import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  constructor(

  ){}

  transform(value: any, key: string, sortDirection: string = 'A...Z'): any[] {
    if (!Array.isArray(value) || !key) return value;
    if (!['A...Z', 'Z...A'].includes(sortDirection)) return value;
    if (!sortDirection) sortDirection = 'A...Z';

    const direction = sortDirection === 'A...Z' ? 1 : -1;

    return [...value].sort((a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return direction * (a[key] - b[key]);
      }
      if (key === 'train') {
        const dataA = String(a.train.name).toLowerCase();
        const dataB = String(b.train.name).toLowerCase();
        return direction * dataA.localeCompare(dataB);
      }
      const dataA = String(a[key]).toLowerCase();
      const dataB = String(b[key]).toLowerCase();
      return direction * dataA.localeCompare(dataB);
    });
  }

}
