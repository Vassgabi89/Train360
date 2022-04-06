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
    //console.log(key)

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
    phrase = phrase.toLowerCase();
    if (key === 'firstName') {
      return value.filter((item) => {
        const data = String(item['firstName'])
          .toLowerCase()
          .concat(' ', String(item['lastName']).toLowerCase());
        return data.includes(String(phrase));
      });
    }

    //search in customer address
    if (key === 'address') {
      return value.filter((item) => {
        const data = String(item.address.zip)
          .concat(' ', String(item.address.country))
          .concat(' ', String(item.address.city))
          .concat(' ', String(item.address.street))
          .concat(' ', String(item.address.notes))
          .toLowerCase()
        return data.includes(String(phrase))
      });
    }

    //search in every other types
    return value.filter((item) => {
      const data = String(item[key]).toLowerCase();
      return data.includes(String(phrase));
    });
  }

}
