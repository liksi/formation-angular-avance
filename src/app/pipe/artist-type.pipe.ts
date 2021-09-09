import { Pipe, PipeTransform } from '@angular/core';
import { ArtistTypeEnum } from "../model/artist.model";

@Pipe({
  name: 'artistType'
})
export class ArtistTypePipe implements PipeTransform {

  transform(type: ArtistTypeEnum): unknown {
    switch (type) {
      case ArtistTypeEnum.SOLO:
        return 'Solo';
      case ArtistTypeEnum.BAND:
        return 'Band';
      default:
        return 'Unknown';
    }
  }
}
