import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    value: any[] | null,
    key: string = '',
    phrase: string = '',
    phraseMin: string = '',
    phraseMax: string = ''
  ): any[] | null {

    if (!Array.isArray(value) || (!phrase && !phraseMin && !phraseMax)) {
      return value;
    }

    /*
    //search in every category
    if (!key) {
      return value.filter((item) =>
        Object.values(item).join('').toLowerCase().includes(phrase)
      );
    }*/

    //search in boolean types
    if (typeof phrase === 'boolean') {
      return value.filter((item) => item[key] === phrase);
    }

    //search in number types in an intervall
    if ((phraseMin || phraseMax) || ((phraseMin && phraseMax) && (phraseMin < phraseMax))) {
      if (phraseMin && !phraseMax)
      {
        return value.filter(item => item[key] >= phraseMin)
      }
      if (!phraseMin && phraseMax) {
        return value.filter((item) => item[key] <= phraseMax);
      }
      if (phraseMin && phraseMax) {
        return value.filter(
          (item) => item[key] >= phraseMin && item[key] <= phraseMax
        );
      }
    }

    //search in train name
    if (key === 'train') {
      return value.filter((item) => {
        const data = String(item.train.name).toLowerCase()
        return data.includes(String(phrase).toLowerCase())
      });
    }

    //search in every other types
    return value.filter((item) => {
      const data = String(item[key]).toLowerCase();
      return data.includes(String(phrase).toLowerCase());
    });
  }

}
