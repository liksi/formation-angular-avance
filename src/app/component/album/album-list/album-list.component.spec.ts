import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumListComponent } from './album-list.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { IndividuPipe } from "../../../pipe/individu.pipe";

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AlbumListComponent,
        IndividuPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to album detail', () => {
    // Arrange
    let albumId = 2;
    let routerSpy = spyOn(router, 'navigate')

    // Act
    component.navigateToDetail(albumId);

    // Assert
    expect(routerSpy).toHaveBeenCalledOnceWith(['/album', albumId]);
  });
});
