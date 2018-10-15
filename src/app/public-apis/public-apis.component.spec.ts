import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicApisComponent } from './public-apis.component';

describe('PublicApisComponent', () => {
  let component: PublicApisComponent;
  let fixture: ComponentFixture<PublicApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
