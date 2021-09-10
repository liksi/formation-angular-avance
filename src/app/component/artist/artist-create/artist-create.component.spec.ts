import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCreateComponent } from './artist-create.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";

describe('ArtistCreateComponent', () => {
  let component: ArtistCreateComponent;
  let fixture: ComponentFixture<ArtistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistCreateComponent ],
      imports: [RouterTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
