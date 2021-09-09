import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListComponent } from './artist-list.component';
import { IndividuPipe } from "../../../pipe/individu.pipe";

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ArtistListComponent,
        IndividuPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
