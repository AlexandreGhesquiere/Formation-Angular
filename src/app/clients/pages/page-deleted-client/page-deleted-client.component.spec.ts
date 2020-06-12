import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeletedClientComponent } from './page-deleted-client.component';

describe('PageDeletedClientComponent', () => {
  let component: PageDeletedClientComponent;
  let fixture: ComponentFixture<PageDeletedClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDeletedClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeletedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
